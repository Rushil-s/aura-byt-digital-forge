
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo image */}
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/ec4309c7-d899-4183-a36b-c7c5bf0211a6.png" 
              alt="AuraByt Logo" 
              className="h-24 md:h-32 animate-fade-in"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Transforming Ideas into <span className="gradient-text">Digital Reality</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            AuraByt is a Toronto-based IT consultancy specializing in web development, 
            digital marketing, and IT support. We help businesses innovate and grow in the digital landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link 
              to="/services" 
              className="btn-primary flex items-center justify-center"
            >
              Our Services <ChevronRight size={20} className="ml-1" />
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-3 text-primary border border-primary font-medium rounded-lg hover:bg-primary/5 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
