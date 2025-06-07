import React from 'react';
import { SpiralAnimation } from "@/components/ui/spiral-animation";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HoverButton } from '@/components/ui/hover-glow-button';
import SEO from '@/components/SEO';

const SpiralDemo = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <SEO 
        title="Spiral Animation Demo - AuraByt"
        description="Experience our mesmerizing spiral animation component showcasing advanced web development capabilities."
        keywords="spiral animation, web animation, interactive design, AuraByt demo"
      />
      
      {/* Navigation */}
      <div className="absolute top-8 left-8 z-50">
        <HoverButton
          href="/"
          variant="secondary"
          glowColor="hsl(217, 91%, 60%)"
          className="shadow-lg backdrop-blur-md"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </HoverButton>
      </div>

      {/* Demo Controls */}
      <div className="absolute top-8 right-8 z-50">
        <div className="bg-background/20 backdrop-blur-md rounded-lg p-4 border border-border/30">
          <h3 className="text-sm font-semibold mb-2 text-foreground">Animation Demo</h3>
          <p className="text-xs text-muted-foreground">Golden ratio spiral pattern</p>
        </div>
      </div>

      {/* Main Animation */}
      <div className="relative w-full h-screen">
        <SpiralAnimation 
          totalDots={600}
          size={Math.min(typeof window !== 'undefined' ? window.innerWidth * 0.8 : 600, 
                        typeof window !== 'undefined' ? window.innerHeight * 0.8 : 600, 
                        600)}
          dotRadius={2}
          duration={4}
          dotColor="hsl(217, 91%, 60%)"
          backgroundColor="hsl(var(--background))"
        />
      </div>

      {/* Info Panel */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-background/20 backdrop-blur-md rounded-lg p-6 border border-border/30 max-w-md text-center">
          <h2 className="text-lg font-bold mb-2 gradient-text">Spiral Animation</h2>
          <p className="text-sm text-muted-foreground mb-4">
            A mesmerizing golden ratio spiral pattern with synchronized pulsing animations.
          </p>
          <div className="flex gap-4 justify-center text-xs text-muted-foreground">
            <span>600 dots</span>
            <span>•</span>
            <span>Golden ratio</span>
            <span>•</span>
            <span>SVG animation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpiralDemo;