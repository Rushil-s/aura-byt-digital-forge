import React, { useEffect, useRef, useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  connections: number[];
}

interface NeuralNetworkProps {
  className?: string;
  nodeCount?: number;
  animated?: boolean;
}

export const NeuralNetwork: React.FC<NeuralNetworkProps> = ({
  className = '',
  nodeCount = 50,
  animated = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current?.parentElement) {
        const rect = canvasRef.current.parentElement.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    // Initialize nodes
    nodesRef.current = Array.from({ length: nodeCount }, (_, i) => {
      const connections: number[] = [];
      const connectionCount = Math.floor(Math.random() * 3) + 1;
      
      for (let j = 0; j < connectionCount; j++) {
        const target = Math.floor(Math.random() * nodeCount);
        if (target !== i && !connections.includes(target)) {
          connections.push(target);
        }
      }

      return {
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        connections
      };
    });

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Draw connections
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
      ctx.lineWidth = 1;
      
      nodesRef.current.forEach(node => {
        node.connections.forEach(targetId => {
          const target = nodesRef.current[targetId];
          if (target) {
            const distance = Math.sqrt(
              Math.pow(target.x - node.x, 2) + Math.pow(target.y - node.y, 2)
            );
            
            if (distance < 150) {
              const opacity = 1 - (distance / 150);
              ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.3})`;
              
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(target.x, target.y);
              ctx.stroke();
            }
          }
        });
      });

      // Draw nodes
      nodesRef.current.forEach((node, i) => {
        const pulse = Math.sin(time * 0.01 + i * 0.1) * 0.5 + 0.5;
        const radius = 2 + pulse * 2;
        
        ctx.fillStyle = `rgba(59, 130, 246, ${0.6 + pulse * 0.4})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        ctx.shadowColor = '#3B82F6';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Animate node positions slightly
        if (animated) {
          node.x += Math.sin(time * 0.001 + i) * 0.1;
          node.y += Math.cos(time * 0.001 + i) * 0.1;
          
          // Keep nodes within bounds
          node.x = Math.max(10, Math.min(dimensions.width - 10, node.x));
          node.y = Math.max(10, Math.min(dimensions.height - 10, node.y));
        }
      });

      time++;
      if (animated) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, nodeCount, animated]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
};