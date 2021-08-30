import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addArtPost } from '../../actions/artActions'
import { DirectUpload } from 'activestorage';

function ArtPostCreateForm() {

    const dispatch = useDispatch()
    const [artValues, setArtValues] = useState({
        title: '',
        image: '',
        price: 0,
        description: '',
        user_id: 1 
    })
    
    const handleChange = (event) => {
        setArtValues({...artValues, [event.target.name]: event.target.value})
    }

    const handleFile = (event) => {
       const image = event.target.files[0] 
       setArtValues({...artValues, image})
    }

    const uploadFile = (artValues) => {
        const upload = new DirectUpload(artValues.image, 'http://127.0.0.1:3000/rails/active_storage/direct_uploads')
        upload.create((error, blob) => {
            if(error) {
                console.log(error)
            } else {
                dispatch(addArtPost(artValues, blob))
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        uploadFile(artValues)
        setArtValues({
            title: '',
            image: '',
            price: 0,
            description: '',
            user_id: 1
        })
    }
    
    return (
        <div id="art-post-create-form">
            <h1>Create A New Art Post</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="text" name="title" value={artValues.title} placeholder="Title" onChange={(event) => handleChange(event)}/>
                <input type="file" name="image" onChange={(event) => handleFile(event)}/>
                <input type="number" name="price" value={artValues.price} placeholder="Price" onChange={(event) => handleChange(event)}/>
                <input type="text" name="description" value={artValues.description} placeholder="Description" onChange={(event) => handleChange(event)}/>
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}

export default ArtPostCreateForm
