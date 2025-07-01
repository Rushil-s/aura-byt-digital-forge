import { useState, useEffect, Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import { TubelightTopNavBarDemo } from "./components/ui/tubelight-navbar-top-demo";
import ErrorBoundary from "./components/ErrorBoundary";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { usePerformanceOptimization } from "./hooks/use-performance";

// Optimized imports - eager load critical pages
import Index from "./pages/Index";
import Services from "./pages/Services";
import ThankYou from "./pages/ThankYou";
import Careers from "./pages/Careers";

// Lazy load non-critical pages with performance-aware loading
const About = lazy(() => 
  import("./pages/About").then(module => {
    // Preload next likely page after About
    import("./pages/Contact");
    return module;
  })
);

const Contact = lazy(() => 
  import("./pages/Contact").then(module => {
    // Preload related pages
    import("./pages/Services");
    return module;
  })
);

const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PortfolioPage = lazy(() => 
  import("./pages/PortfolioPage").then(module => {
    // Preload Contact page as users often navigate there after viewing portfolio
    import("./pages/Contact");
    return module;
  })
);

// Enhanced loading component with performance considerations
const PageLoader = () => {
  const performance = usePerformanceOptimization();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className={`w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto ${
          performance.reduceAnimations ? '' : 'animate-spin'
        }`}></div>
        <div className="text-sm text-muted-foreground">Loading...</div>
      </div>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Use requestAnimationFrame for smoother scrolling
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // Instant scroll for better performance
      });
    });
  }, [pathname]);
  
  return null;
};

// Performance-optimized route preloading
const useRoutePreloading = () => {
  useEffect(() => {
    // Preload critical routes after initial load
    const preloadRoutes = () => {
      const routes = [
        () => import("./pages/About"),
        () => import("./pages/Contact"),
        () => import("./pages/PortfolioPage")
      ];

      // Stagger preloading to avoid blocking main thread
      routes.forEach((route, index) => {
        setTimeout(() => {
          route().catch(() => {
            // Fail silently - preloading is an optimization
          });
        }, (index + 1) * 2000);
      });
    };

    // Only preload on fast connections and when page is visible
    if (!document.hidden && 
        (navigator as any)?.connection?.effectiveType !== 'slow-2g' &&
        (navigator as any)?.connection?.effectiveType !== '2g') {
      
      // Wait for initial render to complete
      setTimeout(preloadRoutes, 3000);
    }
  }, []);
};

const AppRoutes = () => {
  const performanceSettings = usePerformanceOptimization();
  
  // Preload routes for better performance
  useRoutePreloading();

  return (
    <ErrorBoundary>
      <ScrollToTop />

      <div className="min-h-screen flex flex-col bg-background">
        <TubelightTopNavBarDemo />
        
        <main className="flex-grow pt-16 lg:pt-20">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

// Optimized QueryClient configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { 
      staleTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      gcTime: 15 * 60 * 1000, // 15 minutes (renamed from cacheTime)
    },
    mutations: {
      retry: 1,
    }
  },
});

// Performance monitoring component
const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'measure') {
          console.log(`Performance: ${entry.name} took ${entry.duration}ms`);
        }
      }
    });

    observer.observe({ entryTypes: ['measure', 'navigation'] });

    // Monitor memory usage (if available)
    if ((performance as any)?.memory) {
      const logMemory = () => {
        const memory = (performance as any).memory;
        const usedMB = Math.round(memory.usedJSHeapSize / 1048576);
        const limitMB = Math.round(memory.jsHeapSizeLimit / 1048576);
        
        if (usedMB > limitMB * 0.8) {
          console.warn(`High memory usage: ${usedMB}MB / ${limitMB}MB`);
        }
      };

      const memoryInterval = setInterval(logMemory, 30000); // Check every 30 seconds

      return () => {
        observer.disconnect();
        clearInterval(memoryInterval);
      };
    }

    return () => observer.disconnect();
  }, []);

  return null;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // App initialization with performance tracking
  useEffect(() => {
    const initApp = async () => {
      // Mark when app starts loading
      performance.mark('app-init-start');
      
      // Simulate any initialization work
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Mark when app finishes loading
      performance.mark('app-init-end');
      performance.measure('app-init-duration', 'app-init-start', 'app-init-end');
      
      setIsLoading(false);
    };

    initApp();
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
        <PerformanceMonitor />
      </BrowserRouter>
      <Toaster />
      <Sonner />
      {/* Load analytics components last to avoid blocking */}
      <Analytics />
      <SpeedInsights />
    </QueryClientProvider>
  );
};

export default App;