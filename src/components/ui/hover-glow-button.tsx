import React, { useRef, useState, MouseEvent, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  glowColor?: string;
  backgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  href?: string;
  variant?: 'primary' | 'secondary';
}

const HoverButton: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  disabled = false,
  glowColor = 'hsl(217, 91%, 60%)',
  backgroundColor = 'hsl(217, 91%, 60%)',
  textColor = 'hsl(var(--primary-foreground))',
  hoverTextColor = 'hsl(var(--primary-foreground))',
  href,
  variant = 'primary'
}) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setGlowPosition({ x, y });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Determine styles based on variant
  const getVariantStyles = () => {
    if (variant === 'secondary') {
      return {
        backgroundColor: isHovered ? glowColor : 'transparent',
        color: isHovered ? hoverTextColor : glowColor,
        borderColor: glowColor,
      };
    }
    
    // Primary variant
    return {
      backgroundColor: isHovered ? `hsl(217, 91%, 70%)` : backgroundColor,
      color: textColor,
      borderColor: glowColor,
    };
  };

  const commonProps = {
    ref: buttonRef as any,
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className: `
      relative inline-flex items-center justify-center px-8 py-4 
      border-2 cursor-pointer overflow-hidden transition-all duration-300 
      text-lg rounded-lg font-semibold backdrop-blur-sm
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95 hover:shadow-xl'}
      ${className}
    `,
    style: getVariantStyles()
  };

  const glowElement = (
    <div
      className={`
        absolute rounded-full pointer-events-none 
        transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2
        ${isHovered ? 'w-[200px] h-[200px] opacity-40' : 'w-0 h-0 opacity-0'}
      `}
      style={{
        left: `${glowPosition.x}px`,
        top: `${glowPosition.y}px`,
        background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
        zIndex: 0,
      }}
    />
  );

  const content = (
    <>
      {glowElement}
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link to={href} {...commonProps}>
        {content}
      </Link>
    );
  }

  return (
    <button {...commonProps} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};

export { HoverButton };