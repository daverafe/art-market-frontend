import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../actions/artActions'
import {deleteArtPost} from '../../actions/artActions'

function ArtPostShow({artPost, routeInfo}) {

    const dispatch = useDispatch()

    const handleAddToCart = (artPost) => {
        dispatch(addToCart(artPost))
    }

    
    const handleDelete = (artPostId) => {
        dispatch(deleteArtPost(artPostId))
        routeInfo.history.push('/art_posts')
    }

    return (
        <div id="show">
            <h1>{artPost.title}</h1>
            <p>${artPost.price}</p>
            <p>{artPost.description}</p>
            <Button variant="primary" onClick={() => handleAddToCart(artPost)}>Add To Cart</Button>
            <Link to={`/art_posts/${artPost.id}/edit`}>
                <Button variant="info">Edit Post</Button>
            </Link>
            <Button variant="danger" onClick={() => handleDelete(artPost.id)}>Delete</Button>
        </div>
    )
}

export default ArtPostShow
