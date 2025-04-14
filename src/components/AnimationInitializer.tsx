// src/components/AnimationInitializer.tsx
import React, { useEffect, useState } from 'react';

// This component handles global animation effects
const AnimationInitializer: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Create the mouse follower element
    const mouseFollower = document.createElement('div');
    mouseFollower.className = 'mouse-follower';
    document.body.appendChild(mouseFollower);
    
    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Update state for React-based animations
      setMousePos({ x, y });
      
      // Update follower position with requestAnimationFrame for performance
      requestAnimationFrame(() => {
        mouseFollower.style.opacity = '1';
        mouseFollower.style.left = `${x}px`;
        mouseFollower.style.top = `${y}px`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initialize tech lines
    initTechLines();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (mouseFollower && mouseFollower.parentNode) {
        mouseFollower.parentNode.removeChild(mouseFollower);
      }
    };
  }, []);
  
  // Initialize tech line animations for a tech company feel
  const initTechLines = () => {
    const techLines = document.createElement('div');
    techLines.className = 'tech-lines';
    document.body.appendChild(techLines);
    
    // Create multiple lines with different animation delays
    for (let i = 0; i < 5; i++) {
      const line = document.createElement('div');
      line.className = 'tech-line';
      line.style.top = `${Math.random() * 100}%`;
      line.style.animationDelay = `${i * 1.5}s`;
      line.style.animationDuration = `${8 + Math.random() * 4}s`;
      techLines.appendChild(line);
    }
  };
  
  // Initialize scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    // Target all elements that should animate on scroll
    document.querySelectorAll('.reveal-section, .hover-card, .service-card, .scroll-animate').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.reveal-section, .hover-card, .service-card, .scroll-animate').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  // Add tilt effect to cards
  useEffect(() => {
    const cards = document.querySelectorAll('.tilt-card');
    
    const handleMouseMove = (e: MouseEvent, card: Element) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const moveX = (x - centerX) / 20;
      const moveY = (y - centerY) / 20;
      
      const inner = card.querySelector('.tilt-card-inner') as HTMLElement;
      if (inner) {
        inner.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg) translateZ(10px)`;
      }
    };
    
    const handleMouseLeave = (card: Element) => {
      const inner = card.querySelector('.tilt-card-inner') as HTMLElement;
      if (inner) {
        inner.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)`;
      }
    };
    
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => handleMouseMove(e as MouseEvent, card));
      card.addEventListener('mouseleave', () => handleMouseLeave(card));
    });
    
    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', (e) => handleMouseMove(e as MouseEvent, card));
        card.removeEventListener('mouseleave', () => handleMouseLeave(card));
      });
    };
  }, []);
  
  return null; // This component doesn't render anything visible
};

export default AnimationInitializer;