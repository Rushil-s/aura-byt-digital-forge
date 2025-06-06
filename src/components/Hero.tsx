import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Shield, Zap, Globe } from 'lucide-react';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const businessTexts = ['innovation', 'transformation', 'excellence', 'growth', 'success'];
  const [isAnimating, setIsAnimating] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Set up text rotation interval
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % businessTexts.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    // Mouse tracking for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      clearInterval(interval);
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
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
      className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gradient-to-br from-background via-background to-background"
    >
      {/* Cyber grid background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Animated background elements with mouse parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs with parallax */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl animate-float"
          style={{
            top: '10%',
            right: '10%',
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-accent/15 to-primary/15 blur-3xl animate-float"
          style={{
            bottom: '20%',
            left: '5%',
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl animate-float"
          style={{
            top: '60%',
            right: '30%',
            animationDelay: '4s',
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        
        {/* Floating tech icons */}
        <div className="absolute top-1/4 left-1/4 animate-float opacity-20">
          <Code size={32} className="text-primary" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float opacity-20" style={{ animationDelay: '1s' }}>
          <Shield size={36} className="text-accent" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float opacity-20" style={{ animationDelay: '2s' }}>
          <Zap size={34} className="text-primary" />
        </div>
        <div className="absolute bottom-1/4 right-1/5 animate-float opacity-20" style={{ animationDelay: '3s' }}>
          <Globe size={30} className="text-accent" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo with enhanced animation */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="h-40 md:h-48 w-auto relative">
                {/* Multiple glow layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-accent/40 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-2xl rounded-full animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl rounded-full opacity-60" />
                
                {/* Logo */}
                <img 
                  src="/assets/aurabytlogo.png"
                  alt="AuraByt Logo" 
                  className="h-full w-auto object-contain relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Rotating rings */}
                <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin opacity-30" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-2 border border-accent/20 rounded-full animate-spin opacity-20" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              </div>
            </div>
          </div>
          
          {/* Main heading with enhanced typography */}
          <div className="mb-12 space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
              <span className="text-foreground">
                Aura
              </span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Byt
              </span>
            </h1>
            
            <div className="text-3xl md:text-4xl lg:text-5xl font-light text-muted-foreground">
              Driving digital{' '}
              <span 
                ref={textRef}
                className={`relative inline-block font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
              >
                {businessTexts[currentTextIndex].split('').map((char, i) => (
                  <span key={i} className="char inline-block transition-all duration-300 transform">{char}</span>
                ))}
              </span>
            </div>
          </div>
          
          {/* Description with better spacing */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade IT consultancy specializing in{' '}
            <span className="font-semibold text-primary">software development</span>,{' '}
            <span className="font-semibold text-accent">digital transformation</span>, and{' '}
            <span className="font-semibold text-primary">infrastructure solutions</span>.{' '}
            We architect the future of business technology.
          </p>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <Link 
              to="/services" 
              className="group relative px-10 py-5 bg-gradient-to-r from-primary to-accent text-background font-semibold rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden text-lg"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center">
                Explore Solutions
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={24} />
              </span>
            </Link>
            
            <Link 
              to="/contact" 
              className="group px-10 py-5 border-2 border-primary/30 text-primary font-semibold rounded-2xl hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm bg-card/20 text-lg"
            >
              <span className="flex items-center">
                Schedule Consultation
                <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight size={24} />
                </span>
              </span>
            </Link>
          </div>
          
          {/* Professional metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '100+', label: 'Enterprise Clients', icon: <Globe size={28} /> },
              { number: '99.9%', label: 'System Uptime', icon: <Shield size={28} /> },
              { number: '24/7', label: 'Technical Support', icon: <Zap size={28} /> },
              { number: '5+', label: 'Years Excellence', icon: <Code size={28} /> }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 card-3d"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-center mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;