
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Animated Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-aurabyt-purple/10 blur-2xl animate-pulse-slow animation-delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-aurabyt-blue/10 blur-2xl animate-float animation-delay-700"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo image */}
          <div className="flex justify-center mb-6">
            <div className="h-40 md:h-48 w-auto">
              <img 
                src="/lovable-uploads/4492b5df-ae0f-4613-a457-4c4edf6181a8.png" 
                alt="AuraByt Logo" 
                className="h-full w-full object-contain" 
              />
            </div>
          </div>
          
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <div className="overflow-hidden">
                <span className="inline-block animate-slide-up">Aura</span>
                <span className="inline-block text-primary animate-slide-up animation-delay-300">Byt</span>
              </div>
            </h1>
            <p className="text-xl md:text-2xl animate-slide-up animation-delay-500">Transforming Ideas into <span className="gradient-text">Digital Reality</span></p>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 animate-slide-up animation-delay-700">
            AuraByt is a Toronto-based IT consultancy specializing in web development, 
            digital marketing, and IT support. We help businesses innovate and grow in the digital landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-900">
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
