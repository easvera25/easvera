import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features,
  href
}) => {
  return (
    <div style={{
      background: 'white',
      borderRadius: '1rem',
      padding: '2.5rem 2rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      border: '1px solid var(--border-color)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        width: '80px',
        height: '80px',
        margin: '0 auto 1.5rem',
        background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem'
      }}>
        <span>{icon}</span>
      </div>
      
      <h3 style={{
        color: 'var(--text-primary)',
        marginBottom: '1rem',
        fontSize: '1.5rem',
        fontWeight: '600'
      }}>
        {title}
      </h3>
      
      <p style={{
        color: 'var(--text-secondary)',
        marginBottom: '1.5rem',
        lineHeight: '1.6',
        flexGrow: 1
      }}>
        {description}
      </p>
      
      <ul style={{
        listStyle: 'none',
        marginBottom: '2rem',
        textAlign: 'left'
      }}>
        {features.slice(0, 4).map((feature, index) => (
          <li key={index} style={{
            padding: '0.5rem 0',
            color: 'var(--text-secondary)',
            borderBottom: '1px solid var(--border-color)'
          }}>
            ✓ {feature}
          </li>
        ))}
      </ul>

      <Link 
        to={href} 
        className="btn btn-primary"
        style={{
          marginTop: 'auto',
          width: '100%',
          padding: '0.75rem 1.5rem'
        }}
      >
        Learn More
      </Link>
    </div>
  );
};

export default ServiceCard;
