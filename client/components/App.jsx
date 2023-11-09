// App Component
import React, { useState } from 'react';

import '../styles/styles.css';
import LogIn from './LogIn.jsx';
import SignIn from './SignIn.jsx';
import Profile from './Profile.jsx';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [needAccount, setNeedAccount] = useState(false);
  const [user, setUser] = useState('');

  const CreateUser = (username, password) => {
    console.log('api test: ', username, password);
    return fetch('http://localhost:8080/signup', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        setUser(username);
        setLoggedIn(true);
        setNeedAccount(false);
        // return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const LogInUser = (username, password) => {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        setUser(username);
        setLoggedIn(true);
        // return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {loggedIn && <Profile user={user} />}

      {needAccount && !loggedIn && <SignIn CreateUser={CreateUser} />}

      {!needAccount && !loggedIn && (
        <LogIn
          LogInUser={LogInUser}
          needAccount={needAccount}
          setNeedAccount={setNeedAccount}
        />
      )}
    </>
  );
};

export default App;
