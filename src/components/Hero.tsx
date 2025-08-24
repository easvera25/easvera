import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton
}) => {
  return (
    <section style={{
      padding: '6rem 0',
      textAlign: 'center',
      background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
      color: 'white',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.1)'
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            lineHeight: '1.1',
            color: 'white'
          }}>
            {title}
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '1rem',
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: '500'
          }}>
            {subtitle}
          </p>
          
          {description && (
            <p style={{
              fontSize: '1.1rem',
              marginBottom: '2rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              {description}
            </p>
          )}
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '2rem'
          }}>
            {primaryButton && (
              <Link 
                to={primaryButton.href} 
                className="btn btn-primary"
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
                  minWidth: '160px',
                  backgroundColor: 'white',
                  color: 'var(--primary-color)'
                }}
              >
                {primaryButton.text}
              </Link>
            )}
            {secondaryButton && (
              <Link 
                to={secondaryButton.href} 
                className="btn"
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
                  minWidth: '160px',
                  border: '2px solid rgba(255, 255, 255, 0.8)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  backgroundColor: 'transparent'
                }}
              >
                {secondaryButton.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
