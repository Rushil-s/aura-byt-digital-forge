
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const businessTexts = ['business', 'presence', 'vision', 'growth', 'brand'];

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

    // Text rotation effect
    const rotationInterval = setInterval(() => {
      setCurrentTextIndex(prevIndex => (prevIndex + 1) % businessTexts.length);
    }, 2000);

    // Add mouse move parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const elements = containerRef.current.querySelectorAll('.parallax-element');
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      elements.forEach((el: Element) => {
        const htmlEl = el as HTMLElement;
        const speed = parseFloat(htmlEl.getAttribute('data-speed') || '0.05');
        const moveX = mouseX * speed;
        const moveY = mouseY * speed;
        htmlEl.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Add scroll animation
    const animateOnScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-animate');
      
      scrollElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight && elementBottom > 0;
        
        if (isVisible) {
          el.classList.add('is-visible');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on load
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', animateOnScroll);
      clearInterval(rotationInterval);
    };
  }, [businessTexts.length]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Animated Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-pulse-slow parallax-element" data-speed="-0.03"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl animate-float parallax-element" data-speed="0.02"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-aurabyt-purple/5 blur-2xl animate-pulse-slow animation-delay-300 parallax-element" data-speed="-0.01"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-aurabyt-blue/5 blur-2xl animate-float animation-delay-700 parallax-element" data-speed="0.04"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-25"></div>
        
        {/* Additional animated elements */}
        <div className="absolute top-1/2 left-1/4 w-8 h-8 rounded-full bg-aurabyt-purple/20 animate-ping parallax-element" data-speed="-0.05"></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 rounded-full bg-aurabyt-blue/20 animate-ping animation-delay-500 parallax-element" data-speed="0.06"></div>
        <div className="absolute top-1/4 left-1/2 w-4 h-4 rounded-full bg-aurabyt-indigo/20 animate-ping animation-delay-700 parallax-element" data-speed="-0.04"></div>
        
        {/* Enhanced floating particles */}
        <div className="absolute top-1/3 left-1/5 w-3 h-3 bg-aurabyt-purple/40 rounded-full animate-float animation-delay-200 parallax-element" data-speed="0.08"></div>
        <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-aurabyt-blue/40 rounded-full animate-float animation-delay-400 parallax-element" data-speed="-0.07"></div>
        <div className="absolute top-2/3 right-1/6 w-4 h-4 bg-aurabyt-indigo/40 rounded-full animate-float animation-delay-600 parallax-element" data-speed="0.05"></div>
        
        {/* Pixelpoint-inspired gradient beams */}
        <div className="absolute top-0 left-1/4 w-1/3 h-1/2 bg-gradient-radial from-aurabyt-purple/10 to-transparent opacity-60 blur-2xl parallax-element" data-speed="0.01"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/3 bg-gradient-radial from-aurabyt-blue/10 to-transparent opacity-50 blur-2xl parallax-element" data-speed="-0.02"></div>
        
        {/* Enhanced grain effect */}
        <div className="absolute inset-0 grain opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo image with enhanced effects */}
          <div className="flex justify-center mb-6 relative">
            <div className="h-48 md:h-56 w-auto relative group">
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full animate-pulse-slow opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <img 
                src="/lovable-uploads/ac5d9c7f-14f3-4b3a-8f12-0e098fb33699.png" 
                alt="AuraByt Logo" 
                className="h-full w-auto object-contain animate-float parallax-element relative z-10" 
                data-speed="-0.03"
              />
              <div className="absolute -inset-4 bg-blue-500/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 scale-105"></div>
              
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl animate-pulse-slow animation-delay-200"></div>
            </div>
          </div>
          
          <div className="mb-6 overflow-hidden">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold relative z-10">
              <div ref={textRef} className="text-animation-container">
                <span className="char-container inline-block">
                  <span className="char animated-gradient-text">A</span>
                </span>
                <span className="char-container inline-block">
                  <span className="char animated-gradient-text">u</span>
                </span>
                <span className="char-container inline-block">
                  <span className="char animated-gradient-text">r</span>
                </span>
                <span className="char-container inline-block">
                  <span className="char animated-gradient-text">a</span>
                </span>
                <span className="char-container inline-block">
                  <span className="char animated-gradient-text">B</span>
                </span>
                <span className="char-container inline-block">
                  <span className="char animated-gradient-text">y</span>
                </span>
                <span className="char-container inline-block">
                  <span className="char animated-gradient-text">t</span>
                </span>
              </div>
            </h1>
            <p className="text-xl md:text-2xl animate-fade-in animation-delay-500 mt-2">
              Empowering your <span className="animated-gradient-text font-medium typewriter-text">{businessTexts[currentTextIndex]}</span>
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in animation-delay-700 max-w-2xl mx-auto">
            <span className="animated-gradient-text">AuraByt</span> is a Toronto-based IT consultancy specializing in web development, 
            digital marketing, and IT support. We help businesses innovate and grow in the digital landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-900">
            <Link 
              to="/services" 
              className="relative px-8 py-4 overflow-hidden group rounded-lg btn-hover-shine"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-aurabyt-purple to-aurabyt-blue transition-all duration-300 group-hover:scale-[1.02]"></span>
              <span className="relative flex items-center justify-center text-white font-medium">
                Our Services <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 border border-primary/50 text-primary font-medium rounded-lg hover:bg-primary/5 transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10 flex items-center justify-center group"
            >
              Get In Touch <span className="ml-1 opacity-0 w-0 group-hover:opacity-100 group-hover:w-5 transition-all duration-300">→</span>
            </Link>
          </div>
          
          {/* Enhanced scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce animation-delay-900">
            <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center pt-1">
              <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse-slow"></div>
            </div>
            <span className="text-sm text-gray-500 mt-2">Scroll Down</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
