import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';

const NavBar = () => {
  return (
    <div>
      <NavLink to="/react/todo" className="blue">ReactDemo</NavLink>
      <NavLink to="/redux/counter" activeClassName="active">ReduxDemo</NavLink>
    </div>
  );
};

export default NavBar;
