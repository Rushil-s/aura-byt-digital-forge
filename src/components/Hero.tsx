
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation classes after component mounts
    if (titleRef.current) titleRef.current.classList.add('animate-fade-in');
    
    // Delayed animations for staggered effect
    setTimeout(() => {
      if (subtitleRef.current) subtitleRef.current.classList.add('animate-fade-in');
    }, 300);
    
    setTimeout(() => {
      if (ctaRef.current) ctaRef.current.classList.add('animate-fade-in');
    }, 600);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0"
          >
            Transforming Ideas into <span className="gradient-text">Digital Reality</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-700 mb-8 opacity-0"
          >
            AuraByt is a Toronto-based IT consultancy specializing in web development, 
            digital marketing, and IT support. We help businesses innovate and grow in the digital landscape.
          </p>
          
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0"
          >
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
