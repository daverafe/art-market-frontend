export const fetchArt = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/art_posts')
        .then(resp => resp.json())
        .then(artPosts => {
            dispatch({type: "ADD_ART", payload: artPosts})
        })
    }
}

export const addArtPost = (art_post) => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/art_posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({art_post})
        })
        .then(resp => resp.json())
        .then(art_post => {
            dispatch({type: "ADD_ART_POST", payload: art_post})
        })
    }
}

export const updateArtPost = (art_post, artPostId) => { 
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/art_posts/${artPostId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({art_post})
        })
        .then(resp => resp.json())
        .then(art_post => {
            dispatch({type: "UPDATE_ART_POST", payload: art_post})
        })
    }
}

export const deleteArtPost = (art_post) => {
    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/art_posts/${art_post.id}`, {
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(art_post => {
            dispatch({type: "DELETE_ART_POST", payload: art_post})
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
