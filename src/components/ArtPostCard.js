import React from 'react'
import {useDispatch} from 'react-redux'
import {addToCart} from '../actions/artActions'
import {Link} from 'react-router-dom'

function ArtPostCard({artPost}) {

    const dispatch = useDispatch()

    const handleAddToCart = (artPost) => {
        dispatch(addToCart(artPost))
    }

    return (
        <div className="art-post-card">
            <Link to={`/art_posts/${artPost.id}`}>
                <h2>{artPost.title}</h2>
            </Link>
            <p>${artPost.price}</p>
            <p>{artPost.description}</p>
            <button onClick={() => handleAddToCart(artPost)}>Add To Cart</button>
        </div>
    )
}

export default ArtPostCard
