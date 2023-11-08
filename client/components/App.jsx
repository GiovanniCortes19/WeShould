// App Component
import React, { useState } from 'react';

import '../styles/styles.css';
import LogIn from './LogIn.jsx';
import SignIn from './SignIn.jsx';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [needAccount, setNeedAccount] = useState(false);

  return (
    <>
      {loggedIn && (
        <div>
          <h1 className="title">WeShould App</h1>
        </div>
      )}

      {needAccount && !loggedIn && (
        <SignIn setNeedAccount={setNeedAccount} setLoggedIn={setLoggedIn} />
      )}

      {!needAccount && !loggedIn && (
        <LogIn needAccount={needAccount} setNeedAccount={setNeedAccount} />
      )}
    </>
  );
};

export default App;
