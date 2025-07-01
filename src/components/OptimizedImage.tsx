import React, { useState, useRef, useEffect } from 'react';
import { usePerformanceOptimization, createOptimizedImageUrl } from '@/hooks/use-performance';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  quality?: number;
  priority?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  quality = 80,
  priority = false,
  placeholder,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const performance = usePerformanceOptimization();

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !performance.enableLazyLoading) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const currentRef = imgRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [priority, performance.enableLazyLoading]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Optimize image URL based on performance settings
  const optimizedSrc = React.useMemo(() => {
    if (!performance.optimizeImages) return src;
    
    const targetWidth = performance.connection === 'slow' ? 
      Math.min(width || 800, 800) : width;
    
    const targetQuality = performance.connection === 'slow' ? 
      Math.min(quality, 60) : quality;
    
    return createOptimizedImageUrl(src, targetWidth, targetQuality);
  }, [src, width, quality, performance.optimizeImages, performance.connection]);

  // Generate responsive srcSet for better performance
  const generateSrcSet = () => {
    if (!performance.optimizeImages || !src.includes('unsplash.com')) {
      return undefined;
    }

    const sizes = [400, 800, 1200, 1600];
    return sizes
      .map(size => `${createOptimizedImageUrl(src, size, quality)} ${size}w`)
      .join(', ');
  };

  const generateSizes = () => {
    if (!width) return undefined;
    return `(max-width: 768px) 100vw, (max-width: 1024px) 50vw, ${width}px`;
  };

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder/Loading state */}
      {(!isLoaded || !isInView) && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-muted/20 to-muted/40 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          {placeholder ? (
            <img 
              src={placeholder} 
              alt="" 
              className="w-full h-full object-cover opacity-50 blur-sm"
              loading="eager"
            />
          ) : (
            <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          )}
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-muted/20 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="text-2xl mb-2">⚠️</div>
            <div className="text-sm">Failed to load image</div>
          </div>
        </div>
      )}

      {/* Main image - only render when in view */}
      {isInView && !hasError && (
        <img
          src={optimizedSrc}
          srcSet={generateSrcSet()}
          sizes={generateSizes()}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            // Ensure image dimensions for layout stability
            aspectRatio: width && height ? `${width} / ${height}` : undefined,
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;