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

        case "ADD_ART_POST":
            return {
                ...state,
                art_posts: [...state.art_posts, action.payload]
            }

        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(art => art.id !== action.payload.id)
            }
        default:
            return state 
    }
}

export default manageArt