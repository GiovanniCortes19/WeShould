import React, { useState } from 'react';
import '../styles/hub.css';

const Hub = ({
  activeHub,
  newMovie,
  setNewMovie,
  newRestaurant,
  setNewRestaurant,
  addMovie,
  setActiveHub,
}) => {
  // const [newMovie, setNewMovie] = useState('');
  // const [newRestaurant, setNewRestaurant] = useState('');

  // const addMovie = (newMovie) => {
  //   return fetch('http://localhost:8080/addMovie', {
  //     method: 'POST',
  //     mode: 'cors',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       hubId: activeHub._id,
  //       movie: newMovie,
  //     }),
  //   })
  //     .then((response) => {
  //       setNewMovie('');
  //       // return response.json();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

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
          <form
            onSubmit={(e) => {
              addMovie(newMovie);
              e.preventDefault();
            }}
            className="hubform flex"
          >
            <input
              className="hubinput"
              type="text"
              onChange={(event) => {
                const { value } = event.target;
                setNewMovie(value);
              }}
              value={newMovie}
            />
            <input className="button" type="submit" value={'add'} />
          </form>
        </div>

        <div className="ListBox flex">
          <p className="listTitle">Restaurants</p>
          <ul className="movieList">{rests}</ul>
          <form action="" className="hubform flex">
            <input
              className="hubinput"
              type="text"
              onChange={(event) => {
                const { value } = event.target;
                setNewRestaurant(value);
              }}
              value={newRestaurant}
            />
            <input className="button" type="submit" value={'add'} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hub;
