import React from 'react'
import ArtPostCard from './ArtPostCard'
import ArtPostSearchForm from './ArtPostSearchForm'
import {useSelector} from 'react-redux'

function ArtPostsContainer() {

    const artPosts = useSelector(state => state.art_posts)
    
    return (
        <div className="art-posts-container">
            <ArtPostSearchForm />
            {artPosts.map(artPost => {
                return <ArtPostCard artPost={artPost}/>
            })}
        </div>
    )
}

export default ArtPostsContainer
