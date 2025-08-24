import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Learn QA', href: '/learn-qa' },
    { name: 'Web Development', href: '/web-development' },
    { name: 'IT Support', href: '/it-support' },
    { name: 'Blog', href: '/blog' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  return (
    <footer style={{
      background: 'var(--text-primary)',
      color: 'white',
      padding: '3rem 0 1rem',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>
              Esavera Solution
            </h3>
            <p style={{ color: '#9ca3af' }}>
              Empowering businesses with comprehensive QA training, custom web development, 
              and reliable IT support services.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '1rem'
            }}>
              <a 
                href="https://linkedin.com/company/techservicespro" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#9ca3af', textDecoration: 'none' }}
              >
                LinkedIn
              </a>
              <a 
                href="https://twitter.com/techservicespro" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#9ca3af', textDecoration: 'none' }}
              >
                Twitter
              </a>
              <a 
                href="https://github.com/esavera" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#9ca3af', textDecoration: 'none' }}
              >
                GitHub
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.1rem' }}>
              Services
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {quickLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  style={{ 
                    color: '#9ca3af', 
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.1rem' }}>
              Company
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {companyLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  style={{ 
                    color: '#9ca3af', 
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.1rem' }}>
              Contact Info
            </h4>
            <div style={{ color: '#9ca3af' }}>
              <p style={{ marginBottom: '0.5rem' }}>📍 123 Tech Street, Innovation District</p>
              <p style={{ marginBottom: '0.5rem' }}>📞 +1 (555) 123-TECH</p>
              <p style={{ marginBottom: '0.5rem' }}>✉️ info@esavera.com</p>
              <p>🕒 Mon-Fri: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #374151',
          paddingTop: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ color: '#9ca3af', margin: 0, fontSize: '0.9rem' }}>
            &copy; {currentYear} Esavera Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
