import React from 'react';
import Hero from '../components/Hero';

const About: React.FC = () => {
  return (
    <div>
      <Hero
        title="About Esavera Solutions"
        subtitle="Your trusted technology partner"
        primaryButton={{ text: "Contact Us", href: "/contact" }}
      />
      <div className="section">
        <div className="container">
          <h2>About Us Content Coming Soon...</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
