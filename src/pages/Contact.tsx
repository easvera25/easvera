import React from 'react';
import Hero from '../components/Hero';

const Contact: React.FC = () => {
  return (
    <div>
      <Hero
        title="Get In Touch"
        subtitle="Ready to start your project?"
        primaryButton={{ text: "Call Now", href: "tel:+111111111" }}
      />
      <div className="section">
        <div className="container">
          <h2>Contact Form Coming Soon...</h2>
          <p>Email: info@esavera.com</p>
          <p>Phone: +1 (91) 123-TECH</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
