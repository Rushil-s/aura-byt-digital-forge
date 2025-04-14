// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Create a loading component for Suspense
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse flex space-x-4">
      <div className="h-12 w-12 bg-primary/20 rounded-full"></div>
      <div className="space-y-4">
        <div className="h-4 w-32 bg-primary/20 rounded"></div>
        <div className="h-4 w-24 bg-primary/20 rounded"></div>
      </div>
    </div>
  </div>
);

// Create a component for the ScrollToTop behavior
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Create a component for page transitions
const PageTransitions = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Add animations for page transitions
    document.body.classList.add('page-transition');
    
    const timer = setTimeout(() => {
      document.body.classList.remove('page-transition');
      
      // Ensure all sections are visible on page load with improved performance
      requestAnimationFrame(() => {
        const scrollAnimateElements = document.querySelectorAll('.scroll-animate');
        scrollAnimateElements.forEach(el => {
          el.classList.add('is-visible');
        });
      });
    }, 500);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

// Create a persistent query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <PageTransitions />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-20 animate-fade-in">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
