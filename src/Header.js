import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <NavLink to={`/`}>
        <img src={`/assets/header.png`} alt={`header banner`}></img>
      </NavLink>
    </>
  );
}

export default Header;
