import { useEffect, useState } from 'react';

interface PerformanceSettings {
  reduceAnimations: boolean;
  disableParallax: boolean;
  reducedMotion: boolean;
  lowEndDevice: boolean;
}

export const usePerformanceOptimization = (): PerformanceSettings => {
  const [settings, setSettings] = useState<PerformanceSettings>({
    reduceAnimations: false,
    disableParallax: false,
    reducedMotion: false,
    lowEndDevice: false,
  });

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reducedMotion = mediaQuery.matches;

    // Detect device performance characteristics
    const detectLowEndDevice = () => {
      // Check for hardware concurrency (CPU cores)
      const cores = navigator.hardwareConcurrency || 1;
      
      // Check for device memory (if available)
      const memory = (navigator as any).deviceMemory || 4; // Default to 4GB if unknown
      
      // Check connection type
      const connection = (navigator as any).connection;
      const slowConnection = connection && 
        (connection.effectiveType === 'slow-2g' || 
         connection.effectiveType === '2g' || 
         connection.effectiveType === '3g');

      // Consider device low-end if:
      // - Less than 4 CPU cores, OR
      // - Less than 4GB RAM, OR
      // - Slow network connection
      return cores < 4 || memory < 4 || slowConnection;
    };

    const lowEndDevice = detectLowEndDevice();

    setSettings({
      reduceAnimations: reducedMotion || lowEndDevice,
      disableParallax: reducedMotion || lowEndDevice,
      reducedMotion,
      lowEndDevice,
    });

    // Listen for changes in reduced motion preference
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setSettings(prev => ({
        ...prev,
        reducedMotion: e.matches,
        reduceAnimations: e.matches || prev.lowEndDevice,
        disableParallax: e.matches || prev.lowEndDevice,
      }));
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return settings;
};