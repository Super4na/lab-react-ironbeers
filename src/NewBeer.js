import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useHistory } from 'react-router';
import axios from 'axios';

function NewBeer() {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirst_brewed] = useState('');
  const [brewers_tip, setBrewers_tip] = useState('');
  const [attenuation_level, setAttenuation_level] = useState('');
  const [contributed_by, setContributed_by] = useState('');
  const history = useHistory();

  const handleFormSubmit = async (e) => {
    console.log('submited');
    e.preventDefault();

    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tip: brewers_tip,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };

    await axios.post('https://ironbnb-m3.herokuapp.com/new', body);
    setName('');
    setTagline('');
    setDescription('');
    setFirst_brewed('');
    setBrewers_tip('');
    setAttenuation_level('');
    setContributed_by('');
    history.push('/beers');
  };
  return (
    <>
      <Header />
      <div class="nuBeer">
        <form onSubmit={handleFormSubmit}>
          <label>Name</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>Tagline</label>
          <br />
          <input
            type="text"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />
          <br />
          <label>Description</label>
          <br />
          <input id="descriptionInput"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <label>First Brewed</label>
          <br />
          <input
            type="text"
            value={first_brewed}
            onChange={(e) => setFirst_brewed(e.target.value)}
          />
          <br />
          <label>Brewers Tips</label>
          <br />
          <input
            type="text"
            value={brewers_tip}
            onChange={(e) => setBrewers_tip(e.target.value)}
          />
          <br />
          <label>Attenuation Level</label>
          <br />
          <input
            type="number"
            value={attenuation_level}
            onChange={(e) => setAttenuation_level(e.target.value)}
          />
          <br />
          <label>Contributer By</label>
          <br />
          <input
            type="text"
            value={contributed_by}
            onChange={(e) => setContributed_by(e.target.value)}
          />
          <br />
          <button class="createNewButton" type="submit">Add New</button>
        </form>
      </div>
    </>
  );
}

export default NewBeer;
