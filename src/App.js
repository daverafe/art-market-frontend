import './App.css';
import {BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import NavBar from './components/NavBar';
import ArtPostsContainer from './components/ArtPostsContainer';
import UserSignupForm from './components/UserSignupForm';
import Cart from './components/Cart'

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ArtPostsContainer />
        </Route>
        <Route exact path="/signup">
          <UserSignupForm />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
