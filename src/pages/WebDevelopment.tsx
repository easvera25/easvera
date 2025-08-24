import React from 'react';
import Hero from '../components/Hero';

const WebDevelopment: React.FC = () => {
  return (
    <div>
      <Hero
        title="Custom Web Development"
        subtitle="Professional websites and applications for your business"
        primaryButton={{ text: "Get Quote", href: "/contact" }}
      />
      <div className="section">
        <div className="container">
          <h2>Web Development Services Coming Soon...</h2>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
