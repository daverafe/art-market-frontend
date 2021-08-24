import React from 'react'

function UserSignupForm() {
    return (
        <div id="user-signup-form">
            <h1>Sign Up To Sell</h1>
            <form>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    )
}

export default UserSignupForm
