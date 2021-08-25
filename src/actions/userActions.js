export const addUser = (user) => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({user})
        })
        .then(resp => resp.json())
        .then(user => {
            dispatch({type: "ADD_USER", payload: user})
        })
    }
}