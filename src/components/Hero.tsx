
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const businessTexts = ['business', 'presence', 'vision', 'growth', 'brand'];
  const [isAnimating, setIsAnimating] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Apply animation to the logo
    const logoElement = document.querySelector('.logo-container');
    if (logoElement) {
      logoElement.classList.add('animate-float');
    }

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % businessTexts.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    // Add animation to text characters when they change
    const chars = textRef.current?.querySelectorAll('.char');
    if (chars) {
      chars.forEach((char, i) => {
        setTimeout(() => char.classList.add('visible'), 50 * i);
      });
    }

    return () => clearInterval(interval);
  }, [businessTexts.length, currentTextIndex]);

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center py-16 overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="h-48 md:h-56 w-auto relative group logo-container animate-float">
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-500 hover-glow"></div>
              <img 
                src="/lovable-uploads/ac5d9c7f-14f3-4b3a-8f12-0e098fb33699.png" 
                alt="AuraByt Logo" 
                className="h-full w-auto object-contain relative z-10" 
              />
            </div>
          </div>
          
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animated-gradient-text mb-4">
              AuraByt
            </h1>
            <p className="text-xl md:text-2xl">
              Empowering your{' '}
              <span 
                ref={textRef}
                className={`animated-gradient-text font-medium typewriter-text transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
              >
                {businessTexts[currentTextIndex].split('').map((char, i) => (
                  <span key={i} className="char">{char}</span>
                ))}
              </span>
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            <span className="animated-gradient-text">AuraByt</span> is a Toronto-based IT consultancy specializing in web development, 
            digital marketing, and IT support. We help businesses innovate and grow in the digital landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              className="relative px-8 py-4 overflow-hidden group bg-gradient-to-r from-aurabyt-purple to-aurabyt-blue rounded-lg text-white font-medium hover:opacity-90 transition-all btn-hover-shine"
            >
              Our Services <ArrowRight className="inline-block ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 border border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-all flex items-center justify-center group"
            >
              Get In Touch
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
        <div className="absolute inset-0 grain"></div>
      </div>
    </section>
  );
};

export default Hero;
