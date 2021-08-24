import React, {useEffect} from 'react'
import ArtPostCard from './ArtPostCard'
import ArtPostSearchForm from './ArtPostSearchForm'
import {useSelector, useDispatch} from 'react-redux'
import {fetchArt} from '../actions/artActions'

function ArtPostsContainer() {

    const artPosts = useSelector(state => state.art_posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchArt())
    })
    
    return (
        <div className="art-posts-container">
            <ArtPostSearchForm />
            {artPosts.map(artPost => {
                return <ArtPostCard key={artPost.id} artPost={artPost}/>
            })}
        </div>
    )
}

export default ArtPostsContainer
