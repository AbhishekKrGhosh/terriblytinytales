import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navigation() {
  return (
    <nav className='navbar'>
        <Link class="logo" to="/">ttt</Link>

      <ul className='nav-links'>
        <li>
          <Link className='plain-link' to="/">Home</Link>
        </li>
        
      </ul>
    </nav>
  );
}
export default Navigation