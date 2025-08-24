import React from 'react';
import Hero from '../components/Hero';

const LearnQA: React.FC = () => {
  return (
    <div>
      <Hero
        title="Master Quality Assurance"
        subtitle="Comprehensive QA training programs designed for career success"
        primaryButton={{ text: "Start Learning", href: "/contact" }}
      />
      <div className="section">
        <div className="container">
          <h2>QA Learning Content Coming Soon...</h2>
        </div>
      </div>
    </div>
  );
};

export default LearnQA;
