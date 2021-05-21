import Profile from './pages/profile';
import Login from './pages/login';
import Home from './pages/home';
import FriendRequest from './pages/friendRequest';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact>
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/friendRequest'>
            <FriendRequest />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
