import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {addToCart} from '../../actions/artActions'
import {deleteArtPost} from '../../actions/artActions'
import {baseURL} from '../../actions/artActions'

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
        <div id="show-box">
            <div id="show-img-box">
                <img id="show-img" alt="art" src={`${baseURL + artPost.url}`} onError={(e)=>{e.target.onerror = null; e.target.src="https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=zach-key-rKE6rXOl14U-unsplash.jpg"}}/>
            </div>
            <div id="show-details">
                <h1>{artPost.title}</h1>
                <br/>
                <h3>${artPost.price}</h3>
                <h3>{artPost.description}</h3>
                <br/>
                <Button className="show-bttns" variant="primary" onClick={() => handleAddToCart(artPost)}>Add To Cart</Button>
                { currentUser && currentUser.id === artPost.user_id ? 
                    <Link to={`/art_posts/${artPost.id}/edit`}>
                        <Button className="show-bttns" variant="info">Edit Post</Button>
                    </Link> : null}
                { currentUser && currentUser.id === artPost.user_id ? 
                    <Button className="show-bttns" variant="danger" onClick={() => handleDelete(artPost.id)}>Delete</Button> : null}
            </div>
        </div>
    )
}

export default ArtPostShow
