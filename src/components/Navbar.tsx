
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="h-12 w-12 relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                alt="AuraByt Logo" 
                className="h-full w-full object-contain relative z-10" 
                src="/lovable-uploads/ac5d9c7f-14f3-4b3a-8f12-0e098fb33699.png" 
              />
            </div>
            <span className="font-bold text-xl animated-gradient-text">AuraByt</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <Link 
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:origin-center after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100 ${
                  location.pathname === link.path ? 'text-primary after:scale-x-100' : 'text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path ? 'text-primary' : 'text-foreground'
                  } animate-slide-up`}
                  style={{ animationDelay: `${navLinks.indexOf(link) * 50}ms` }}
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
