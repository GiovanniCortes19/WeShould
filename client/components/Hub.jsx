import React from 'react';
import '../styles/hub.css';

const Hub = ({ activeHub }) => {
  const movies = activeHub.movies.map((movie) => {
    return <li>{movie}</li>;
  });

  const rests = activeHub.restaurants.map((rest) => {
    return <li>{rest}</li>;
  });

  return (
    <div className="hubContainer">
      <h2>Inside the Hub: </h2>
      <h2>{activeHub.name}</h2>

      <div className="lists flex">
        <div className="ListBox flex">
          <p className="listTitle">Movies</p>
          <ul className="movieList">{movies}</ul>
        </div>

        <div className="ListBox flex">
          <p className="listTitle">Restaurants</p>
          <ul className="movieList">{rests}</ul>
        </div>
      </div>
    </div>
  );
};

export default Hub;
