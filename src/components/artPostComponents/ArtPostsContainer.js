import React, {useState} from 'react'
import ArtPostCard from './ArtPostCard'
import ArtPostSearchForm from './ArtPostSearchForm'
import ArtPostCreateForm from './ArtPostCreateForm'
import ArtPostShow from './ArtPostShow'
import {useSelector} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import ArtPostEditForm from './ArtPostEditForm'
import {Container, Row} from 'react-bootstrap'

function ArtPostsContainer() {

    const [search, setSearch] = useState("")
    // const [sort, setSort] = useState(false)
    const artPosts = useSelector(state => state.art.art_posts)


    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    // const handleClick = () => {
    //     if(sort === false){
    //         artPosts.sort(sortArtPostByTitle)
    //         setSort(true)
    //     } else if (sort === true){
    //         artPosts.sort(sortArtPostById)
    //         setSort(false)
    //     }
    // }

    // const sortArtPostByTitle = (art1, art2) => {
    //     const firstArtPost = art1.title.toLowerCase()
    //     const secondArtPost = art2.title.toLowerCase()

    //     let comparison = 0
    //     if(firstArtPost > secondArtPost){
    //         comparison = 1
    //     } else if(firstArtPost < secondArtPost) {
    //         comparison = -1
    //     } 
    //     return comparison 
    // }

    // const sortArtPostById = (art1, art2) => {
    //     const firstArtPost = art1.id
    //     const secondArtPost = art2.id

    //     let comparison = 0
    //     if(firstArtPost > secondArtPost){
    //         comparison = 1
    //     } else if(firstArtPost < secondArtPost) {
    //         comparison = -1
    //     } 
    //     return comparison 
    // }


    const filteredArtPosts = artPosts.filter(art => {
        return art.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className="art-posts-container">
        <Switch>
            <Route exact path="/art_posts">
                <ArtPostSearchForm handleChange={handleChange}/>
                {/* <Button onClick={() => handleClick()}>Sort</Button> */}
                <Container>
                    <Row>
                        {filteredArtPosts.map(artPost => {
                        return <ArtPostCard key={artPost.id} artPost={artPost}/>
                        })}
                    </Row>
                </Container>
            </Route>

            <Route exact path="/art_posts/new" component={ArtPostCreateForm}/>

            <Route exact path="/art_posts/:id" component={(routeInfo) => {
                const routeId = parseInt(routeInfo.match.params.id)
                const artPost = artPosts.find(art => art.id === routeId)
                return <ArtPostShow key={artPost.id} artPost={artPost} routeInfo={routeInfo}/>
            }}/>

            <Route exact path="/art_posts/:id/edit" component={(routeInfo) => {
                const routeId = parseInt(routeInfo.match.params.id)
                const artPost = artPosts.find(art => art.id === routeId)
                return <ArtPostEditForm artPost={artPost} routeInfo={routeInfo}/>
            }}/>
                
            <Route path="*" render={() => <h1>ROUTE DOES NOT EXIST</h1>}/>
        </Switch>
           
        </div>
    )
}

export default ArtPostsContainer
