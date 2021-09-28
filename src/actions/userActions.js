import {baseURL} from './artActions'

export const fetchUsers = () => {
    return (dispatch) => {
        fetch(`${baseURL}/users`)
        .then(resp => resp.json())
        .then(users => {
            dispatch({type: "GET_USERS", payload: users})
        })
    }
}

export const addUser = (user) => {
    return (dispatch) => {
        fetch(`${baseURL}/users`, {
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
        fetch(`${baseURL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({user})
        })
        .then(resp => resp.json())
        .then(user => {
            if(user.message){
                alert(user.message)
            } else {
                localStorage.setItem('userLogin', user.jwt)
                localStorage.setItem('userId', user.user.id) 
                dispatch({type: "LOGIN_USER", payload: user})
            }
        })
    }
}