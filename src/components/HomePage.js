import React from 'react'
import {Link} from 'react-router-dom'

function HomePage() {
    return (
        <div id="homepage">
            <h1>Welcome To The Art Market!</h1>
            <p>Check out the art: </p>
            <Link to="/art_posts">
                <button id="home-bttn-art">Art</button>
            </Link>
            <p>Sign up or Login to sell:</p>
            <Link to="/signup">
                <button id="home-bttn-signup">Sign Up</button>
            </Link>
            <Link to="/login">
                <button id="home-bttn-login">Login</button>
            </Link>
        </div>
    )
}

export default HomePage
