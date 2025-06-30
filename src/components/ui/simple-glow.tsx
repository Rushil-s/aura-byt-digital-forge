import { cn } from "@/lib/utils";

interface SimpleGlowProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  disabled?: boolean;
}

export function SimpleGlow({ 
  children, 
  className, 
  glowColor = "hsl(217, 91%, 60%)", 
  disabled = false 
}: SimpleGlowProps) {
  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div 
      className={cn(
        "relative group",
        className
      )}
    >
      {/* Simple CSS-only glow effect */}
      <div 
        className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
          filter: "blur(8px)",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}