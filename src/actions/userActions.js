export const fetchUsers = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/users')
        .then(resp => resp.json())
        .then(users => {
            dispatch({type: "GET_USERS", payload: users})
        })
    }
}

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
            localStorage.setItem('userLogin', user.jwt)
            localStorage.setItem('userId', user.user.id) 
            dispatch({type: "ADD_USER", payload: user})
        })
    }
}

export const loginUser = (user) => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({user})
        })
        .then(resp => resp.json())
        .then(user => {
            localStorage.setItem('userLogin', user.jwt)
            localStorage.setItem('userId', user.user.id) 
            dispatch({type: "LOGIN_USER", payload: user})
        })
    }
}