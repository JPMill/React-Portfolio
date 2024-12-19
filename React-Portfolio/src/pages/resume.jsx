import React from 'react';

function Resume() {
  return (
    <section className="resume">
      <a href="../assets/resume.pdf" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React, Redux</li>
        <li>Node.js, Express</li>
        <li>MySQL, MongoDB</li>
        <li>Git, GitHub</li>
      </ul>
    </section>
  );
}

export default Resume;