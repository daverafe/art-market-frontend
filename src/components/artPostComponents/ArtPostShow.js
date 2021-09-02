import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {addToCart} from '../../actions/artActions'
import {deleteArtPost} from '../../actions/artActions'

function ArtPostShow({artPost, routeInfo}) {

    const dispatch = useDispatch()

    const users = useSelector(state => state.users.users)
    const currentUser = users.find(user => user.userLogin)

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
            <img id="show-img" alt="art" src={`http://127.0.0.1:3000${artPost.url}`}/>
            <p>${artPost.price}</p>
            <p>{artPost.description}</p>
            <Button variant="primary" onClick={() => handleAddToCart(artPost)}>Add To Cart</Button>
            { currentUser && currentUser.user.id === artPost.user_id ? 
                <Link to={`/art_posts/${artPost.id}/edit`}>
                    <Button variant="info">Edit Post</Button>
                </Link> : null}
            { currentUser && currentUser.user.id === artPost.user_id ? 
                <Button variant="danger" onClick={() => handleDelete(artPost.id)}>Delete</Button> : null}
        </div>
    )
}

export default ArtPostShow
