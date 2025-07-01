import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useWindowSize } from '@/hooks/useWindowSize';
import { CheckCircle, ArrowLeft, Home } from 'lucide-react';
import { HoverButton } from '@/components/ui/hover-glow-button';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const ThankYou = () => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const rotatingMessages = [
    "We've received your message.",
    "We're reviewing it carefully.",
    "You'll hear from us shortly.",
    "Thank you for choosing AuraByt!"
  ];

  // Protect direct access
  useEffect(() => {
    if (!location.state?.fromContactForm) {
      navigate('/', { replace: true });
    }
  }, [location, navigate]);

  // Confetti & auto-return
  useEffect(() => {
    const confettiTimer = setTimeout(() => setShowConfetti(false), 8000);
    const redirectTimer = setTimeout(() => navigate('/', { replace: true }), 15000);
    return () => {
      clearTimeout(confettiTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  // Text animation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % rotatingMessages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [rotatingMessages.length]);

  return (
    <div className="min-h-screen flex items-center justify-center relative text-center px-4 overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[320px] h-[320px] top-1/3 left-1/2 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-pulse-slow" />
        <div className="absolute w-[280px] h-[280px] bottom-1/4 right-1/3 rounded-full bg-primary/15 blur-3xl animate-pulse-slow" />
      </div>

      {/* Confetti */}
      {showConfetti && width && height && (
        <Confetti 
          width={width} 
          height={height} 
          numberOfPieces={150}
          recycle={false}
          colors={['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981']}
        />
      )}

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
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
              {/* Success Icon */}
              <div className="mb-8 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center border-2 border-green-500/20">
                  <CheckCircle size={48} className="text-green-500 animate-bounce" />
                </div>
              </div>

              {/* Thank You Message */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Thank You!</span>
              </h1>

              {/* Rotating Messages */}
              <div className="mb-8">
                <p className="text-xl text-muted-foreground transition-opacity duration-500 ease-in-out min-h-[2rem]">
                  {rotatingMessages[currentMessageIndex]}
                </p>
              </div>

              {/* Additional Info */}
              <div className="mb-10 p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="font-semibold mb-3">What happens next?</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    We'll review your message within 24 hours
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Our team will reach out to discuss your project
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    We'll provide a detailed proposal and timeline
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
                  Explore Services
                </HoverButton>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-border/30">
                <p className="text-sm text-muted-foreground">
                  Need immediate assistance? Call us at{' '}
                  <a 
                    href="tel:+14379252744" 
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    (437) 925-2744
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;