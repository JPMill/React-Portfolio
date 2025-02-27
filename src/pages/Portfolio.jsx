import React from 'react';
import Project from '../components/Project';
import Image1 from '../assets/images/vehiclebuilder.png';
import Image2 from '../assets/images/readme.png';
import Image3 from '../assets/images/eplanner.png';
import Image4 from '../assets/images/NullLabsLogo3.png'
import Image5 from '../assets/images/DEV.CONNECT.png'
import './Portfolio.css'

function Portfolio() {
  const projects = [
    {
      title: 'Dev.Connect',
      imageUrl: Image5,
      deployedUrl: 'https://dev-connect-1-eiz8.onrender.com/',
      githubUrl: 'https://github.com/ejmaller7/Dev.connect',
      description: 'Dev.Connect is a MERN-stack networking platform for developers to connect, showcase projects, and explore job opportunities. It features user profiles, community feed, job listings, and industry news updates. Development is ongoing.'
    },
    {
      title: 'Null Labs',
      imageUrl: Image4,
      deployedUrl: 'https://null-labs-frontend.onrender.com/',
      githubUrl: 'https://github.com/ejmaller7/Null-Labs',
      description: 'Our team worked togeher to develop a full-stack application that leverages the MERN stack. This application is a digital video game store that allows users to get information on a variety of games via an api call. Users can create an account and add game deals to their wishlist/shopping cart.'
    },
    {
      title: 'E-Planner',
      imageUrl: Image3,
      deployedUrl: 'https://ejmaller7.github.io/E-Planner/',
      githubUrl: 'https://github.com/ejmaller7/E-Planner',
      description: 'Our team worked togeher to develop the front end project website consist of a calendar, to do list and weather forcast station. Our team works together to brainstorm the idea through sketchboard and research. We work on the coding together through the VSO live sharing.'
    }
  ]

  return (
    <section className="portfolio">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <img src={project.imageUrl} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-links">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
            {project.deployedUrl && (
              <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Deployed Site</a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Portfolio;