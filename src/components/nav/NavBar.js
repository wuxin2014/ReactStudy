import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';

const NavBar = () => {
  return (
    <div>
      <NavLink to="/react/demo" className="blue">ReactDemo</NavLink>
      <NavLink to="/redux/demo" activeClassName="active">ReduxDemo</NavLink>
    </div>
  );
};

export default NavBar;
