import React from 'react'
import {useDispatch} from 'react-redux'
import {removeFromCart} from '../../actions/artActions'

function CartPostCard({artPost}) {
    const dispatch = useDispatch()

    const handleClick = (artPost) => {
        dispatch(removeFromCart(artPost))
    }
    
    return (
        <div className="art-post-card">
            <h2>{artPost.title}</h2>
            <p>${artPost.price}</p>
            <p>{artPost.description}</p>
            <button onClick={() => handleClick(artPost)}>Remove From Cart</button>
        </div>
    )
}

export default CartPostCard
