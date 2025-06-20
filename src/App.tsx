import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimationInitializer from "./components/AnimationInitializer";
import ErrorBoundary from "./components/ErrorBoundary";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import Index from "./pages/Index";
import Services from "./pages/Services";
import ThankYou from "./pages/ThankYou";
import Careers from "./pages/Careers";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="loading-animation">
      <div></div><div></div><div></div><div></div>
    </div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log('Route changed to:', pathname);
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppRoutes = () => {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <AnimationInitializer />

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-20">
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { 
      staleTime: 5 * 60 * 1000, 
      retry: 1,
      refetchOnWindowFocus: false 
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Toaster />
      <Sonner />
      <Analytics />
      <SpeedInsights />
    </QueryClientProvider>
  );
};

export default App;
