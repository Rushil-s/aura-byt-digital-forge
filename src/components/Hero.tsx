import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Shield, Zap, Globe } from 'lucide-react';
import { ParticleTextEffect } from '@/components/ui/interactive-text-particle';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const businessTexts = ['innovation', 'transformation', 'excellence', 'growth', 'success'];
  const [isAnimating, setIsAnimating] = useState(false);
  const [showParticleText, setShowParticleText] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Set up text rotation interval
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % businessTexts.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    // Show particle text after initial load
    const particleTimer = setTimeout(() => {
      setShowParticleText(true);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(particleTimer);
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
    <section 
      ref={heroRef} 
      className="relative min-h-screen flex items-center py-20 overflow-hidden bg-background"
    >
      {/* Tech grid background */}
      <div className="tech-grid" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float top-10 right-10" />
        <div className="absolute w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-float bottom-20 left-5 animation-delay-300" />
        <div className="absolute w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float top-60 right-1/3 animation-delay-500" />
      </div>

      {/* Interactive Particle Text Overlay */}
      {showParticleText && (
        <div className="absolute inset-0 z-20 pointer-events-auto">
          <ParticleTextEffect
            text="AuraByt"
            className="absolute top-0 left-0"
            colors={[
              '3b82f6', // Blue-500
              '6366f1', // Indigo-500  
              '8b5cf6', // Violet-500
              'a855f7', // Purple-500
              'd946ef', // Fuchsia-500
              'ec4899', // Pink-500
            ]}
            animationForce={60}
            particleDensity={3}
          />
        </div>
      )}
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo with enhanced animation */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="h-40 md:h-48 w-auto relative">
                {/* Glow effects */}
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
                <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full opacity-60" />
                
                {/* Logo */}
                <img 
                  src="/assets/aurabytlogo.png"
                  alt="AuraByt Logo" 
                  className="h-full w-auto object-contain relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
            </div>
          </div>
          
          {/* Main heading */}
          <div className="mb-12 space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
              <span className="text-foreground">Aura</span>
              <span className="gradient-text">Byt</span>
            </h1>
            
            {/* Fixed typewriter section */}
            <div className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground">
              <div className="flex flex-col items-center justify-center space-y-2">
                <span className="block">Driving digital</span>
                <div 
                  className={`relative inline-block font-medium gradient-text transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
                  style={{ 
                    minWidth: '280px',
                    minHeight: '1.2em',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span 
                    ref={textRef}
                    className="inline-block"
                  >
                    {businessTexts[currentTextIndex].split('').map((char, i) => (
                      <span key={i} className="char inline-block transition-all duration-300 transform">{char}</span>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade IT consultancy specializing in{' '}
            <span className="font-semibold text-primary">software development</span>,{' '}
            <span className="font-semibold text-primary">digital transformation</span>, and{' '}
            <span className="font-semibold text-primary">infrastructure solutions</span>.{' '}
            We architect the future of business technology.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link 
              to="/services" 
              className="btn-primary text-lg z-30 relative"
            >
              Explore Solutions
              <ArrowRight className="ml-3" size={24} />
            </Link>
            
            <Link 
              to="/contact" 
              className="btn-secondary text-lg z-30 relative"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Interaction hint */}
          {showParticleText && (
            <div className="mt-12 text-sm text-muted-foreground/70 animate-pulse">
              Move your mouse over the screen to interact with the particles
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;