import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hover = true,
  glow = false
}) => {
  return (
    <motion.div
      whileHover={hover ? { 
        scale: 1.02,
        rotateX: 5,
        rotateY: 5,
      } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "relative overflow-hidden rounded-3xl",
        "bg-white/5 backdrop-blur-xl border border-white/10",
        "shadow-2xl shadow-black/20",
        glow && "shadow-blue-500/20",
        "transform-gpu perspective-1000",
        className
      )}
      style={{
        background: `
          linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%),
          linear-gradient(45deg, rgba(59,130,246,0.1) 0%, rgba(147,51,234,0.1) 100%)
        `
      }}
    >
      {/* Animated border */}
      <div className="absolute inset-0 rounded-3xl">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-8">
        {children}
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse" />
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse delay-1000" />
    </motion.div>
  );
};