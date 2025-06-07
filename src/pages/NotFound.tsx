import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";
import { HoverButton } from "@/components/ui/hover-glow-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 relative overflow-hidden">
      <SEO 
        title="Page Not Found - AuraByt"
        description="The page you were looking for could not be found. Navigate back to the AuraByt homepage."
        keywords="404, page not found, AuraByt, error page"
      />
      
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full" />
      </div>
      
      <div className="max-w-2xl w-full text-center relative z-10">
        <div className="relative">
          <div className="relative h-full rounded-xl border border-border/30 p-2">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={100}
              inactiveZone={0.05}
              borderWidth={2}
              movementDuration={2}
            />
            
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-border/30 bg-background/20 backdrop-blur-md p-12 shadow-sm text-center">
              {/* 404 Number */}
              <div className="mb-8">
                <div className="text-8xl md:text-9xl font-bold gradient-text mb-4">404</div>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
              </div>
              
              {/* Error Message */}
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Page Not Found
              </h1>
              
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                We're sorry, but the page you were looking for doesn't exist or has been moved. 
                Let's get you back on track.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <HoverButton
                  href="/"
                  variant="primary"
                  glowColor="hsl(217, 91%, 60%)"
                  className="shadow-lg hover:shadow-primary/25"
                >
                  <Home size={20} className="mr-3" />
                  Back to Home
                </HoverButton>
                
                <HoverButton
                  href="/services"
                  variant="secondary"
                  glowColor="hsl(217, 91%, 60%)"
                  className="shadow-lg"
                >
                  <Search size={20} className="mr-3" />
                  Browse Services
                </HoverButton>
              </div>
              
              {/* Additional Help */}
              <div className="mt-12 pt-8 border-t border-border/30">
                <p className="text-sm text-muted-foreground mb-4">
                  Need help finding something specific?
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <Link to="/about" className="text-primary hover:text-primary/80 transition-colors">
                    About Us
                  </Link>
                  <span className="text-border">•</span>
                  <Link to="/contact" className="text-primary hover:text-primary/80 transition-colors">
                    Contact Support
                  </Link>
                  <span className="text-border">•</span>
                  <a 
                    href="tel:+14379252744" 
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    (437) 925-2744
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;