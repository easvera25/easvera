import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Learn QA', href: '/learn-qa' },
    { name: 'Web Development', href: '/web-development' },
    { name: 'IT Support', href: '/it-support' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav style={{
      background: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 0'
        }}>
          <div>
            <Link to="/">
              <h2 style={{
                color: 'var(--primary-color)',
                fontSize: '1.5rem',
                fontWeight: '700',
                margin: 0
              }}>
                Esavera Solution
              </h2>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            '@media (max-width: 768px)': {
              display: 'none'
            }
          }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                style={{
                  color: location.pathname === item.href ? 'var(--primary-color)' : 'var(--text-primary)',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  padding: '0.5rem 0',
                  borderBottom: location.pathname === item.href ? '2px solid var(--primary-color)' : '2px solid transparent'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'none',
              flexDirection: 'column',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              '@media (max-width: 768px)': {
                display: 'flex'
              }
            }}
            aria-label="Toggle navigation"
          >
            <span style={{
              width: '25px',
              height: '3px',
              background: 'var(--text-primary)',
              margin: '3px 0',
              transition: '0.3s',
              borderRadius: '2px'
            }}></span>
            <span style={{
              width: '25px',
              height: '3px',
              background: 'var(--text-primary)',
              margin: '3px 0',
              transition: '0.3s',
              borderRadius: '2px'
            }}></span>
            <span style={{
              width: '25px',
              height: '3px',
              background: 'var(--text-primary)',
              margin: '3px 0',
              transition: '0.3s',
              borderRadius: '2px'
            }}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div style={{
            padding: '1rem 0',
            borderTop: '1px solid var(--border-color)'
          }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                style={{
                  display: 'block',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid var(--border-color)',
                  color: location.pathname === item.href ? 'var(--primary-color)' : 'var(--text-primary)',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
