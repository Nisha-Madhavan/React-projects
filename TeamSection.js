import React, { useState } from 'react';
import jane from './TeamSection.css';
import John from'./John.jpg';
import jeremy from './jeremy.jpg';

const teamMembers = [
  { name: 'John', designation: 'Designation Division', description: '"Lorem ipsum dolor sit amet,consectetuer adipiscing elit,sed diam nonummy nibh euishmod tincidunt ut laoreet dolore magna aliquam erat',img:{John} },
  { name: 'Jane', designation: 'Designation Division', description: 'Lorem ipsum dolor sit amet,consectetuer adipiscing elit,sed diam nonummy nibh euishmod ',img:{jane} },
  { name: 'Jeremy', designation: 'Designation Division', description: 'Lorem ipsum dolor sit amet,consectetuer adipiscing elit,sed diam nonummy nibh euishmod tincidunt',img:{jeremy} },
];

const TeamSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section className="team-section">
      <h2>Section title goes here</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
      <div className="slider">
        <button onClick={prevSlide} className="slider-button left">❮</button>
        <div className="team-member">
          <img src={teamMembers[current].img} alt={teamMembers[current].name} />
          <h3>{teamMembers[current].name}</h3>
          <p>{teamMembers[current].designation}</p>
          <p>{teamMembers[current].description}</p>
          <button className="btn">Explore now❯</button>
        </div>
        <button onClick={nextSlide} className="slider-button right">❯</button>
      </div>
    </section>
  );
};

export default TeamSection;
