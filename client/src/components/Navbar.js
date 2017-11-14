import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/category">Category</Link>
    </li>
    <li>
      <Link to="/post">Post</Link>
    </li>
  </ul>
);

export default Navbar;
