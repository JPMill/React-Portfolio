import React from 'react';
import profile from '../assets/profile.png';
import './Aboutme.css'

function AboutMe() {
  return (
    <section className="about-me">
      <img src={profile} alt="Justin Miller" className="profile-pic" />
      <h3>Hello! I'm Justin Miller</h3>
      <p>I'm a student in Rice University's BootCamp for software development, currently pursuing an Associate of Science in Computer Science. I have a passion for software engineering and am excited to explore the world of tech, particularly with plans to eventually earn a Bachelor's in Cybersecurity. I’m eager to pursue opportunities in software development and innovation.</p>
    </section>
  );
}

export default AboutMe;