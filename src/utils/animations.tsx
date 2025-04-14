// src/utils/animations.tsx
import React, { useEffect, useRef, useState } from 'react';

// Helper to animate sections when they come into view
export const useScrollAnimation = (options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) => {
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, options);
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);
  
  return ref;
};

// Component that adds animated background elements to any section
export const AnimatedBackground: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="animated-bg animated-bg-1"></div>
      <div className="animated-bg animated-bg-2"></div>
      <div className="animated-bg animated-bg-3"></div>
      
      {/* Tech grid background */}
      <div className="tech-grid"></div>
      
      {children}
    </div>
  );
};

// Component that adds animated particles
export const ParticleBackground: React.FC = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number}>>([]);
  
  useEffect(() => {
    // Initialize particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 3,
      speed: 0.05 + Math.random() * 0.1
    }));
    setParticles(newParticles);

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
      cancelAnimationFrame(particleAnimationId);
    };
  }, []);

  return (
    <>
      {particles.map(particle => (
        <div 
          key={particle.id}
          className="particle"
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: 0.3 + Math.random() * 0.3
          }}
        />
      ))}
    </>
  );
};

// Component that adds digital rain effect
export const DigitalRain: React.FC<{opacity?: number}> = ({ opacity = 0.05 }) => {
  return (
    <div className="digital-rain-container" style={{ opacity }}>
      {[...Array(10)].map((_, i) => (
        <div 
          key={i}
          className="digital-rain"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 100}%`,
            animation: `digital-rain-fall ${15 + Math.random() * 10}s linear infinite`,
            animationDelay: `${i * 0.5}s`
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
  );
};

// Component that adds tech line animations
export const TechLines: React.FC = () => {
  return (
    <div className="tech-lines">
      {[...Array(5)].map((_, i) => (
        <div 
          key={i} 
          className="tech-line" 
          style={{
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );
};

// Hook to add mouse follower effect
export const useMouseFollower = () => {
  const mouseFollowerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return mouseFollowerRef;
};

// Add tilt effect to any element
export const useTiltEffect = () => {
  const tiltRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const tiltElement = tiltRef.current;
    if (!tiltElement) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = tiltElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const moveX = (x - centerX) / 20;
      const moveY = (y - centerY) / 20;
      
      requestAnimationFrame(() => {
        tiltElement.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg) translateZ(10px)`;
      });
    };
    
    const handleMouseLeave = () => {
      requestAnimationFrame(() => {
        tiltElement.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)`;
      });
    };
    
    tiltElement.addEventListener('mousemove', handleMouseMove);
    tiltElement.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      tiltElement.removeEventListener('mousemove', handleMouseMove);
      tiltElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return tiltRef;
};

// Component wrapper that adds a reveal animation
export const RevealWrapper: React.FC<{children: React.ReactNode, delay?: number}> = ({ children, delay = 0 }) => {
  const revealRef = useScrollAnimation();
  
  return (
    <div 
      ref={revealRef as React.RefObject<HTMLDivElement>} 
      className="reveal-section"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};