import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Container, Row, Col, Card} from 'react-bootstrap'

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
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }} className="card">
                            <Link to="/signup">
                                <Card.Img className="card-img" variant="top" src="https://images.unsplash.com/photo-1554252117-53f26a5ebdbd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvcm18ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"/>
                            </Link>
                            <Card.Body>
                                <Card.Text>
                                    <h4>Create an account</h4>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }} className="card">
                            <Link to="/login">
                                <Card.Img className="card-img" variant="top" src="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
                            </Link>
                            <Card.Body>
                                <Card.Text>
                                    <h4>Post your art</h4>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }} className="card">
                            <Link to="/art_posts">
                                <Card.Img className="card-img" variant="top" src="https://images.unsplash.com/photo-1557821552-17105176677c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmclMjBjYXJ0fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
                            </Link>
                            <Card.Body>
                                <Card.Text>
                                    <h4>Shop the art</h4>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default HomePage
