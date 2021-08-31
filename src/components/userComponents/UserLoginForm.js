import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {loginUser} from '../../actions/userActions'
import {Button} from 'react-bootstrap'

function UserLoginForm(props) {

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
        dispatch(loginUser(userValues))
        setUserValues({
            email: '',
            password: ''
        })
        props.history.push('/art_posts')
    }
    
    
    return (
        <div id="user-login-form">
            <h1>Login To Sell</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="email" placeholder="Email" name="email" value={userValues.email} onChange={(event) => handleChange(event)}/>
                <input type="password" placeholder="Password" name="password" value={userValues.password} onChange={(event) => handleChange(event)}/>
                <Button type="submit" variant="primary">Login</Button>
            </form>
        </div>
    )
}

export default UserLoginForm
