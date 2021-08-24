import React from 'react'
import {useDispatch} from 'react-redux'
import {addToCart} from '../actions/artActions'

function ArtPostCard({artPost}) {

    const dispatch = useDispatch()

    const handleClick = (artPost) => {
        dispatch(addToCart(artPost))
    }
    
    return (
        <div className="art-post-card">
            <h2>{artPost.title}</h2>
            <p>${artPost.price}</p>
            <p>{artPost.description}</p>
            <button onClick={() => handleClick(artPost)}>Add To Cart</button>
        </div>
    )
}

export default ArtPostCard
