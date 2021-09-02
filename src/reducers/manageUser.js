const manageUser = (state = {
    users: []
}, action) => {
    switch(action.type){
        case "GET_USERS":
            const userLogin = localStorage.getItem('userLogin')
            const userId = parseInt(localStorage.getItem('userId'))
            return {users: action.payload.map(user => {
                if(user.id === userId){
                    return {user, userLogin: userLogin}
                } else {
                    return user 
                }
            })}
        
        case "ADD_USER":
            return {users: [...state.users, {...action.payload.user, userLogin: userLogin}]}
        
        case "LOGIN_USER":
            const loginUser = state.users.find(user => user.id === action.payload.user.id)
            return { users: state.users.map(user => {
                if(user !== loginUser){
                    return user 
                } else {
                    const userLogin = localStorage.getItem('userLogin')
                    return {...action.payload.user, userLogin: userLogin}
                }
            })}
        default:
            return state
    }
}

export default manageUser