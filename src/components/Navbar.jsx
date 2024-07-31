import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/preferences">Preferences</Link>
      <Link to="/alerts">Alerts</Link>
    </nav>
  );
};

export default Navbar;
