import React from 'react';
import Project from '../components/Project';
import Image1 from '../assets/images/vehiclebuilder.png';
import Image2 from '../assets/images/readme.png';
import Image3 from '../assets/images/eplanner.png';

function Portfolio() {
  const projects = [
    {
      title: 'Vehicle Builder',
      imageUrl: Image1,
      githubUrl: 'https://github.com/JPMill/Vehicle-Builder',
      description: 'This project uses TypeScript that allows you to interact with the CLI to create your own car, truck or motorbike'
    },
    {
      title: 'Professional README Generator',
      imageUrl: Image2,
      githubUrl: 'https://github.com/JPMill/README-Generator',
      description: 'This project is a Node.js application that dynamically generates a README.md file for a project based on user input.'
    },
    {
      title: 'E-Planner',
      imageUrl: Image3,
      deployedUrl: 'https://ejmaller7.github.io/E-Planner/',
      githubUrl: 'https://github.com/ejmaller7/E-Planner',
      description: 'Our team work togeher to develop the front end project website consist of a calendar, to do list and weather forcast station. Our team works together to brainstorm the idea through sketchboard and research. We work on the coding together through the VSO live sharing.'
    }
  ]

  return (
    <section className="portfolio">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;