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
      <div class="beer">
        {beers.map((beer) => {
          return (
            <>
              <img src={beer.image_url} alt={beer.name} height="200px" />
              <NavLink to={`/beers/${beer._id}`}>
                <h3>{beer.name}</h3>
              </NavLink>
              <p>{beer.tagline}</p>
              <p>Created by: {beer.contributed_by}</p>
            </>
          );
        })}
      </div>
    </>
  );
}

export default AllBeers;
