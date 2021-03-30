import React from 'react';
import Contact from './Contact';
import Services from './Services';
import Home from './Home'
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <ul>
        <Link to="/home"><li>Home</li></Link>
        <Link to="/contact"><li>Contact Us</li></Link>
        <Link to="/services"><li>Services</li></Link>
      </ul>
    </div>
  );
}

export default Navbar;