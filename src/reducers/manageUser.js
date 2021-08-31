const manageUser = (state = {
    users: []
}, action) => {
    switch(action.type){
        case "GET_USERS":
            return {users: action.payload}
        case "ADD_USER":
            return {users: [...state.users, {...action.payload.user, jwt: action.payload.jwt}]}
        case "LOGIN_USER":
            const loginUser = state.users.find(user => user.id === action.payload.user.id)
            return { users: state.users.map(user => {
                if(user !== loginUser){
                    return user 
                } else {
                    return {...action.payload.user, jwt: action.payload.jwt}
                }
            })}
        default:
            return state
    }
}

export default manageUser