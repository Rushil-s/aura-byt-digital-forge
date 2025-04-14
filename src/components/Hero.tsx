
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Text animation effect
    const chars = textRef.current?.querySelectorAll('.char');
    if (chars) {
      chars.forEach((char, i) => {
        setTimeout(() => {
          char.classList.add('visible');
        }, 100 * i);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gradient-to-b from-slate-100 to-white">
      {/* Animated Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-aurabyt-purple/10 blur-2xl animate-pulse-slow animation-delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-aurabyt-blue/10 blur-2xl animate-float animation-delay-700"></div>
        
        {/* Additional animated elements */}
        <div className="absolute top-1/2 left-1/4 w-8 h-8 rounded-full bg-aurabyt-purple/30 animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 rounded-full bg-aurabyt-blue/30 animate-ping animation-delay-500"></div>
        <div className="absolute top-1/4 left-1/2 w-4 h-4 rounded-full bg-aurabyt-indigo/30 animate-ping animation-delay-700"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo image */}
          <div className="flex justify-center mb-6 relative">
            <div className="h-48 md:h-56 w-auto relative">
              <img 
                src="/lovable-uploads/a1df16a1-4018-4eb8-aa66-69f97e2772df.png" 
                alt="AuraByt Logo" 
                className="h-full w-auto object-contain animate-float" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-aurabyt-purple/20 to-aurabyt-blue/20 blur-xl rounded-full animate-pulse-slow opacity-60"></div>
            </div>
          </div>
          
          <div className="mb-6 overflow-hidden">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold relative z-10">
              <div ref={textRef} className="text-animation-container">
                <span className="char-container inline-block">
                  <span className="char">A</span>
                </span>
                <span className="char-container inline-block">
                  <span className="char">u</span>
                </span>
                <span className="char-container inline-block">
                  <span className="char">r</span>
                </span>
                <span className="char-container inline-block">
                  <span className="char">a</span>
                </span>
                <span className="char-container inline-block text-gradient-start">
                  <span className="char font-bold text-aurabyt-purple">B</span>
                </span>
                <span className="char-container inline-block text-gradient-mid">
                  <span className="char font-bold text-aurabyt-indigo">y</span>
                </span>
                <span className="char-container inline-block text-gradient-end">
                  <span className="char font-bold text-aurabyt-blue">t</span>
                </span>
              </div>
            </h1>
            <p className="text-xl md:text-2xl animate-fade-in animation-delay-500">Transforming Ideas into <span className="gradient-text">Digital Reality</span></p>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in animation-delay-700">
            AuraByt is a Toronto-based IT consultancy specializing in web development, 
            digital marketing, and IT support. We help businesses innovate and grow in the digital landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-900">
            <Link 
              to="/services" 
              className="btn-primary flex items-center justify-center hover-scale"
            >
              Our Services <ChevronRight size={20} className="ml-1" />
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-3 text-primary border border-primary font-medium rounded-lg hover:bg-primary/5 transition-colors hover-scale"
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
