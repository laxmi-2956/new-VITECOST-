import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/products">Shop All</Link>
      <Link to="/category/vitamins">Vitamins</Link>
      <Link to="/category/beauty">Beauty</Link>
      <Link to="/category/grocery">Grocery</Link>
    </nav>
  );
};

export default Navbar;