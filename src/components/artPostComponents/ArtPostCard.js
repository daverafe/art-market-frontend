import React from 'react'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../actions/artActions'
import {deleteArtPost} from '../../actions/artActions'
import {Link} from 'react-router-dom'
import {Card, Button, Col} from 'react-bootstrap'

function ArtPostCard({artPost}) {

    const dispatch = useDispatch()

    const handleAddToCart = (artPost) => {
        dispatch(addToCart(artPost))
    }

    
    const handleDelete = (artPostId) => {
        dispatch(deleteArtPost(artPostId))
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
                            <Button variant="primary" onClick={() => handleAddToCart(artPost)}>Add To Cart</Button>
                            <Link to={`/art_posts/${artPost.id}/edit`}>
                                <Button variant="info">Edit Post</Button>
                            </Link>
                            <Button variant="danger" onClick={() => handleDelete(artPost.id)}>Delete</Button>
                        </Card.Body>
                    </Card>
                </Col>
        </>
    )
}

export default ArtPostCard

