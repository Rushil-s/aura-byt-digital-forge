
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      ref={navbarRef}
      className={`fixed w-full z-50 transition-all duration-300 navbar-fixed ${
        scrolled
          ? 'bg-background/95 shadow-lg backdrop-blur-md border-b border-border/50'
          : location.pathname !== '/'
          ? 'bg-background/90 backdrop-blur-sm shadow-md border-b border-border/30'
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      {/* Tech lines animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none tech-lines">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="tech-line"
            style={{
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${10 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group relative">
            <div className="h-12 w-12 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                alt="AuraByt Logo"
                className="h-full w-full object-contain relative z-10 filter brightness-110"
                src="/assets/aurabytlogo.png"
              />
            </div>
            <span className="font-bold text-xl gradient-text">AuraByt</span>
          </Link>

          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative 
                  after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 
                  after:origin-center after:scale-x-0 after:bg-primary after:transition-transform 
                  hover:after:scale-x-100 px-2 py-1 rounded-md hover:bg-primary/5 ${
                  location.pathname === link.path
                    ? 'text-primary after:scale-x-100 bg-primary/10'
                    : 'text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-md bg-card/80 backdrop-blur-sm shadow-md border border-border/50 hover:bg-card hover:border-primary/30 transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-foreground" />}
          </button>
        </div>

        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden py-4 animate-fade-in bg-card/90 backdrop-blur-md rounded-lg shadow-xl mb-4 border border-border/50"
          >
            <nav className="flex flex-col space-y-2 p-2">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary p-3 rounded-md 
                    hover:bg-primary/10 border border-transparent hover:border-primary/20 ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary/10 border-primary/30'
                      : 'text-foreground hover:bg-muted/50'
                  } animate-slide-up`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
