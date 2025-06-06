import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-gradient-to-tl from-purple-500/10 to-pink-500/10 blur-3xl rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-12 w-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <img
                    alt="AuraByt Logo"
                    className="h-8 w-8 object-contain filter brightness-0 invert"
                    src="/assets/aurabytlogo.png"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    AuraByt
                  </h3>
                  <p className="text-sm text-gray-400">Digital Innovation Consultancy</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Empowering businesses through innovative digital solutions. We specialize in web development, 
                digital marketing, and IT support to help you thrive in the digital landscape.
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
                    className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-primary hover:to-accent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 flex items-center">
                <Sparkles size={18} className="mr-2 text-primary" />
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Web Development", href: "/services#web-development" },
                  { name: "Digital Marketing", href: "/services#digital-marketing" },
                  { name: "IT Support", href: "/services#it-support" },
                  { name: "Cloud Solutions", href: "/services" }
                ].map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.href} 
                      className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6 flex items-center">
                <Mail size={18} className="mr-2 text-accent" />
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <MapPin size={20} className="mr-3 text-primary mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300">Toronto, Canada</span>
                </li>
                <li className="flex items-center group">
                  <Phone size={20} className="mr-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <a href="tel:+14379252744" className="text-gray-300 hover:text-primary transition-colors duration-300">
                    (437) 925-2744
                  </a>
                </li>
                <li className="flex items-center group">
                  <Mail size={20} className="mr-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <a href="mailto:connect@aurabyt.com" className="text-gray-300 hover:text-primary transition-colors duration-300">
                    connect@aurabyt.com
                  </a>
                </li>
              </ul>
              
              {/* Newsletter signup */}
              <div className="mt-6">
                <h5 className="text-sm font-semibold mb-3 text-gray-200">Stay Updated</h5>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors duration-300"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-r-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AuraByt. All rights reserved. Made with ❤️ in Toronto.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;