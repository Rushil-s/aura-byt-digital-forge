import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const businessTexts = ['innovation', 'growth', 'success', 'transformation', 'excellence'];
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
      className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30"
    >
      {/* Animated background elements with mouse parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs with parallax */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl animate-float"
          style={{
            top: '10%',
            right: '10%',
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-accent/15 to-primary/15 blur-3xl animate-float"
          style={{
            bottom: '20%',
            left: '5%',
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl animate-float"
          style={{
            top: '60%',
            right: '30%',
            animationDelay: '4s',
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        {/* Floating icons */}
        <div className="absolute top-1/4 left-1/4 animate-float opacity-20">
          <Sparkles size={24} className="text-primary" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float opacity-20" style={{ animationDelay: '1s' }}>
          <Zap size={28} className="text-accent" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float opacity-20" style={{ animationDelay: '2s' }}>
          <Rocket size={26} className="text-purple-500" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo with enhanced animation */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="h-32 md:h-40 w-auto relative">
                {/* Glow effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl rounded-full animate-pulse" />
                
                {/* Logo */}
                <img 
                  src="/assets/aurabytlogo.png"
                  alt="AuraByt Logo" 
                  className="h-full w-auto object-contain relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Rotating ring */}
                <div className="absolute inset-0 border-2 border-gradient-to-r from-primary/30 to-accent/30 rounded-full animate-spin opacity-20" style={{ animationDuration: '20s' }} />
              </div>
            </div>
          </div>
          
          {/* Main heading with enhanced typography */}
          <div className="mb-8 space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Aura
              </span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Byt
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-600">
              Empowering digital{' '}
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
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Toronto-based IT consultancy specializing in{' '}
            <span className="font-semibold text-primary">web development</span>,{' '}
            <span className="font-semibold text-accent">digital marketing</span>, and{' '}
            <span className="font-semibold text-purple-600">IT support</span>.{' '}
            We transform businesses through innovative digital solutions.
          </p>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/services" 
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center">
                Explore Our Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </span>
            </Link>
            
            <Link 
              to="/contact" 
              className="group px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm bg-white/50"
            >
              <span className="flex items-center">
                Get In Touch
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight size={20} />
                </span>
              </span>
            </Link>
          </div>
          
          {/* Stats or features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: '50+', label: 'Projects Completed', icon: <Rocket size={24} /> },
              { number: '99%', label: 'Client Satisfaction', icon: <Sparkles size={24} /> },
              { number: '24/7', label: 'Support Available', icon: <Zap size={24} /> }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:bg-white/80 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-center mb-3 text-primary group-hover:text-accent transition-colors duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;