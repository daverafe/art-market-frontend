import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

function HomePage() {
    return (
        <div id="homepage">
            <h1>Welcome To The Art Market!</h1>
            <p>Check out the art: </p>
            <Link to="/art_posts">
                <Button variant="light">Art</Button>{' '}
            </Link>
            <p>Sign up or Login to sell:</p>
            <Link to="/signup">
                <Button variant="secondary">Sign Up</Button>{' '}
            </Link>
            <Link to="/login">
                <Button variant="secondary">Login</Button>{' '}
            </Link>
        </div>
    )
}

export default HomePage
