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
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                        <Link to={`/art_posts/${artPost.id}`}>
                            <Card.Title>{artPost.title}</Card.Title>
                        </Link>
                            <Button variant="primary" onClick={() => handleAddToCart(artPost)}>Add To Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
        </>
    )
}

export default ArtPostCard

