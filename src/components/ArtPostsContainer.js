import React, {useState, useEffect} from 'react'
import ArtPostCard from './ArtPostCard'
import ArtPostSearchForm from './ArtPostSearchForm'
import {useSelector, useDispatch} from 'react-redux'
import {fetchArt} from '../actions/artActions'

function ArtPostsContainer() {

    const [search, setSearch] = useState("")
    const artPosts = useSelector(state => state.art_posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchArt())
    }, [])


    const handleChange = (event) => {
        setSearch(event.target.value)
    }


    const filteredArtPosts = artPosts.filter(art => {
        return art.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className="art-posts-container">
            <ArtPostSearchForm handleChange={handleChange}/>
            {filteredArtPosts.map(artPost => {
                return <ArtPostCard key={artPost.id} artPost={artPost}/>
            })}
        </div>
    )
}

export default ArtPostsContainer
