import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import {useSelector} from 'react-redux'

function NavBar() {

    const users = useSelector(state => state.users.users)
    const currentUser = users.find(user => user.jwt)
    
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/art_posts">Art</Nav.Link>
                    { currentUser ?
                    <Nav.Link href="/art_posts/new">Create Art Post</Nav.Link> : null}
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/cart">Cart</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar


