import React from 'react'

function ArtPostCard({artPost}) {
    return (
        <div className="art-post-card">
            <h2>{artPost.title}</h2>
            <p>${artPost.price}</p>
            <p>{artPost.description}</p>
            <button>Add To Cart</button>
        </div>
    )
}

export default ArtPostCard
