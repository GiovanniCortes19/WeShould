// App Component
import React, { useState } from 'react';

import '../styles/styles.css';
import LogIn from './LogIn.jsx';
import SignIn from './SignIn.jsx';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [needAccount, setNeedAccount] = useState(false);

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
        setLoggedIn(true);
        setNeedAccount(false);
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {loggedIn && (
        <div>
          <h1 className="title">WeShould App</h1>
        </div>
      )}

      {needAccount && !loggedIn && <SignIn CreateUser={CreateUser} />}

      {!needAccount && !loggedIn && (
        <LogIn needAccount={needAccount} setNeedAccount={setNeedAccount} />
      )}
    </>
  );
};

export default App;
