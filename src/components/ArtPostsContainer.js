import React, {useState} from 'react'
import ArtPostCard from './ArtPostCard'
import ArtPostSearchForm from './ArtPostSearchForm'
import ArtPostCreateForm from './ArtPostCreateForm'
import {useSelector} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

function ArtPostsContainer() {

    const [search, setSearch] = useState("")
    const artPosts = useSelector(state => state.art.art_posts)


    const handleChange = (event) => {
        setSearch(event.target.value)
    }


    const filteredArtPosts = artPosts.filter(art => {
        return art.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className="art-posts-container">
        <Switch>
            <Route exact path="/art_posts">
                <ArtPostSearchForm handleChange={handleChange}/>
                {filteredArtPosts.map(artPost => {
                return <ArtPostCard key={artPost.id} artPost={artPost}/>
                })}
            </Route>

            <Route exact path="/art_posts/new" component={ArtPostCreateForm}/>

            <Route exact path="/art_posts/:id" component={(routeInfo) => {
                const routeId = parseInt(routeInfo.match.params.id)
                const artPost = artPosts.find(art => art.id === routeId)
                return <ArtPostCard key={artPost.id} artPost={artPost}/>
            }}/>
                
            <Route path="*" render={() => <h1>ROUTE DOES NOT EXIST</h1>}/>
        </Switch>
           
        </div>
    )
}

export default ArtPostsContainer
