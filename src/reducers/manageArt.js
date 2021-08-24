const manageArt = (state = {
    art_posts: [],
    cart: []
}, action) => {
    switch(action.type){
        case "ADD_ART":
            return {
                ...state,
                art_posts: action.payload
            }
            default:
            return state 
    }
}

export default manageArt