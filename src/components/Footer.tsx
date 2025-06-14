
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Code, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground relative overflow-hidden border-t border-border">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="pt-20 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                  <img
                    alt="AuraByt Logo"
                    className="h-10 w-10 object-contain"
                    src="/assets/aurabytlogo.png"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold gradient-text">
                    AuraByt
                  </h3>
                  <p className="text-muted-foreground font-medium">Enterprise IT Consultancy</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-8 leading-relaxed max-w-md text-lg">
                Architecting the future of business technology through innovative software development, 
                digital transformation, and enterprise infrastructure solutions.
              </p>
              
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook size={20} />, href: "https://www.facebook.com/aurabyt.inc", label: "Facebook" },
                  { icon: <Twitter size={20} />, href: "https://twitter.com/aurabyt_inc", label: "Twitter" },
                  { icon: <Instagram size={20} />, href: "https://www.instagram.com/aurabyt.inc", label: "Instagram" },
                  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/aurabyt", label: "LinkedIn" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 bg-card/50 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-border hover:border-primary"
                    aria-label={social.label}
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300 text-muted-foreground group-hover:text-primary-foreground">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-8 flex items-center">
                <Code size={20} className="mr-3 text-primary" />
                Quick Links
              </h4>
              <ul className="space-y-4">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Our Services", href: "/services" },
                  { name: "Careers", href: "/careers" },
                  { name: "Contact Us", href: "/contact" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight size={14} className="mr-3 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-semibold mb-8 flex items-center">
                <Shield size={20} className="mr-3 text-primary" />
                Contact
              </h4>
              <ul className="space-y-6">
                <li className="flex items-start group">
                  <MapPin size={20} className="mr-4 text-primary mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="font-medium">Toronto, Canada</div>
                    <div className="text-sm text-muted-foreground">Serving clients globally</div>
                  </div>
                </li>
                <li className="flex items-start group">
                  <Phone size={20} className="mr-4 text-primary mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <a href="tel:+14379252744" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
                      (437) 925-2744
                    </a>
                    <div className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM EST</div>
                  </div>
                </li>
                <li className="flex items-start group">
                  <Mail size={20} className="mr-4 text-primary mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <a href="mailto:connect@aurabyt.com" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
                      connect@aurabyt.com
                    </a>
                    <div className="text-sm text-muted-foreground">24/7 support available</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0 text-center md:text-left">
              &copy; {currentYear} AuraByt. All rights reserved. Engineered with precision in Toronto.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
