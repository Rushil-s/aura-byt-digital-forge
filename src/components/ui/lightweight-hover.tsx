import React, { memo } from 'react';
import { cn } from '@/lib/utils';

interface LightweightHoverProps {
  children: React.ReactNode;
  className?: string;
  hoverClassName?: string;
  disabled?: boolean;
}

export const LightweightHover = memo(({
  children,
  className,
  hoverClassName = "hover:shadow-lg hover:scale-[1.02]",
  disabled = false
}: LightweightHoverProps) => {
  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div 
      className={cn(
        "transition-all duration-200 ease-out",
        hoverClassName,
        className
      )}
    >
      {children}
    </div>
  );
});

LightweightHover.displayName = "LightweightHover";