import React from 'react';
import profile from '../assets/profile.png';
import './Aboutme.css'

function AboutMe() {
  return (
    <section className="about-me">
      <img src={profile} alt="Justin Miller" className="profile-pic" />
      <p>Hello! I'm Justin, a software engineering student with a passion for web development.</p>
    </section>
  );
}

export default AboutMe;