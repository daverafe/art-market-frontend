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
                        <Card.Img className="card-img" variant="top" src={`https://hidden-thicket-87615.herokuapp.com${artPost.url}`} onError={(e)=>{e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=zach-key-rKE6rXOl14U-unsplash.jpg"}}/>
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

