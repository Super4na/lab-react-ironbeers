import React, { useState, useEffect } from 'react';
import Header from './Header';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers';

function AllBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    console.log('useEffect - Initial render (Mounting)');
    axios.get(apiUrl).then((response) => {
      setBeers(response.data);
    });
  }, []);

  return (
    <>
      <Header />

      {beers.map((beer) => {
        return (
          <>
            <div class="beer">
              <div class="imgBeer">
                <img src={beer.image_url} alt={beer.name} height="200px" />
              </div>
              <div class="beerInfo">
                <NavLink to={`/beers/${beer._id}`}>
                  <h1>{beer.name}</h1>
                </NavLink>
                <h2>{beer.tagline}</h2>
                <p>Created by: {beer.contributed_by}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default AllBeers;
