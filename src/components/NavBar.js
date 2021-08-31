import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

function NavBar() {

    const users = useSelector(state => state.users.users)
    const currentUser = users.find(user => user.jwt)
    
    return (
        <div className="nav">
            <Link to="/">
                <button id="nav-home">Home</button>
            </Link>
            <Link to="/art_posts">
                <button id="nav-art">Art</button>
            </Link>
            {currentUser ? 
                <Link to="/art_posts/new">
                    <button id="nav-sign-up">Create Art Post</button>
                </Link> : null}
            <Link to="/signup">
                <button id="nav-sign-up">Sign Up</button>
            </Link> 
            <Link to="/login">
                <button id="nav-login">Login</button>
            </Link>
            <Link to="/cart">
                <button id="nav-cart">Cart</button>
            </Link>
        </div>
    )
}

export default NavBar
