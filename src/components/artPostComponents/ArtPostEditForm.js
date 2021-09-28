import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {updateArtPost} from '../../actions/artActions'
import {Button, Form} from 'react-bootstrap'

function ArtPostEditForm({artPost, routeInfo}) {
    
    const dispatch = useDispatch()
    const [artValues, setArtValues] = useState({
        title: artPost.title,
        price: artPost.price,
        description: artPost.description,
        user_id: artPost.user_id 
    })
    
    const handleChange = (event) => {
        setArtValues({...artValues, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(updateArtPost(artValues, artPost.id))
        setArtValues({
            title: '',
            price: 0,
            description: ''
        })
        routeInfo.history.push('/art_posts')
    }
    
    
    
    return (
        <div id="art-post-edit-form">
        <h1>Edit Art Post</h1>
        <Form onSubmit={(event) => handleSubmit(event)}>
            <Form.Control id="input-edit-title" type="text" name="title" value={artValues.title} placeholder="Title" onChange={(event) => handleChange(event)}/>
            <br/>
            <Form.Control id="input-edit-price" type="number" name="price" value={artValues.price} placeholder="Price" onChange={(event) => handleChange(event)}/>
            <br/>
            <Form.Control id="input-edit-description" type="text" name="description" value={artValues.description} placeholder="Description" onChange={(event) => handleChange(event)}/>
            <Button className="form-bttns" type="submit" variant="primary">Edit</Button>
        </Form>
    </div>
    )
}

export default ArtPostEditForm
