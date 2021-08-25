import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addUser} from '../../actions/userActions'

function UserSignupForm() {

    const [userValues, setUserValues] = useState({
        email: '',
        password: '' 
    })
    
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setUserValues({...userValues, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addUser(userValues))
        setUserValues({
            email: '',
            password: ''
        })
    }
    
    
    return (
        <div id="user-signup-form">
            <h1>Sign Up To Sell</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="email" placeholder="Email" name="email" value={userValues.email} onChange={(event) => handleChange(event)}/>
                <input type="password" placeholder="Password" name="password" value={userValues.password} onChange={(event) => handleChange(event)}/>
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    )
}

export default UserSignupForm
