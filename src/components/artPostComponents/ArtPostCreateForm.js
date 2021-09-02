import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addArtPost } from '../../actions/artActions'
import { DirectUpload } from 'activestorage';
import {Button} from 'react-bootstrap'

function ArtPostCreateForm(props) {

    const users = useSelector(state => state.users.users)
    const currentUser = users.find(user => user.userLogin)

    const dispatch = useDispatch()
    const [artValues, setArtValues] = useState({
        title: '',
        image: '',
        price: '',
        description: '',
        user_id: currentUser.user.id 
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
            price: '',
            description: '',
            user_id: currentUser.user.id 
        })
        props.history.push('/art_posts')
    }
    
    return (
        <div id="art-post-create-form">
            <h1>Create A New Art Post</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Title:</label>
                <input type="text" name="title" value={artValues.title} onChange={(event) => handleChange(event)}/>
                <br/>
                <br/>
                <label>Image:</label>
                <input type="file" name="image" onChange={(event) => handleFile(event)}/>
                <br/>
                <br/>
                <label>Price:</label>
                <input type="number" name="price" value={artValues.price} onChange={(event) => handleChange(event)}/>
                <br/>
                <br/>
                <label>Description:</label>
                <input type="text" name="description" value={artValues.description} onChange={(event) => handleChange(event)}/>
                <Button type="submit" variant="primary">Create</Button>
            </form>
        </div>
    )
}

export default ArtPostCreateForm
