import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchUsers} from '../actions/userActions'

function NavBar() {

    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const currentUser = users.find(user => user.userLogin)

    const artInCart = useSelector(state => state.art.cart)

    const handleClick = () => {
        localStorage.setItem('userLogin', '')
        localStorage.setItem('userId', '')
        dispatch(fetchUsers())
    }
    
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/art_posts">Art</Nav.Link>
                    {currentUser ? 
                        <Nav.Link as={Link} to="/art_posts/new">Create Art Post</Nav.Link> : null}
                    {!currentUser ? 
                        <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link> : null}
                    {!currentUser ? 
                        <Nav.Link as={Link} to="/login">Login</Nav.Link> : null}
                    <Nav.Link as={Link} to="/cart">Cart{artInCart.length > 0 ? <span id="cart-icon">{artInCart.length}</span> : null}</Nav.Link>
                    {currentUser ? 
                        <Nav.Link as={Link} to="/art_posts" onClick={() => handleClick()}>Logout</Nav.Link>: null}
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar


