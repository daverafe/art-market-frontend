import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {loginUser} from '../../actions/userActions'
import {Button, Form} from 'react-bootstrap'

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
        <div className="user-form">
            <h1>Login To Sell</h1>
            <Form onSubmit={(event) => handleSubmit(event)}>
                <Form.Control id="input-email-log" type="email" placeholder="Email" name="email" value={userValues.email} onChange={(event) => handleChange(event)}/>
                <br/>
                <Form.Control id="input-password-log" type="password" placeholder="Password" name="password" value={userValues.password} onChange={(event) => handleChange(event)}/>
                <Button className="form-bttns" type="submit" variant="primary">Login</Button>
            </Form>
        </div>
    )
}

export default UserLoginForm
