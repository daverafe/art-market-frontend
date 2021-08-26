import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {updateArtPost} from '../../actions/artActions'

function ArtPostEditForm({artPost}) {
    
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
    }
    
    
    
    return (
        <div id="art-post-edit-form">
        <h1>Edit Art Post</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
            <input type="text" name="title" value={artValues.title} placeholder="Title" onChange={(event) => handleChange(event)}/>
            <input type="number" name="price" value={artValues.price} placeholder="Price" onChange={(event) => handleChange(event)}/>
            <input type="text" name="description" value={artValues.description} placeholder="Description" onChange={(event) => handleChange(event)}/>
            <input type="submit" value="Edit" />
        </form>
    </div>
    )
}

export default ArtPostEditForm
