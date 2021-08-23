import './App.css';
import {BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import NavBar from './components/NavBar';
import ArtPostsContainer from './components/ArtPostsContainer';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
      <Switch>
        <Route path="/">
          <ArtPostsContainer />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
