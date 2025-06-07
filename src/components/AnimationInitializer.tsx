import React, { useEffect, useState, useRef } from 'react';

// Optimized Animation Initializer with performance improvements
const AnimationInitializer: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const lastUpdateRef = useRef<number>(0);
  const isReducedMotion = useRef(false);
  
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    isReducedMotion.current = mediaQuery.matches;
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotion.current = e.matches;
    };
    
    mediaQuery.addEventListener('change', handleMotionChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);
  
  useEffect(() => {
    if (isReducedMotion.current) return;
    
    // Create optimized mouse follower
    const mouseFollower = document.createElement('div');
    mouseFollower.className = 'mouse-follower';
    mouseFollower.style.cssText = `
      position: fixed;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.04) 50%, transparent 70%);
      pointer-events: none;
      transform: translate(-50%, -50%);
      z-index: -1;
      opacity: 0;
      transition: opacity 0.3s ease;
      will-change: transform;
    `;
    document.body.appendChild(mouseFollower);
    
    // Throttled mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastUpdateRef.current < 16) return; // Limit to ~60fps
      
      lastUpdateRef.current = now;
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(() => {
        const x = e.clientX;
        const y = e.clientY;
        
        setMousePos({ x, y });
        
        mouseFollower.style.opacity = '1';
        mouseFollower.style.transform = `translate(${x - 100}px, ${y - 100}px)`;
      });
    };
    
    // Passive event listener for better performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (mouseFollower && mouseFollower.parentNode) {
        mouseFollower.parentNode.removeChild(mouseFollower);
      }
    };
  }, []);
  
  // Optimized scroll animations with Intersection Observer
  useEffect(() => {
    if (isReducedMotion.current) return;
    
    const observerOptions = {
      threshold: [0.1, 0.3],
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame for smooth animations
          requestAnimationFrame(() => {
            entry.target.classList.add('is-visible');
          });
          
          // Unobserve after animation to improve performance
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Batch DOM queries for better performance
    const elementsToAnimate = document.querySelectorAll(
      '.reveal-section, .hover-card, .service-card, .scroll-animate, .section-title'
    );
    
    elementsToAnimate.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  // Optimized tilt effect with debouncing
  useEffect(() => {
    if (isReducedMotion.current) return;
    
    const cards = document.querySelectorAll('.tilt-card, .professional-card');
    let tiltTimeout: NodeJS.Timeout;
    
    const handleMouseMove = (e: MouseEvent, card: Element) => {
      if (tiltTimeout) clearTimeout(tiltTimeout);
      
      tiltTimeout = setTimeout(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const moveX = (x - centerX) / 30; // Reduced intensity
        const moveY = (y - centerY) / 30;
        
        const inner = card.querySelector('.tilt-card-inner') as HTMLElement;
        if (inner) {
          inner.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg) translateZ(5px)`;
        } else {
          (card as HTMLElement).style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg) translateZ(5px)`;
        }
      }, 10); // Debounce for smoother performance
    };
    
    const handleMouseLeave = (card: Element) => {
      if (tiltTimeout) clearTimeout(tiltTimeout);
      
      const inner = card.querySelector('.tilt-card-inner') as HTMLElement;
      if (inner) {
        inner.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)`;
      } else {
        (card as HTMLElement).style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)`;
      }
    };
    
    cards.forEach((card) => {
      const mouseMoveHandler = (e: Event) => handleMouseMove(e as MouseEvent, card);
      const mouseLeaveHandler = () => handleMouseLeave(card);
      
      card.addEventListener('mousemove', mouseMoveHandler, { passive: true });
      card.addEventListener('mouseleave', mouseLeaveHandler, { passive: true });
    });
    
    return () => {
      if (tiltTimeout) clearTimeout(tiltTimeout);
      cards.forEach((card) => {
        card.removeEventListener('mousemove', (e: Event) => handleMouseMove(e as MouseEvent, card));
        card.removeEventListener('mouseleave', () => handleMouseLeave(card));
      });
    };
  }, []);
  
  return null;
};

export default AnimationInitializer;