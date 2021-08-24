import React from 'react'

function ArtPostCard(props) {
    return (
        <div className="art-post-card">
            <h2>{props.title}</h2>
            <p>{props.price}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default ArtPostCard
