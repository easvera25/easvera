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
    <>
      <style jsx>{`
        .navbar {
          background: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }

        .navbar-brand h2 {
          color: var(--primary-color);
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }

        .navbar-menu {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-primary);
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s ease;
          padding: 0.5rem 0;
          border-bottom: 2px solid transparent;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--primary-color);
          border-bottom-color: var(--primary-color);
        }

        .navbar-toggle {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .navbar-toggle span {
          width: 25px;
          height: 3px;
          background: var(--text-primary);
          margin: 3px 0;
          transition: 0.3s;
          border-radius: 2px;
        }

        .navbar-mobile {
          display: none;
          padding: 1rem 0;
          border-top: 1px solid var(--border-color);
        }

        .navbar-mobile .nav-link {
          display: block;
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--border-color);
        }

        @media (max-width: 768px) {
          .navbar-menu {
            display: none;
          }

          .navbar-toggle {
            display: flex;
          }

          .navbar-mobile {
            display: block;
          }
        }
      `}</style>
      
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <div className="navbar-brand">
              <Link to="/">
                <h2>Esavera Solution</h2>
              </Link>
            </div>

            {/* Desktop Navigation */}
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

            {/* Mobile menu button */}
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

          {/* Mobile Navigation */}
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
    </>
  );
};

export default Navbar;
