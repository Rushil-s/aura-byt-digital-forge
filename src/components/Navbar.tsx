
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navbarRef = useRef<HTMLElement>(null);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Set scrolled state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Handle any link click
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Keyboard accessibility: close menu with Escape
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [isOpen]);

  return (
    <header
      ref={navbarRef}
      className={`fixed w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-background/98 backdrop-blur-xl shadow-2xl border-b border-primary/30'
          : 'bg-background/80 backdrop-blur-xl border-b border-border/50'
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-3 group relative z-10"
            onClick={handleLinkClick}
            tabIndex={0}
            aria-label="AuraByt Home"
          >
            <div className="relative">
              <div className="h-10 w-10 sm:h-12 sm:w-12 relative flex items-center justify-center overflow-hidden rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 border border-primary/20">
                <img
                  src="/assets/aurabytlogo.png"
                  alt="AuraByt logo, an abstract blue/yellow/white glyph, enterprise IT consultancy"
                  className="h-6 w-6 sm:h-8 sm:w-8 object-contain relative z-10 filter brightness-110 group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="flex flex-col" aria-label="Site Title">
              <span className="font-bold text-lg sm:text-xl gradient-text">
                AuraByt
              </span>
              <span className="text-xs text-muted-foreground -mt-1">
                IT Consultancy
              </span>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2" aria-label="Desktop navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-primary/10 hover:text-primary relative group ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={handleLinkClick}
                aria-current={location.pathname === link.path ? "page" : undefined}
                aria-label={link.name}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 sm:p-3 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 border border-border/50 z-50 relative"
            onClick={() => setIsOpen((val) => !val)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
          >
            {isOpen ? <X size={20} className="sm:w-6 sm:h-6 text-primary" /> : <Menu size={20} className="sm:w-6 sm:h-6 text-foreground" />}
          </button>
        </div>
        {/* Mobile Navigation (Drawer-style) */}
        {isOpen && (
          <div
            className="fixed inset-0 z-[60] flex"
            aria-modal="true"
            role="dialog"
          >
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] transition-opacity"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
            />
            {/* Drawer */}
            <nav
              id="mobile-nav-menu"
              aria-label="Mobile navigation"
              className="relative ml-auto bg-card/98 backdrop-blur-xl rounded-l-xl shadow-2xl border-l border-border w-64 max-w-[85vw] h-full p-5 z-[70] flex flex-col"
            >
              <button
                className="ml-auto mb-4 p-2 rounded hover:bg-card/80 transition"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
              >
                <X size={20} className="sm:w-6 sm:h-6 text-foreground" />
              </button>
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-3 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      location.pathname === link.path
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                    onClick={handleLinkClick}
                    aria-current={location.pathname === link.path ? "page" : undefined}
                    aria-label={link.name}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

