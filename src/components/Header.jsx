import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Justin Miller</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/portfolio"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/resume"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;