import React, { useState, useEffect } from 'react';
import Header from './Header';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

function Beer(props) {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    //code in here, will happen one time when the component is first rendered
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        setBeer(response.data);
      });
  }, []); // <= empty array is called the dependency array

  return (
    <>
      <Header />
      <div class="beerDeets">
        <div class="beerDetail">
          <img
            id="beerImg"
            src={beer.image_url}
            alt={beer.name}
            height="250px"
          />
          <div class="beerDescription">
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
            <p>{beer.attenuation_level}</p>
            <p>First Brewed: {beer.first_brewed}</p>
            <div class="text">
              <p>{beer.description}</p>
            </div>
            <p>{beer.contributed_by}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Beer;
