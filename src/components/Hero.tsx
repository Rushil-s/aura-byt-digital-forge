import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const businessTexts = ['business', 'presence', 'vision', 'growth', 'brand'];
  const [isAnimating, setIsAnimating] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const mouseFollowerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number}>>([]);

  useEffect(() => {
    // Initialize particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 3,
      speed: 0.05 + Math.random() * 0.1
    }));
    setParticles(newParticles);

    // Set up text rotation interval
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % businessTexts.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    // Add animation to the logo
    const logoElement = document.querySelector('.logo-container');
    if (logoElement) {
      logoElement.classList.add('animate-float');
    }

    // Add animation to text characters when they change
    const chars = textRef.current?.querySelectorAll('.char');
    if (chars) {
      chars.forEach((char, i) => {
        setTimeout(() => char.classList.add('visible'), 50 * i);
      });
    }

    // Mouse follower effect
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseFollowerRef.current) {
        const follower = mouseFollowerRef.current;
        const x = e.clientX;
        const y = e.clientY;
        
        requestAnimationFrame(() => {
          follower.style.opacity = '1';
          follower.style.left = `${x}px`;
          follower.style.top = `${y}px`;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animate particles
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          y: particle.y - particle.speed > 0 ? particle.y - particle.speed : 100
        }))
      );
      particleAnimationId = requestAnimationFrame(animateParticles);
    };
    
    let particleAnimationId = requestAnimationFrame(animateParticles);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(particleAnimationId);
    };
  }, [businessTexts.length]);

  // Update character animations whenever the current text changes
  useEffect(() => {
    const chars = textRef.current?.querySelectorAll('.char');
    if (chars) {
      chars.forEach((char) => char.classList.remove('visible'));
      chars.forEach((char, i) => {
        setTimeout(() => char.classList.add('visible'), 50 * i);
      });
    }
  }, [currentTextIndex]);

  return (
    <section ref={heroRef} className="relative min-h-[calc(100vh-5rem)] flex items-center py-16 overflow-hidden">
      {/* Mouse follower */}
      <div ref={mouseFollowerRef} className="mouse-follower"></div>
      
      {/* Animated background elements */}
      <div className="animated-bg animated-bg-1"></div>
      <div className="animated-bg animated-bg-2"></div>
      <div className="animated-bg animated-bg-3"></div>
      
      {/* Tech grid background */}
      <div className="tech-grid"></div>
      
      {/* Particles */}
      {particles.map(particle => (
        <div 
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: 0.3 + Math.random() * 0.3
          }}
        />
      ))}
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="h-48 md:h-56 w-auto relative group logo-container animate-float">
              {/* Enhanced glow effect */}
              <div className="logo-glow"></div>
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-500 hover-glow"></div>
              <img 
                src="/assets/aurabytlogo.png"
                alt="AuraByt Logo" 
                className="h-full w-auto object-contain relative z-10" 
              />
            </div>
          </div>
          
          <div className="mb-6 animate-fade-in">
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
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
            <span className="animated-gradient-text">AuraByt</span> is a Toronto-based IT consultancy specializing in web development, 
            digital marketing, and IT support. We help businesses innovate and grow in the digital landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-300">
            <Link 
              to="/services" 
              className="relative px-8 py-4 overflow-hidden group bg-gradient-to-r from-aurabyt-purple to-aurabyt-blue rounded-lg text-white font-medium hover:opacity-90 transition-all btn-hover-shine btn-tech-hover"
            >
              Our Services <ArrowRight className="inline-block ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 border border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-all flex items-center justify-center group btn-tech-hover"
            >
              Get In Touch
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Digital rain effect (subtle) */}
      <div className="digital-rain-container">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="digital-rain"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 100}%`,
              animation: `digital-rain-fall ${15 + Math.random() * 10}s linear infinite`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.1
            }}
          >
            {[...Array(Math.floor(Math.random() * 20 + 10))].map((_, j) => (
              <div key={j} style={{ animationDelay: `${j * 0.1}s` }}>
                {String.fromCharCode(Math.floor(Math.random() * 93) + 33)}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        {/* <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div> */}
        {/* <div className="absolute inset-0 grain"></div> */}
        <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-aurabyt-purple/10 via-aurabyt-blue/10 to-white/20 blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;