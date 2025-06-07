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
      
      // Clear with dark background
      ctx.fillStyle = 'rgba(15, 23, 42, 0.95)'; // slate-900 with opacity
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
        // Use your primary color (blue) with variations
        const r = 59 + intensity * 100;  // Primary blue variations
        const g = 130 + intensity * 100;
        const b = 246;
        ctx.lineWidth = 1 + i * 0.3;
        ctx.strokeStyle = `rgba(${r},${g},${b},0.6)`;
        ctx.shadowColor = `rgba(${r},${g},${b},0.5)`;
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
      <div className="relative card-border overflow-hidden rounded-2xl flex flex-col animate-float bg-card/80 backdrop-blur-sm border border-border shadow-2xl">
        <div className="p-4 flex justify-center relative">
          <div className="w-full h-48 rounded-xl gradient-border inner-glow overflow-hidden relative bg-slate-900/50">
            {/* Animated wave canvas */}
            <canvas 
              ref={canvasRef} 
              className="absolute inset-0 w-full h-full rounded-xl"
              style={{ width: '100%', height: '100%' }}
            />
            
            {/* Animated grid overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div 
                className="w-full h-full animate-pulse" 
                style={{ 
                  backgroundImage: 'linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px)', 
                  backgroundSize: '15px 15px' 
                }} 
              />
            </div>
            
            {/* Database schema visualization overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="grid grid-cols-2 gap-2 text-xs text-primary">
                <div className="bg-primary/20 p-2 rounded border border-primary/30">
                  <div className="font-mono">users</div>
                  <div className="text-[10px] opacity-70">id, name, email</div>
                </div>
                <div className="bg-primary/20 p-2 rounded border border-primary/30">
                  <div className="font-mono">orders</div>
                  <div className="text-[10px] opacity-70">id, user_id, total</div>
                </div>
                <div className="bg-primary/20 p-2 rounded border border-primary/30">
                  <div className="font-mono">products</div>
                  <div className="text-[10px] opacity-70">id, name, price</div>
                </div>
                <div className="bg-primary/20 p-2 rounded border border-primary/30">
                  <div className="font-mono">analytics</div>
                  <div className="text-[10px] opacity-70">metrics, data</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="p-4">
          <span className="inline-block px-3 py-1 glass text-primary rounded-full text-xs font-medium mb-3 border border-primary/30 bg-primary/10">
            {badge}
          </span>
          <h3 className="text-lg font-medium text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed text-xs">
            {description}
          </p>
          <div className="flex justify-between items-center">
            <button className="text-primary hover:text-primary/80 transition flex items-center text-xs font-medium glass px-3 py-1.5 rounded-lg border border-primary/30 bg-primary/5 hover:bg-primary/10">
              {actionText}
              <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <span className="text-muted-foreground text-xs glass px-2 py-1 rounded-full border border-border/50 bg-card/50">
              {statusText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}