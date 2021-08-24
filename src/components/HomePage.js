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
            <p>Sign up to sell:</p>
            <Link to="/signup">
                <button id="home-bttn-signup">Sign Up</button>
            </Link>
        </div>
    )
}

export default HomePage
