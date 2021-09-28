import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addArtPost } from '../../actions/artActions'
import { DirectUpload } from 'activestorage';
import {Button, Form} from 'react-bootstrap'
import {baseURL} from '../../actions/artActions'

function ArtPostCreateForm(props) {

    const users = useSelector(state => state.users.users)
    const currentUser = users.find(user => user.userLogin)

    const dispatch = useDispatch()
    const [artValues, setArtValues] = useState({
        title: '',
        image: '',
        price: '',
        description: '',
        user_id: currentUser ? currentUser.id : null 
    })
    
    const handleChange = (event) => {
        setArtValues({...artValues, [event.target.name]: event.target.value})
    }

    const handleFile = (event) => {
       const image = event.target.files[0] 
       setArtValues({...artValues, image})
    }

    const uploadFile = (artValues) => {
        const upload = new DirectUpload(artValues.image, `${baseURL}/rails/active_storage/direct_uploads`)
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
            price: '',
            description: '',
            user_id: currentUser.id 
        })
        props.history.push('/art_posts')
    }
    
    return (
        <div id="art-post-create-form">
            <h1>Create A New Art Post</h1>
            <Form onSubmit={(event) => handleSubmit(event)}>
                <Form.Control id="input-text" type="text" placeholder="Title" name="title" value={artValues.title} onChange={(event) => handleChange(event)}/>
                <Form.Label><h3>Upload Image</h3></Form.Label>
                <Form.Control id="input-file" type="file" name="image" onChange={(event) => handleFile(event)}/>
                <br/>
                <Form.Control id="input-price" type="number" placeholder="Price" name="price" value={artValues.price} onChange={(event) => handleChange(event)}/>
                <br/>
                <Form.Control id="input-description" type="text" placeholder="Description" name="description" value={artValues.description} onChange={(event) => handleChange(event)}/>
                <Button className="form-bttns" type="submit" variant="primary">Create</Button>
            </Form>
        </div>
    )
}

export default ArtPostCreateForm

