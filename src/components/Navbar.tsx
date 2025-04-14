import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 shadow-md backdrop-blur-md py-3' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="h-12 w-12 relative overflow-visible transition-all duration-300 group-hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-aurabyt-purple/30 to-aurabyt-blue/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img src="/lovable-uploads/1b585414-d018-4ee5-ad0e-06daf6b9c009.png" alt="AuraByt Logo" className="h-full w-full object-contain relative z-10" />
            </div>
            <span className="font-bold text-xl">
              
              
            </span>
          </Link>

          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map(link => <NavigationMenuItem key={link.name}>
                    <Link to={link.path} className={cn("group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors focus:outline-none relative", location.pathname === link.path ? "text-primary font-semibold" : "text-foreground hover:text-primary")}>
                      {link.name}
                      <span className="absolute bottom-1 left-2 w-0 h-0.5 bg-primary group-hover:w-[calc(100%-16px)] transition-all duration-300"></span>
                    </Link>
                  </NavigationMenuItem>)}
                <NavigationMenuItem>
                  <Link to="/contact" className="relative px-6 py-3 text-white font-medium rounded-lg overflow-hidden group">
                    <span className="absolute inset-0 bg-gradient-to-r from-aurabyt-purple to-aurabyt-blue"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-aurabyt-indigo to-aurabyt-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative">Get Started</span>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <button className="md:hidden text-foreground focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 px-4">
              {navLinks.map(link => <Link key={link.name} to={link.path} className={`font-medium py-2 transition-colors duration-300 hover:text-primary relative group ${location.pathname === link.path ? 'text-primary font-semibold' : 'text-foreground'}`}>
                  {link.name}
                  <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>)}
              <Link to="/contact" className="relative px-6 py-3 text-white font-medium rounded-lg overflow-hidden group mt-2">
                <span className="absolute inset-0 bg-gradient-to-r from-aurabyt-purple to-aurabyt-blue"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-aurabyt-indigo to-aurabyt-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative text-center block">Get Started</span>
              </Link>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Navbar;