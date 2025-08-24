import React from 'react';
import Hero from '../components/Hero';

const ITSupport: React.FC = () => {
  return (
    <div>
      <Hero
        title="24/7 IT Support"
        subtitle="Reliable technical support for your business"
        primaryButton={{ text: "Get Support", href: "/contact" }}
      />
      <div className="section">
        <div className="container">
          <h2>IT Support Services Coming Soon...</h2>
        </div>
      </div>
    </div>
  );
};

export default ITSupport;
