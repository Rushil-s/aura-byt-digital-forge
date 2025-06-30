import React, { useEffect, useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface LightweightNavBarProps {
  items: NavItem[];
  className?: string;
}

export function LightweightNavBar({ items, className }: LightweightNavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Memoize active item to prevent unnecessary re-renders
  const activeItem = useMemo(() => {
    return items.find(item => item.url === location.pathname) || items[0];
  }, [location.pathname, items]);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" 
          : "bg-background/80 backdrop-blur-sm",
        className,
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo - Simplified */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 transition-colors duration-200 hover:bg-primary/20">
                <img
                  src="/assets/aurabytlogo.png"
                  alt="AuraByt Logo"
                  className="w-6 h-6 lg:w-8 lg:h-8 object-contain"
                  loading="eager"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg lg:text-xl gradient-text">
                AuraByt
              </span>
              <span className="text-xs text-muted-foreground -mt-1 hidden sm:block">
                IT Consultancy
              </span>
            </div>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex">
            <div className="flex items-center gap-1 bg-background/50 border border-border/50 backdrop-blur-sm py-1 px-1 rounded-full shadow-sm">
              {items.map((item) => {
                const isActive = activeItem.name === item.name;

                return (
                  <Link
                    key={item.name}
                    to={item.url}
                    className={cn(
                      "relative cursor-pointer text-sm font-medium px-6 py-3 rounded-full transition-all duration-200",
                      "hover:text-foreground",
                      isActive 
                        ? "text-primary bg-primary/10 border border-primary/20" 
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Navigation - Mobile */}
          <nav className="lg:hidden">
            <div className="flex items-center gap-1 bg-background/50 border border-border/50 backdrop-blur-sm py-1 px-1 rounded-full shadow-sm">
              {items.slice(0, 4).map((item) => {
                const Icon = item.icon;
                const isActive = activeItem.name === item.name;

                return (
                  <Link
                    key={item.name}
                    to={item.url}
                    className={cn(
                      "relative cursor-pointer p-2 rounded-full transition-all duration-200",
                      "hover:text-foreground",
                      isActive 
                        ? "text-primary bg-primary/10 border border-primary/20" 
                        : "text-muted-foreground"
                    )}
                    aria-label={item.name}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}