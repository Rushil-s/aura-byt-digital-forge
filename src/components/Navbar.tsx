
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Code, BarChart3, Headphones } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
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

  const handleServiceNavigation = (path: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    
    if (path.includes('#')) {
      const [route, section] = path.split('#');
      
      if (location.pathname === route) {
        // Already on services page, just scroll to section
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Navigate to services page first, then scroll
        navigate(route);
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 500);
      }
    } else {
      navigate(path);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { 
          name: 'Software Development', 
          path: '/services#development',
          icon: <Code size={16} />,
          description: 'Custom web applications & enterprise software'
        },
        { 
          name: 'Digital Marketing', 
          path: '/services#marketing',
          icon: <BarChart3 size={16} />,
          description: 'SEO, social media & growth strategies'
        },
        { 
          name: 'IT Infrastructure', 
          path: '/services#infrastructure',
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

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      ref={navbarRef}
      className={`fixed w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-background/98 backdrop-blur-xl shadow-2xl border-b border-primary/30'
          : 'bg-background/80 backdrop-blur-xl border-b border-border/50'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group relative z-10" onClick={handleLinkClick}>
            <div className="relative">
              <div className="h-10 w-10 sm:h-12 sm:w-12 relative flex items-center justify-center overflow-hidden rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 border border-primary/20">
                <img
                  alt="AuraByt Logo"
                  className="h-6 w-6 sm:h-8 sm:w-8 object-contain relative z-10 filter brightness-110 group-hover:scale-110 transition-transform duration-300"
                  src="/assets/aurabytlogo.png"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl gradient-text">
                AuraByt
              </span>
              <span className="text-xs text-muted-foreground -mt-1">
                IT Consultancy
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
                      className={`flex items-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-primary/10 hover:text-primary relative group ${
                        location.pathname === link.path || location.pathname.startsWith('/services')
                          ? 'text-primary bg-primary/10'
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
                    </button>
                    
                    {/* Desktop Dropdown Menu */}
                    {activeDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-3 w-80 bg-card/98 backdrop-blur-xl rounded-lg shadow-2xl border border-border py-3 animate-in fade-in-0 zoom-in-95 duration-200 z-50">
                        {link.dropdown.map((item) => (
                          <button
                            key={item.name}
                            onClick={() => handleServiceNavigation(item.path)}
                            className="flex items-start px-4 py-4 text-sm hover:bg-primary/10 transition-all duration-200 mx-2 rounded-lg group w-full text-left"
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
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-primary/10 hover:text-primary relative group ${
                      location.pathname === link.path
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:text-primary'
                    }`}
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 sm:p-3 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 border border-border/50 z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} className="sm:w-6 sm:h-6 text-primary" /> : <Menu size={20} className="sm:w-6 sm:h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-in slide-in-from-top-2 duration-300 relative z-40">
            <div className="bg-card/98 backdrop-blur-xl rounded-lg shadow-2xl border border-border p-3 sm:p-4 space-y-1 sm:space-y-2 mt-2">
              {navLinks.map((link, idx) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(link.name)}
                        className={`w-full flex items-center justify-between px-3 sm:px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${
                          location.pathname === link.path || location.pathname.startsWith('/services')
                            ? 'text-primary bg-primary/10'
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
                        <div className="mt-2 ml-2 sm:ml-4 space-y-1 animate-in slide-in-from-top-1 duration-200">
                          {link.dropdown.map((item) => (
                            <button
                              key={item.name}
                              onClick={() => handleServiceNavigation(item.path)}
                              className="flex items-center px-3 sm:px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-lg w-full text-left touch-manipulation"
                            >
                              <span className="mr-2 sm:mr-3 text-primary flex-shrink-0">{item.icon}</span>
                              <span className="text-xs sm:text-sm">{item.name}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block px-3 sm:px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg touch-manipulation ${
                        location.pathname === link.path
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground hover:text-primary hover:bg-primary/5'
                      }`}
                      style={{ animationDelay: `${idx * 50}ms` }}
                      onClick={handleLinkClick}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
