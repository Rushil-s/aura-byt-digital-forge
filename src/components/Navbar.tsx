import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Code, BarChart3, Headphones } from 'lucide-react';

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
        { 
          name: 'Software Development', 
          path: '/services#web-development',
          icon: <Code size={16} />,
          description: 'Custom web applications & enterprise software'
        },
        { 
          name: 'Digital Marketing', 
          path: '/services#digital-marketing',
          icon: <BarChart3 size={16} />,
          description: 'SEO, social media & growth strategies'
        },
        { 
          name: 'IT Infrastructure', 
          path: '/services#it-support',
          icon: <Headphones size={16} />,
          description: 'Cloud solutions & technical support'
        }
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
          ? 'navbar-scrolled'
          : 'navbar-glass'
      }`}
    >
      {/* Animated gradient line */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group relative z-10">
            <div className="relative">
              <div className="h-12 w-12 relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 border border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <img
                  alt="AuraByt Logo"
                  className="h-8 w-8 object-contain relative z-10 filter brightness-110 group-hover:scale-110 transition-transform duration-300"
                  src="/assets/aurabytlogo.png"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AuraByt
              </span>
              <span className="text-xs text-muted-foreground -mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Digital Innovation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <div key={link.name} className="relative" ref={link.dropdown ? dropdownRef : undefined}>
                {link.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(link.name)}
                      className={`flex items-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-xl hover:bg-primary/10 hover:text-primary relative group ${
                        location.pathname === link.path || location.pathname.startsWith('/services')
                          ? 'text-primary bg-primary/10 border border-primary/20'
                          : 'text-foreground hover:text-primary'
                      }`}
                    >
                      {link.name}
                      <ChevronDown 
                        size={16} 
                        className={`ml-2 transition-transform duration-300 ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`} 
                      />
                      {/* Hover indicator */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full rounded-full" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {activeDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-3 w-80 bg-card/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/50 py-3 animate-in fade-in-0 zoom-in-95 duration-200">
                        <div className="absolute -top-1 left-8 w-2 h-2 bg-card rotate-45 border-l border-t border-border/50" />
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="flex items-start px-4 py-4 text-sm hover:bg-primary/10 transition-all duration-200 mx-2 rounded-xl group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors duration-200">
                              <span className="text-primary">{item.icon}</span>
                            </div>
                            <div>
                              <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                                {item.name}
                              </div>
                              <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-xl hover:bg-primary/10 hover:text-primary relative group ${
                      location.pathname === link.path
                        ? 'text-primary bg-primary/10 border border-primary/20'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {link.name}
                    {/* Hover indicator */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full rounded-full" />
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-6 px-8 py-3 bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-3 rounded-xl bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:scale-105 active:scale-95 border border-border/50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'rotate-45 top-3' : 'top-1'}`} />
              <span className={`absolute block w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? 'opacity-0' : 'top-3'}`} />
              <span className={`absolute block w-6 h-0.5 bg-foreground transition-all duration-300 ${isOpen ? '-rotate-45 top-3' : 'top-5'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-in slide-in-from-top-2 duration-300">
            <div className="bg-card/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/50 p-4 space-y-2">
              {navLinks.map((link, idx) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(link.name)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl ${
                          location.pathname === link.path || location.pathname.startsWith('/services')
                            ? 'text-primary bg-primary/10 border border-primary/20'
                            : 'text-foreground hover:text-primary hover:bg-primary/5'
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
                              className="flex items-center px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-lg"
                              onClick={() => {
                                setIsOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              <span className="mr-3 text-primary">{item.icon}</span>
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
                          ? 'text-primary bg-primary/10 border border-primary/20'
                          : 'text-foreground hover:text-primary hover:bg-primary/5'
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
                className="block w-full mt-4 px-4 py-3 bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-xl text-center hover:shadow-lg transition-all duration-300"
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