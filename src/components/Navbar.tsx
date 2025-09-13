import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

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
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
        <div className="navbar-brand">
            <Link to="/">
              <img
                src="esavera.png"
                alt="Esavera Solution Logo"
                style={{ height: '220px', marginRight: '50px' }}
              />
              {/* <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-color)' }}>
                Esavera Solution
              </span> */}
            </Link>
          </div>

          <div className="navbar-menu">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {isOpen && (
          <div className="navbar-mobile">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
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
