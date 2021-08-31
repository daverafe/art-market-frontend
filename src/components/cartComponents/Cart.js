import React from 'react'
import {useSelector} from 'react-redux'
import CartPostCard from './CartPostCard'
import {Container, Row} from 'react-bootstrap'

function Cart() {

    const artInCart = useSelector(state => state.art.cart)
        
    return (
        <div id="cart">
            <h1>Cart</h1>
            <Container>
                <Row>
                    {artInCart.map(art => {
                        return <CartPostCard key={art.id} artPost={art}/>
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Cart
