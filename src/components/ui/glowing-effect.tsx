"use client";

import { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { animate } from "framer-motion";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 1,
    disabled = true,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>(0);
    const lastUpdateTime = useRef<number>(0);
    const isAnimating = useRef<boolean>(false);

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current || disabled) return;

        // Heavy throttling - limit to 20fps max for better performance
        const now = performance.now();
        if (now - lastUpdateTime.current < 50) return;
        
        // Skip if already animating to prevent queue buildup
        if (isAnimating.current) return;

        lastUpdateTime.current = now;

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current;
          if (!element) return;

          isAnimating.current = true;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e?.x ?? lastPosition.current.x;
          const mouseY = e?.y ?? lastPosition.current.y;

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY };
          }

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(
            mouseX - center[0],
            mouseY - center[1]
          );
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            isAnimating.current = false;
            return;
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          element.style.setProperty("--active", isActive ? "1" : "0");

          if (!isActive) {
            isAnimating.current = false;
            return;
          }

          const currentAngle =
            parseFloat(element.style.getPropertyValue("--start")) || 0;
          const targetAngle =
            (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
              Math.PI +
            90;

          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
          const newAngle = currentAngle + angleDiff;

          // Use reduced duration for snappier performance
          animate(currentAngle, newAngle, {
            duration: Math.min(movementDuration, 1), // Cap duration at 1s
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
              if (element) {
                element.style.setProperty("--start", String(value));
              }
            },
            onComplete: () => {
              isAnimating.current = false;
            },
          });
        });
      },
      [inactiveZone, proximity, movementDuration, disabled]
    );

    useEffect(() => {
      if (disabled) return;

      // Debounced handlers for better performance
      let scrollTimeout: NodeJS.Timeout;
      let moveTimeout: NodeJS.Timeout;

      const handleScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => handleMove(), 100); // Heavy debounce for scroll
      };

      const handlePointerMove = (e: PointerEvent) => {
        clearTimeout(moveTimeout);
        moveTimeout = setTimeout(() => handleMove(e), 25); // Debounce pointer events
      };

      // Use passive listeners for better scroll performance
      window.addEventListener("scroll", handleScroll, { passive: true });
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        clearTimeout(scrollTimeout);
        clearTimeout(moveTimeout);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener("scroll", handleScroll);
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled]);

    return (
      <>
        <div
          className={cn(
            "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",
            glow && "opacity-100",
            variant === "white" && "border-white",
            disabled && "!block"
          )}
        />
        <div
          ref={containerRef}
          style={
            {
              "--blur": `${blur}px`,
              "--spread": spread,
              "--start": "0",
              "--active": "0",
              "--glowingeffect-border-width": `${borderWidth}px`,
              "--repeating-conic-gradient-times": "5",
              "--gradient":
                variant === "white"
                  ? `repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  var(--black),
                  var(--black) calc(25% / var(--repeating-conic-gradient-times))
                )`
                  : `radial-gradient(circle, hsl(217, 91%, 60%) 10%, transparent 20%),
                radial-gradient(circle at 40% 40%, hsl(217, 91%, 70%) 5%, transparent 15%),
                radial-gradient(circle at 60% 60%, hsl(217, 91%, 50%) 10%, transparent 20%), 
                radial-gradient(circle at 40% 60%, hsl(217, 91%, 65%) 10%, transparent 20%),
                repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  hsl(217, 91%, 60%) 0%,
                  hsl(217, 91%, 70%) calc(25% / var(--repeating-conic-gradient-times)),
                  hsl(217, 91%, 50%) calc(50% / var(--repeating-conic-gradient-times)), 
                  hsl(217, 91%, 65%) calc(75% / var(--repeating-conic-gradient-times)),
                  hsl(217, 91%, 60%) calc(100% / var(--repeating-conic-gradient-times))
                )`,
            } as React.CSSProperties
          }
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity",
            glow && "opacity-100",
            blur > 0 && "blur-[var(--blur)] ",
            className,
            disabled && "!hidden"
          )}
        >
          <div
            className={cn(
              "glow",
              "rounded-[inherit]",
              'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
              "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
              "after:[background:var(--gradient)] after:[background-attachment:fixed]",
              "after:opacity-[var(--active)] after:transition-opacity after:duration-300",
              "after:[mask-clip:padding-box,border-box]",
              "after:[mask-composite:intersect]",
              "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
            )}
          />
        </div>
      </>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

export { GlowingEffect };