import React, { useEffect, useState } from 'react';
import '../styles/profile.css';
// import { response } from '../../server/server';

import Hub from './Hub.jsx';

const Profile = ({ user }) => {
  const [hubs, setHubs] = useState([]);

  const [activeHub, setActiveHub] = useState(null);

  const enterHub = () => {
    setActiveHub(hubs[0]);
  };

  const getHubs = () => {
    return fetch(`http://localhost:8080/hubs/${user}`)
      .then((response) => response.json())
      .then((hub) => {
        console.log(hub);
        setHubs([hub]);
      });
  };

  useEffect(() => {
    getHubs();
  }, []);

  return (
    <>
      <div className="profileComponentContainer">
        <div className="titleBox">
          <h1 className="profileTitle">WeShould App</h1>
        </div>

        <div className="messageBox">
          <h2 className="welcomeMessage">Welcome {user}</h2>
        </div>
        {/* SHOW USER AVAILABLE CONNECTIONS */}
        {!activeHub && (
          <>
            <div className="HubList flex">
              <h3 className="yourConnections">Your Connections</h3>

              {hubs[0] && (
                <div
                  className="hub flex"
                  onClick={(e) => {
                    enterHub();
                    e.preventDefault();
                  }}
                >
                  <p className="hubName">{hubs[0].name}</p>
                </div>
              )}
            </div>
          </>
        )}
        {/* GO INSIDE HUB IF CLICKED */}
        {activeHub && <Hub activeHub={activeHub} />}
      </div>
    </>
  );
};

export default Profile;
