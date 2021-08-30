const manageUser = (state = {
    users: []
}, action) => {
    switch(action.type){
        case "GET_USERS":
            return {users: action.payload}
        case "ADD_USER":
            return [...state.users, {...action.payload.user, jwt: action.payload.jwt}]
        default:
            return state
    }
}

export default manageUser