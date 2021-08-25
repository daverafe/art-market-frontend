import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addUser} from '../actions/userActions'

function UserSignupForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const user = {
        email: email,
        password: password 
    }
    const dispatch = useDispatch()

    const handleChange = (event) => {
        if(event.target.name === "email"){
            setEmail(event.target.value)
        } else {
            setPassword(event.target.value)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addUser(user))
        setEmail("")
        setPassword("")
    }
    
    
    return (
        <div id="user-signup-form">
            <h1>Sign Up To Sell</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="email" placeholder="Email" name="email" value={email} onChange={(event) => handleChange(event)}/>
                <input type="password" placeholder="Password" name="password" value={password} onChange={(event) => handleChange(event)}/>
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    )
}

export default UserSignupForm
