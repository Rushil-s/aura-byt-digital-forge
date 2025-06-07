import React, { useEffect, useRef } from 'react';

interface SpiralBackgroundProps {
  totalDots?: number;
  dotRadius?: number;
  duration?: number;
  dotColor?: string;
  opacity?: number;
  className?: string;
}

const SpiralBackground: React.FC<SpiralBackgroundProps> = ({
  totalDots = 300,
  dotRadius = 1,
  duration = 8,
  dotColor = 'hsl(217, 91%, 60%)',
  opacity = 0.15,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const svg = svgRef.current;
    const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
    
    // Responsive sizing
    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const CENTER = size / 2;
      const MAX_RADIUS = CENTER * 0.8;
      const svgNS = "http://www.w3.org/2000/svg";

      // Update SVG dimensions
      svg.setAttribute('width', size.toString());
      svg.setAttribute('height', size.toString());
      svg.setAttribute('viewBox', `0 0 ${size} ${size}`);

      // Clear existing content
      svg.innerHTML = '';

      // Generate dots
      for (let i = 0; i < totalDots; i++) {
        const idx = i + 0.5;
        const frac = idx / totalDots;
        const r = Math.sqrt(frac) * MAX_RADIUS;
        const theta = idx * GOLDEN_ANGLE;
        const x = CENTER + r * Math.cos(theta);
        const y = CENTER + r * Math.sin(theta);

        const circle = document.createElementNS(svgNS, "circle");
        circle.setAttribute("cx", x.toString());
        circle.setAttribute("cy", y.toString());
        circle.setAttribute("r", dotRadius.toString());
        circle.setAttribute("fill", dotColor);
        circle.setAttribute("opacity", (opacity * 0.6).toString());
        svg.appendChild(circle);

        // Subtle pulse animation
        const animR = document.createElementNS(svgNS, "animate");
        animR.setAttribute("attributeName", "r");
        animR.setAttribute("values", `${dotRadius * 0.8};${dotRadius * 1.2};${dotRadius * 0.8}`);
        animR.setAttribute("dur", `${duration}s`);
        animR.setAttribute("begin", `${frac * duration * 0.5}s`);
        animR.setAttribute("repeatCount", "indefinite");
        animR.setAttribute("calcMode", "spline");
        animR.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
        circle.appendChild(animR);

        // Subtle opacity animation
        const animO = document.createElementNS(svgNS, "animate");
        animO.setAttribute("attributeName", "opacity");
        animO.setAttribute("values", `${opacity * 0.3};${opacity * 0.8};${opacity * 0.3}`);
        animO.setAttribute("dur", `${duration}s`);
        animO.setAttribute("begin", `${frac * duration * 0.5}s`);
        animO.setAttribute("repeatCount", "indefinite");
        animO.setAttribute("calcMode", "spline");
        animO.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
        circle.appendChild(animO);
      }
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [totalDots, dotRadius, duration, dotColor, opacity]);

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          ref={svgRef}
          className="absolute"
          style={{ 
            filter: 'blur(0.5px)',
            mixBlendMode: 'screen'
          }}
        />
      </div>
    </div>
  );
};

export { SpiralBackground };