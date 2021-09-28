import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

function HomePage() {
    return (
        <>
            <div id="homepage-top">
                <h1>Welcome To The Art Market!</h1>
                <h2>A platform designed to give local artists an easy place to showcase their work with the world</h2>
                <h3>Create an account or login to sell</h3>
                <Link to="/signup">
                    <Button variant="secondary">Sign Up</Button>{' '}
                </Link>
                <Link to="/login">
                    <Button variant="secondary">Login</Button>{' '}
                </Link>
            </div>
            <div id="homepage-bottom">
                <h2>HOW IT WORKS</h2>
                <h4>1. Create an account</h4>
                <h4>2. Post your art</h4>
                <h4>3. Share with the world</h4>
                <h4>***</h4>
                <h3>Click here to browse the art</h3>
                <Link to="/art_posts">
                    <Button variant="secondary">Art</Button>{' '}
                </Link>
            </div>
        </>
    )
}

export default HomePage
