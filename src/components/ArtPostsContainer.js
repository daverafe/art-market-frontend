import React from 'react'
import ArtPostCard from './ArtPostCard'
import ArtPostSearchForm from './ArtPostSearchForm'

function ArtPostsContainer() {
    return (
        <div className="art-posts-container">
            <ArtPostSearchForm />
            <ArtPostCard />
        </div>
    )
}

export default ArtPostsContainer
