import React from 'react'
import {useDispatch} from 'react-redux'
import {removeFromCart} from '../../actions/artActions'
import {Col, Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {baseURL} from '../../actions/artActions'

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
                        <Card.Img className="card-img" variant="top" src={`${baseURL + artPost.url}`} onError={(e)=>{e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=zach-key-rKE6rXOl14U-unsplash.jpg"}}/>
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


