import { useEffect, useState } from 'react';

export const useParallaxShift = (intensity = 30) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setOffset({ x: 0, y: y / intensity });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [intensity]);

  return offset;
};