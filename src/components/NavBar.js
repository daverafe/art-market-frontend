import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

function NavBar() {

    const users = useSelector(state => state.users.users)
    const currentUser = users.find(user => user.jwt)
    
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/art_posts">Art</Nav.Link>
                    { currentUser ?
                    <Nav.Link as={Link} to="/art_posts/new">Create Art Post</Nav.Link> : null}
                    <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar


