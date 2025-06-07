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
import { validateLinks } from "./utils/linkChecker";

import Index from "./pages/Index";
import ThankYou from "./pages/ThankYou";

const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div className="animated-bg animated-bg-1"></div>
    <div className="animated-bg animated-bg-2"></div>
    <div className="relative z-10">
      <div className="loading-animation">
        <div></div><div></div><div></div><div></div>
      </div>
      <div className="mt-4 text-center">
        <div className="h-4 w-32 bg-primary/20 rounded animate-pulse mx-auto"></div>
      </div>
    </div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageTransitions = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.body.classList.add("page-transition");
    const timer = setTimeout(() => {
      document.body.classList.remove("page-transition");
      requestAnimationFrame(() => {
        const scrollAnimateElements = document.querySelectorAll(".scroll-animate");
        scrollAnimateElements.forEach((el) => el.classList.add("is-visible"));
      });
    }, 500);
    return () => clearTimeout(timer);
  }, [pathname]);
  return null;
};

const AppRoutes = () => {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Validate links on app load
    const linkValidation = validateLinks();
    if (!linkValidation.allLinksValid) {
      console.warn('Some links may be broken. Check console for details.');
    }
  }, []);

  useEffect(() => {
    // Start a timer — show loader only after delay (e.g., 250ms)
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 250);

    // Clear loader after 1s max (or when component mounts)
    const stopTimer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(stopTimer);
    };
  }, [location.pathname]);

  return (
    <ErrorBoundary>
      <ScrollToTop />
      <PageTransitions />
      <AnimationInitializer />

      <div className="min-h-screen flex flex-col relative">
        <div className="fixed inset-0 pointer-events-none">
          {/* Background tech grid */}
        </div>

        <Navbar />
        <main className="flex-grow pt-20">
          <Suspense fallback={<PageLoader />}>
            <Routes location={location}>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
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