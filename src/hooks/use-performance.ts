import { useState, useEffect, useCallback } from 'react';

interface PerformanceSettings {
  reduceAnimations: boolean;
  optimizeImages: boolean;
  enableLazyLoading: boolean;
  reducedEffects: boolean;
  enableCaching: boolean;
  connection: 'slow' | 'fast' | 'unknown';
}

export const usePerformanceOptimization = (): PerformanceSettings => {
  const [settings, setSettings] = useState<PerformanceSettings>({
    reduceAnimations: false,
    optimizeImages: true,
    enableLazyLoading: true,
    reducedEffects: false,
    enableCaching: true,
    connection: 'unknown'
  });

  const detectConnectionSpeed = useCallback(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check for save data preference
    const prefersReducedData = (navigator as any)?.connection?.saveData || false;
    
    // Check connection type
    const connection = (navigator as any)?.connection;
    let connectionSpeed: 'slow' | 'fast' | 'unknown' = 'unknown';
    
    if (connection) {
      const effectiveType = connection.effectiveType;
      if (effectiveType === 'slow-2g' || effectiveType === '2g') {
        connectionSpeed = 'slow';
      } else if (effectiveType === '3g' || effectiveType === '4g') {
        connectionSpeed = 'fast';
      }
    }

    // Detect device performance
    const isLowEndDevice = navigator.hardwareConcurrency <= 2 || 
                          (navigator as any)?.deviceMemory <= 2;

    return {
      reduceAnimations: prefersReducedMotion || prefersReducedData || isLowEndDevice,
      optimizeImages: true,
      enableLazyLoading: true,
      reducedEffects: prefersReducedData || isLowEndDevice || connectionSpeed === 'slow',
      enableCaching: true,
      connection: connectionSpeed
    };
  }, []);

  useEffect(() => {
    // Initial performance detection
    const detected = detectConnectionSpeed();
    setSettings(detected);

    // Listen for connection changes
    const handleConnectionChange = () => {
      const updated = detectConnectionSpeed();
      setSettings(updated);
    };

    // Listen for reduced motion changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({
        ...prev,
        reduceAnimations: e.matches || prev.reducedEffects
      }));
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleReducedMotionChange);
    } else {
      // Fallback for older browsers
      (mediaQuery as any).addListener(handleReducedMotionChange);
    }

    // Listen for connection changes if available
    if ((navigator as any)?.connection) {
      (navigator as any).connection.addEventListener('change', handleConnectionChange);
    }

    // Memory cleanup
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleReducedMotionChange);
      } else {
        (mediaQuery as any).removeListener(handleReducedMotionChange);
      }
      
      if ((navigator as any)?.connection) {
        (navigator as any).connection.removeEventListener('change', handleConnectionChange);
      }
    };
  }, [detectConnectionSpeed]);

  return settings;
};

// Performance optimization utilities
export const createOptimizedImageUrl = (url: string, width?: number, quality: number = 80): string => {
  // For Unsplash images, add optimization parameters
  if (url.includes('unsplash.com')) {
    const separator = url.includes('?') ? '&' : '?';
    let optimizedUrl = `${url}${separator}auto=format&q=${quality}`;
    if (width) {
      optimizedUrl += `&w=${width}`;
    }
    return optimizedUrl;
  }
  return url;
};

export const useIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });
    
    setObserver(obs);
    
    return () => obs.disconnect();
  }, [callback, options]);

  return observer;
};

// Debounce utility for performance
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Memory usage monitoring
export const useMemoryMonitor = () => {
  const [memoryInfo, setMemoryInfo] = useState<any>(null);

  useEffect(() => {
    const updateMemoryInfo = () => {
      if ((performance as any)?.memory) {
        setMemoryInfo({
          usedJSHeapSize: (performance as any).memory.usedJSHeapSize,
          totalJSHeapSize: (performance as any).memory.totalJSHeapSize,
          jsHeapSizeLimit: (performance as any).memory.jsHeapSizeLimit
        });
      }
    };

    updateMemoryInfo();
    const interval = setInterval(updateMemoryInfo, 5000);

    return () => clearInterval(interval);
  }, []);

  return memoryInfo;
};