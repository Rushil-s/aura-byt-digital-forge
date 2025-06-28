import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MorphingTextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

export const MorphingText: React.FC<MorphingTextProps> = ({
  texts,
  className = '',
  interval = 3000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ 
            opacity: 0, 
            y: 20,
            filter: 'blur(10px)',
            scale: 0.8
          }}
          animate={{ 
            opacity: 1, 
            y: 0,
            filter: 'blur(0px)',
            scale: 1
          }}
          exit={{ 
            opacity: 0, 
            y: -20,
            filter: 'blur(10px)',
            scale: 1.2
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible text for layout */}
      <span className="opacity-0 select-none">
        {texts.reduce((a, b) => a.length > b.length ? a : b)}
      </span>
    </div>
  );
};