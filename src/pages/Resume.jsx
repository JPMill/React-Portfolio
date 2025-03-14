import React from 'react';
import resume1 from '../assets/images/resume.png'
import './Resume.css'

function Resume() {
  return (
    <section className="resume">
      <a href={resume1} download="resume.png">Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React, TypeScript</li>
        <li>Node.js, Express</li>
        <li>MySQL, MongoDB</li>
        <li>Git, GitHub</li>
        <li>GraphQL</li>
        <li>RESTful APIs</li>
      </ul>
    </section>
  );
}

export default Resume;