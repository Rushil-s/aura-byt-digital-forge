// src/components/LoaderOverlay.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const LoaderOverlay = ({ loading }: { loading: boolean }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden">
      {/* Background tech lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="tech-grid opacity-30" />
        <div className="absolute w-[300px] h-[300px] top-1/3 left-1/2 -translate-x-1/2 rounded-full bg-aurabyt-purple/20 blur-3xl animate-pulse" />
        <div className="absolute w-[250px] h-[250px] bottom-1/4 right-1/3 rounded-full bg-aurabyt-blue/20 blur-3xl animate-pulse-slow" />
      </div>

      {/* Animated logo or pulse */}
      <div className="z-10 flex flex-col items-center text-primary animate-fade-in">
        <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center animate-ping-slow">
          <span className="text-xl font-bold">⚡</span>
        </div>
        <p className="mt-4 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoaderOverlay;