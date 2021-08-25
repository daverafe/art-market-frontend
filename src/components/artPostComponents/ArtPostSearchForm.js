import React from 'react'


function ArtPostSearchForm(props) {

    return (
        <div id="art-post-search-form">
            <form>
                <input type="text" placeholder="Search" onChange={props.handleChange}/>
            </form>
        </div>
    )
}

export default ArtPostSearchForm
