import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/your-user-id"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Stack Overflow Profile"
          >
            <i className="fab fa-stack-overflow"></i>
          </a>
        </li>
      </ul>
      <p>&copy; 2024 Justin Miller. All rights reserved.</p>
    </footer>
  );
};

export default Footer;