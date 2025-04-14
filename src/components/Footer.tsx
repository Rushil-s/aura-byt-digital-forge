import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-aurabyt-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">AuraByt</h3>
            <p className="text-gray-300 mb-4">
              Digital innovation consultancy specializing in web development, digital marketing, and IT support.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">
                  Software & Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">
                  IT Support & Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-primary mt-1" />
                <span className="text-gray-300">Toronto, Canada</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary" />
                <span className="text-gray-300">(437) 925-2744</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary" />
                <span className="text-gray-300">connect@aurabyt.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} AuraByt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;