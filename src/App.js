import Profile from './pages/profile';
import Login from './pages/login';
import Home from './pages/home';
import FriendRequest from './pages/friendRequest';
import { useState, useEffect } from 'react';
import { auth, firestore } from './firebase';
import { Switch, Route, useHistory } from 'react-router-dom';
import userContext from './pages/userContext';

function App() {
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user.uid) {
        firestore
          .collection('users')
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (!doc.exists) {
              history.push('/profile');
            } else {
              setUser({
                icon: {
                  url: 'https://www.blexar.com/avatar.png',
                  scaledSize: { width: 50, height: 50 },
                },
                ...doc.data(),
                ...user,
              });
            }
          });
      }
    });

    return () => {
      unsub();
    };
  }, [history]);

  return (
    <userContext.Provider value={{ user }}>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/friendRequest'>
          <FriendRequest />
        </Route>
        <Route path='/' exact>
          <Login />
        </Route>
      </Switch>
    </userContext.Provider>
  );
}

export default App;
