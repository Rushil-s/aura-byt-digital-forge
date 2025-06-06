import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navbarRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Web Development', path: '/services#web-development' },
        { name: 'Digital Marketing', path: '/services#digital-marketing' },
        { name: 'IT Support', path: '/services#it-support' }
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleDropdownToggle = (linkName: string) => {
    setActiveDropdown(activeDropdown === linkName ? null : linkName);
  };

  return (
    <header
      ref={navbarRef}
      className={`fixed w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100/50'
          : location.pathname !== '/'
          ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100/30'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      {/* Animated gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-500" 
           style={{ opacity: scrolled ? 1 : 0 }} />

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group relative z-10">
            <div className="relative">
              <div className="h-12 w-12 relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <img
                  alt="AuraByt Logo"
                  className="h-8 w-8 object-contain relative z-10 filter brightness-110 group-hover:scale-110 transition-transform duration-300"
                  src="/assets/aurabytlogo.png"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AuraByt
              </span>
              <span className="text-xs text-gray-500 -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Digital Innovation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative" ref={link.dropdown ? dropdownRef : undefined}>
                {link.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(link.name)}
                      className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl hover:bg-gray-50 hover:text-primary relative group ${
                        location.pathname === link.path || location.pathname.startsWith('/services')
                          ? 'text-primary bg-primary/5'
                          : 'text-gray-700 hover:text-primary'
                      }`}
                    >
                      {link.name}
                      <ChevronDown 
                        size={16} 
                        className={`ml-1 transition-transform duration-300 ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`} 
                      />
                      {/* Hover indicator */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {activeDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100/50 py-2 animate-in fade-in-0 zoom-in-95 duration-200">
                        <div className="absolute -top-1 left-6 w-2 h-2 bg-white rotate-45 border-l border-t border-gray-100/50" />
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-3 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 mx-2 rounded-xl"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="font-medium">{item.name}</div>
                            <div className="text-xs text-gray-500 mt-0.5">
                              {item.name === 'Web Development' && 'Custom websites & applications'}
                              {item.name === 'Digital Marketing' && 'SEO, social media & advertising'}
                              {item.name === 'IT Support' && 'Infrastructure & technical support'}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl hover:bg-gray-50 hover:text-primary relative group ${
                      location.pathname === link.path
                        ? 'text-primary bg-primary/5'
                        : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {link.name}
                    {/* Hover indicator */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-xl bg-gray-50/80 backdrop-blur-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : 'top-1'}`} />
              <span className={`absolute block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : 'top-3'}`} />
              <span className={`absolute block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : 'top-5'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-in slide-in-from-top-2 duration-300">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100/50 p-4 space-y-2">
              {navLinks.map((link, idx) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(link.name)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl ${
                          location.pathname === link.path || location.pathname.startsWith('/services')
                            ? 'text-primary bg-primary/10'
                            : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                        }`}
                      >
                        {link.name}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-300 ${
                            activeDropdown === link.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {activeDropdown === link.name && (
                        <div className="mt-2 ml-4 space-y-1 animate-in slide-in-from-top-1 duration-200">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-lg"
                              onClick={() => {
                                setIsOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl ${
                        location.pathname === link.path
                          ? 'text-primary bg-primary/10'
                          : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                      }`}
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <Link
                to="/contact"
                className="block w-full mt-4 px-4 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-xl text-center hover:shadow-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;