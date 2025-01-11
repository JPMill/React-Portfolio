import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  // Function to check if the current path matches
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navigation">
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            className={isActive('/') ? 'active-link' : ''}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className={isActive('/portfolio') ? 'active-link' : ''}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={isActive('/contact') ? 'active-link' : ''}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            className={isActive('/resume') ? 'active-link' : ''}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;