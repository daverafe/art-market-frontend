import React from 'react'
import {useSelector} from 'react-redux'
import CartPostCard from './CartPostCard'

function Cart() {

    const artInCart = useSelector(state => state.cart)

    return (
        <div id="cart">
            <h1>Cart</h1>
            {artInCart.map(art => {
                return <CartPostCard key={art.id} artPost={art}/>
            })}
        </div>
    )
}

export default Cart
