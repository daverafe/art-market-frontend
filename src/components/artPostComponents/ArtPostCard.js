import React from 'react'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../actions/artActions'
import {Link} from 'react-router-dom'
import {Card, Button, Col} from 'react-bootstrap'

function ArtPostCard({artPost}) {

    const dispatch = useDispatch()

    const handleAddToCart = (artPost) => {
        dispatch(addToCart(artPost))
    }

    return (
        <>
                <Col>
                    <Card style={{ width: '18rem' }} className="card">
                        <Link to={`/art_posts/${artPost.id}`}>
                            <Card.Img variant="top" src={`http://127.0.0.1:3000${artPost.image_url}`} />
                        </Link>
                        <Card.Body>
                            <Card.Title>{artPost.title}</Card.Title>
                            <Button variant="primary" onClick={() => handleAddToCart(artPost)}>Add To Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
        </>
    )
}

export default ArtPostCard

