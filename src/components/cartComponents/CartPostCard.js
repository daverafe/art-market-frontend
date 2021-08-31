import React from 'react'
import {useDispatch} from 'react-redux'
import {removeFromCart} from '../../actions/artActions'
import {Col, Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function CartPostCard({artPost}) {
    const dispatch = useDispatch()

    const handleClick = (artPost) => {
        dispatch(removeFromCart(artPost))
    }
    
    return (
        <>
            <Col>
                <Card style={{ width: '18rem' }} className="card">
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Link to={`/art_posts/${artPost.id}`}>
                        <Card.Title>{artPost.title}</Card.Title>
                    </Link>
                        <Card.Text>
                            ${artPost.price}
                        </Card.Text>
                        <Card.Text>
                            {artPost.description}
                        </Card.Text>
                        <Button variant="dark" onClick={() => handleClick(artPost)}>Remove From Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default CartPostCard


