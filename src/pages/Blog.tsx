import React from 'react';
import Hero from '../components/Hero';

const Blog: React.FC = () => {
  return (
    <div>
      <Hero
        title="Tech Blog"
        subtitle="Latest insights and industry trends"
        primaryButton={{ text: "Subscribe", href: "/contact" }}
      />
      <div className="section">
        <div className="container">
          <h2>Blog Posts Coming Soon...</h2>
        </div>
      </div>
    </div>
  );
};

export default Blog;
