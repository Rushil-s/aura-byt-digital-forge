import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SchemaCardProps {
  className?: string;
  title?: string;
  description?: string;
  badge?: string;
  actionText?: string;
  statusText?: string;
}

export default function SchemaCard({ 
  className,
  title = "Schema Management",
  description = "Design, optimize and maintain your database structure with powerful schema tools.",
  badge = "Database",
  actionText = "Manage",
  statusText = "Live"
}: SchemaCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let time = 0;
    let animationId: number;
    
    const waveData = Array.from({ length: 8 }).map(() => ({
      value: Math.random() * 0.5 + 0.1,
      targetValue: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.02 + 0.01
    }));

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function updateWaveData() {
      waveData.forEach(data => {
        if (Math.random() < 0.01) data.targetValue = Math.random() * 0.7 + 0.1;
        const diff = data.targetValue - data.value;
        data.value += diff * data.speed;
      });
    }

    function draw() {
      if (!canvas || !ctx) return;
      
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      // Clear with dark background matching your theme
      ctx.fillStyle = 'hsl(222, 84%, 4.9%)'; // Your background color
      ctx.fillRect(0, 0, width, height);

      waveData.forEach((data, i) => {
        const freq = data.value * 7;
        ctx.beginPath();
        for (let x = 0; x < width; x++) {
          const nx = (x / width) * 2 - 1;
          const px = nx + i * 0.04 + freq * 0.03;
          const py = Math.sin(px * 10 + time) * Math.cos(px * 2) * freq * 0.1 * ((i + 1) / 8);
          const y = (py + 1) * height / 2;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        const intensity = Math.min(1, freq * 0.3);
        // Use your primary color (217 91% 60%)
        const hue = 217;
        const saturation = 91;
        const lightness = 60 + intensity * 20;
        ctx.lineWidth = 1 + i * 0.3;
        ctx.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.6)`;
        ctx.shadowColor = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.5)`;
        ctx.shadowBlur = 5;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
    }

    function animate() {
      time += 0.02;
      updateWaveData();
      draw();
      animationId = requestAnimationFrame(animate);
    }

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className={cn("relative w-full max-w-xs mx-auto", className)}>
      <div className="relative professional-card overflow-hidden rounded-2xl flex flex-col animate-float">
        <div className="p-6 flex justify-center relative">
          <div className="w-full h-48 rounded-xl border border-primary/30 overflow-hidden relative bg-background/50 backdrop-blur-sm">
            {/* Animated wave canvas */}
            <canvas 
              ref={canvasRef} 
              className="absolute inset-0 w-full h-full rounded-xl"
              style={{ width: '100%', height: '100%' }}
            />
            
            {/* Tech grid overlay matching your existing style */}
            <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />
            
            {/* Database schema visualization overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className="grid grid-cols-2 gap-2 text-xs text-primary">
                <div className="bg-primary/10 p-2 rounded border border-primary/30 backdrop-blur-sm">
                  <div className="font-mono font-semibold">users</div>
                  <div className="text-[10px] opacity-70">id, name, email</div>
                </div>
                <div className="bg-primary/10 p-2 rounded border border-primary/30 backdrop-blur-sm">
                  <div className="font-mono font-semibold">orders</div>
                  <div className="text-[10px] opacity-70">id, user_id, total</div>
                </div>
                <div className="bg-primary/10 p-2 rounded border border-primary/30 backdrop-blur-sm">
                  <div className="font-mono font-semibold">products</div>
                  <div className="text-[10px] opacity-70">id, name, price</div>
                </div>
                <div className="bg-primary/10 p-2 rounded border border-primary/30 backdrop-blur-sm">
                  <div className="font-mono font-semibold">analytics</div>
                  <div className="text-[10px] opacity-70">metrics, data</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="p-6">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-4 border border-primary/30">
            {badge}
          </span>
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>
          <div className="flex justify-between items-center">
            <button className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group/link">
              {actionText}
              <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <span className="text-muted-foreground text-xs px-3 py-1 rounded-full border border-border bg-card/50">
              {statusText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}