import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ title, image, deployedLink, repoLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} screenshot`} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <div className="project-links">
          <a
            href={deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Live
          </a>
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};

export default Project;