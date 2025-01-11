import React from 'react';
import Project from '../components/Project';
import Image1 from '../assets/images/vehiclebuilder.png';
import Image2 from '../assets/images/readme.png';
import Image3 from '../assets/images/eplanner.png';
import Image4 from '../assets/images/NullLabsLogo4.png'
import Image5 from '../assets/images/WeatherApi.png'
import './Portfolio.css'

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
      description: 'Our team worked togeher to develop the front end project website consist of a calendar, to do list and weather forcast station. Our team works together to brainstorm the idea through sketchboard and research. We work on the coding together through the VSO live sharing.'
    },
    {
      title: 'Null Labs',
      imageUrl: Image4,
      deployedUrl: 'https://null-labs-frontend.onrender.com/',
      githubUrl: 'https://github.com/ejmaller7/Null-Labs',
      description: 'Our team worked togeher to develop a full-stack application that leverages the MERN stack. This application is a digital video game store that allows users to get information on a variety of games via an api call. Users can create an account and add game deals to their wishlist/shopping cart.'
    },
    {
      title: 'Weather Dashboard',
      imageUrl: Image5,
      deployedUrl: 'https://weather-dashboard-3-2e7v.onrender.com/',
      githubUrl: 'https://github.com/JPMill/Weather-Dashboard',   
      description: 'This is a Full-Stack project the pulls data from OpenWeatherMap api and displays the weather and forecast for a city that is searched for.'
    },
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