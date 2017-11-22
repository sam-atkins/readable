import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/react">React</Link>
    </li>
    <li>
      <Link to="/redux">Redux</Link>
    </li>
    <li>
      <Link to="/udacity">Udacity</Link>
    </li>
  </ul>
);

export default Navbar;
