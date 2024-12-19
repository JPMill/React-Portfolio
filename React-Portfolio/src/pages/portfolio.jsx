import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    { title: 'Project 1', image: '/path/to/image1.jpg', appLink: '#', repoLink: '#' },
    { title: 'Project 2', image: '/path/to/image2.jpg', appLink: '#', repoLink: '#' },
    { title: 'Project 3', image: '/path/to/image3.jpg', appLink: '#', repoLink: '#' },
    { title: 'Project 4', image: '/path/to/image4.jpg', appLink: '#', repoLink: '#' },
    { title: 'Project 5', image: '/path/to/image5.jpg', appLink: '#', repoLink: '#' },
    { title: 'Project 6', image: '/path/to/image6.jpg', appLink: '#', repoLink: '#' },
  ];

  return (
    <section className="portfolio">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;