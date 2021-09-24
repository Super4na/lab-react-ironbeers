import React, { useState, useEffect } from 'react';
import Header from './Header';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

function Beer(props) {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    //code in here, will happen one time when the component is first rendered
    const beerId = props.match.params.id;
    console.log(beerId);

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data);
      });
  }, [props.match.params.id]); // <= empty array is called the dependency array

  return (
    <>
      <Header />
      <div class="beerDeets">
        <img src={beer.image_url} alt={beer.name} />
        <h1>{beer.name}</h1>
        <h2>{beer.tagline}</h2>
        <p>{beer.attenuation_level}</p>
        <p>First Brewed: {beer.first_brewed}</p>
        <div class="text">
          <p>{beer.description}</p>
        </div>
        <p>{beer.contributed_by}</p>
      </div>
    </>
  );
}

export default Beer;
