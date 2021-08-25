import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addArtPost } from '../../actions/artActions'

function ArtPostCreateForm() {

    const dispatch = useDispatch()
    const [artValues, setArtValues] = useState({
        title: '',
        price: 0,
        description: '',
        user_id: 1 
    })
    
    const handleChange = (event) => {
        setArtValues({...artValues, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addArtPost(artValues))
        setArtValues({
            title: '',
            price: 0,
            description: ''
        })
    }
    
    return (
        <div id="art-post-create-form">
            <h1>Create A New Art Post</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="text" name="title" value={artValues.title} placeholder="Title" onChange={(event) => handleChange(event)}/>
                <input type="number" name="price" value={artValues.price} placeholder="Price" onChange={(event) => handleChange(event)}/>
                <input type="text" name="description" value={artValues.description} placeholder="Description" onChange={(event) => handleChange(event)}/>
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}

export default ArtPostCreateForm
