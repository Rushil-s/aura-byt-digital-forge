import React, { useEffect, useRef } from 'react';

// Performance-optimized Animation Initializer
const AnimationInitializer: React.FC = () => {
  const isReducedMotion = useRef(false);
  const animationFrameRef = useRef<number>();
  const lastUpdateRef = useRef<number>(0);
  const mouseFollowerRef = useRef<HTMLDivElement | null>(null);
  
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
  
  // Optimized scroll animations with Intersection Observer
  useEffect(() => {
    if (isReducedMotion.current) return;
    
    const observerOptions = {
      threshold: [0.1],
      rootMargin: '50px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      // Batch DOM updates
      const visibleElements: Element[] = [];
      
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleElements.push(entry.target);
          observer.unobserve(entry.target);
        }
      });
      
      if (visibleElements.length > 0) {
        requestAnimationFrame(() => {
          visibleElements.forEach((el) => {
            el.classList.add('is-visible');
          });
        });
      }
    }, observerOptions);
    
    // Use more specific selectors to reduce the number of observed elements
    const elementsToAnimate = document.querySelectorAll(
      '.reveal-section, .service-card, .scroll-animate, .section-title'
    );
    
    elementsToAnimate.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Lightweight mouse follower with heavy throttling
  useEffect(() => {
    if (isReducedMotion.current) return;
    
    // Create mouse follower only once
    if (!mouseFollowerRef.current) {
      const mouseFollower = document.createElement('div');
      mouseFollower.className = 'mouse-follower';
      mouseFollower.style.cssText = `
        position: fixed;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
        pointer-events: none;
        transform: translate(-50%, -50%);
        z-index: -1;
        opacity: 0;
        transition: opacity 0.3s ease;
        will-change: transform;
      `;
      document.body.appendChild(mouseFollower);
      mouseFollowerRef.current = mouseFollower;
    }
    
    // Heavy throttling for mouse movement (limit to 30fps max)
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastUpdateRef.current < 33) return; // ~30fps
      
      lastUpdateRef.current = now;
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(() => {
        if (mouseFollowerRef.current) {
          mouseFollowerRef.current.style.opacity = '1';
          mouseFollowerRef.current.style.transform = `translate(${e.clientX - 50}px, ${e.clientY - 50}px)`;
        }
      });
    };
    
    // Use passive listeners and add debouncing
    let timeoutId: NodeJS.Timeout;
    const debouncedMouseMove = (e: MouseEvent) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => handleMouseMove(e), 16); // Debounce to ~60fps max
    };
    
    window.addEventListener('mousemove', debouncedMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', debouncedMouseMove);
      clearTimeout(timeoutId);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (mouseFollowerRef.current?.parentNode) {
        mouseFollowerRef.current.parentNode.removeChild(mouseFollowerRef.current);
        mouseFollowerRef.current = null;
      }
    };
  }, []);
  
  // Simplified and optimized tilt effect
  useEffect(() => {
    if (isReducedMotion.current) return;
    
    const cards = document.querySelectorAll('.tilt-card, .professional-card');
    const tiltHandlers = new WeakMap();
    
    cards.forEach((card) => {
      let isHovered = false;
      let tiltTimeout: NodeJS.Timeout;
      
      const handleMouseEnter = () => {
        isHovered = true;
      };
      
      const handleMouseMove = (e: Event) => {
        if (!isHovered) return;
        
        const mouseEvent = e as MouseEvent;
        clearTimeout(tiltTimeout);
        tiltTimeout = setTimeout(() => {
          const rect = card.getBoundingClientRect();
          const x = mouseEvent.clientX - rect.left;
          const y = mouseEvent.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          // Reduced intensity for smoother performance
          const moveX = (x - centerX) / 50;
          const moveY = (y - centerY) / 50;
          
          const inner = card.querySelector('.tilt-card-inner') as HTMLElement;
          const targetElement = inner || (card as HTMLElement);
          
          targetElement.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
        }, 20); // Increased debounce for better performance
      };
      
      const handleMouseLeave = () => {
        isHovered = false;
        clearTimeout(tiltTimeout);
        
        const inner = card.querySelector('.tilt-card-inner') as HTMLElement;
        const targetElement = inner || (card as HTMLElement);
        targetElement.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
      };
      
      // Store handlers for cleanup
      tiltHandlers.set(card, { handleMouseEnter, handleMouseMove, handleMouseLeave });
      
      card.addEventListener('mouseenter', handleMouseEnter, { passive: true });
      card.addEventListener('mousemove', handleMouseMove, { passive: true });
      card.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    });
    
    return () => {
      cards.forEach((card) => {
        const handlers = tiltHandlers.get(card);
        if (handlers) {
          card.removeEventListener('mouseenter', handlers.handleMouseEnter);
          card.removeEventListener('mousemove', handlers.handleMouseMove);
          card.removeEventListener('mouseleave', handlers.handleMouseLeave);
        }
      });
    };
  }, []);
  
  return null;
};

export default AnimationInitializer;