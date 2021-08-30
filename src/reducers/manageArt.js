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
                art_posts: [...state.art_posts, {...action.payload.art_post, image_url: action.payload.image_url}]
            }

        case "UPDATE_ART_POST":
            const artPost = state.art_posts.find(art => art.id === action.payload.id)
            return {
                ...state,
                art_posts: state.art_posts.map(art => {
                    if(art !== artPost){
                        return art 
                    } else {
                        return action.payload 
                    }
                })
            }

        case "DELETE_ART_POST":
            return {
                ...state,
                art_posts: state.art_posts.filter(art => art.id !== action.payload)
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