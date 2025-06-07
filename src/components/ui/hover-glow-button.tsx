import React, { useRef, useState, MouseEvent, ReactNode } from 'react';

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
}

const HoverButton: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  disabled = false,
  glowColor = 'hsl(217, 91%, 60%)',
  backgroundColor = 'hsl(var(--background))',
  textColor = 'hsl(var(--primary))',
  hoverTextColor = 'hsl(var(--primary-foreground))',
  href
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

  const commonProps = {
    ref: buttonRef as any,
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className: `
      relative inline-flex items-center justify-center px-8 py-4 border-2 border-primary
      cursor-pointer overflow-hidden transition-all duration-300 
      text-lg rounded-lg font-semibold backdrop-blur-sm
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}
      ${className}
    `,
    style: {
      backgroundColor: isHovered ? glowColor : backgroundColor,
      color: isHovered ? hoverTextColor : textColor,
      borderColor: glowColor,
    }
  };

  const glowElement = (
    <div
      className={`
        absolute w-[300px] h-[300px] rounded-full opacity-30 pointer-events-none 
        transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2
        ${isHovered ? 'scale-100' : 'scale-0'}
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
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a {...commonProps} href={href}>
        {content}
      </a>
    );
  }

  return (
    <button {...commonProps} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};

export { HoverButton };