import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>
          <a
            href="https://github.com/JPMill"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <p>GitHub</p>
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/justin-miller-05047b293"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <p>LinkedIn</p>
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
            <p>Slack</p>
            <i className="fab fa-stack-overflow"></i>
          </a>
        </li>
      </ul>
      <p>&copy; 2024 Justin Miller. All rights reserved.</p>
    </footer>
  );
};

export default Footer;