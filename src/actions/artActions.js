export const fetchArt = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/art_posts')
        .then(resp => resp.json())
        .then(artPosts => {
            dispatch({type: "ADD_ART", payload: artPosts})
        })
    }
}


export const addToCart = (artPost) => {
    return {
        type: "ADD_TO_CART",
        payload: artPost
    }
}

export const removeFromCart = (artPost) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: artPost
    }
}
