import React from 'react'

function UserSignupForm() {
    return (
        <div id="user-signup-form">
            <form>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="submit" value="Sign Up"/>
            </form>
        </div>
    )
}

export default UserSignupForm
