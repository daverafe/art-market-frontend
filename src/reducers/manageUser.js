const manageUser = (state = {
    users: []
}, action) => {
    switch(action.type){
        case "GET_USERS":
            return {users: action.payload}
        case "ADD_USER":
            return [...state.users, action.payload]
        default:
            return state
    }
}

export default manageUser