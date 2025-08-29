import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/content';

const Home: React.FC = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
        <img
          src="/esavera.png"
          alt="Esavera Solution Logo"
          style={{ width: '150px', height: 'auto' }} // Adjust size as you wish
        />
      </div>
      <Hero
        title="Your Complete IT Services Partner"
        subtitle="Empowering businesses with comprehensive QA training, custom web development, and reliable IT support services."
        description="We help businesses thrive in the digital world with expert-led training, cutting-edge web solutions, and round-the-clock technical support."
        primaryButton={{ text: "Get Started Today", href: "/contact" }}
        secondaryButton={{ text: "View Our Services", href: "/about" }}
      />

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Our Core Services
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
