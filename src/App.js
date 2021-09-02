import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import ArtPostsContainer from './components/artPostComponents/ArtPostsContainer';
import UserSignupForm from './components/userComponents/UserSignupForm';
import UserLoginForm from './components/userComponents/UserLoginForm';
import Cart from './components/cartComponents/Cart'
import HomePage from './components/HomePage';
import {fetchArt} from './actions/artActions'
import {fetchUsers} from './actions/userActions'

function App() {

  const artPosts = useSelector(state => state.art.art_posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchArt())
}, [])

useEffect(() => {
  dispatch(fetchUsers())
}, [])

  return (
    <Router>
      <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        
        {artPosts.length > 0 ? <Route path="/art_posts" component={ArtPostsContainer}/> : <h1>LOADING</h1>}
       
        <Route exact path="/signup" component={UserSignupForm}/>
        
        <Route exact path="/login" component={UserLoginForm}/>
                 
        <Route exact path="/cart" component={Cart}/>
         
        <Route path="*" render={() => <h1>ROUTE DOES NOT EXIST</h1>}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
