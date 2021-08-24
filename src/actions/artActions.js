export const fetchArt = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/art_posts')
        .then(resp => resp.json())
        .then(artPosts => {
            dispatch({type: "ADD_ART", payload: artPosts})
        })
    }
}