
import { useEffect } from 'react';

export const useParallaxMouse = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        const cards = document.querySelectorAll('.parallax-card');
        cards.forEach((card: Element) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const moveX = (x - centerX) / 20;
          const moveY = (y - centerY) / 20;
          
          const inner = card.querySelector('.parallax-card-inner') as HTMLElement;
          if (inner && rect.top < window.innerHeight && rect.bottom > 0) {
            inner.style.transform = `rotateY(${moveX}deg) rotateX(${-moveY}deg) translateZ(10px)`;
          }
        });
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
};
