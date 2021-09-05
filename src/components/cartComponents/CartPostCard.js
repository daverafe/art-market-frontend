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
                    <Link to={`/art_posts/${artPost.id}`}>
                        <Card.Img className="card-img" variant="top" src={`http://127.0.0.1:3000${artPost.url}`} />
                    </Link>
                    <Card.Body>
                        <Card.Title>{artPost.title}</Card.Title>
                        <Card.Text>
                            ${artPost.price}
                        </Card.Text>
                        <Button variant="dark" onClick={() => handleClick(artPost)}>Remove From Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default CartPostCard


