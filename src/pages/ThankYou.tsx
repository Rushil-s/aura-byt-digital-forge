import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Confetti from 'react-confetti';
import { useWindowSize } from '@/hooks/useWindowSize';

const ThankYou = () => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const rotatingMessages = [
    "We’ve received your message.",
    "We’re reviewing it carefully.",
    "You’ll hear from us shortly.",
    "Redirecting you back home..."
  ];

  // ✅ Protect direct access
  useEffect(() => {
    if (!location.state?.fromContactForm) {
      navigate('/', { replace: true });
    }
  }, [location, navigate]);

  // ✅ Confetti & auto-return
  useEffect(() => {
    const confettiTimer = setTimeout(() => setShowConfetti(false), 10000);
    const redirectTimer = setTimeout(() => navigate('/', { replace: true }), 10000);
    return () => {
      clearTimeout(confettiTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  // ✅ Text animation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % rotatingMessages.length);
    }, 2500); // change message every 2.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative text-center px-4 overflow-hidden bg-background animate-fade-in">
      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[320px] h-[320px] top-1/3 left-1/2 -translate-x-1/2 rounded-full bg-aurabyt-purple/20 blur-3xl animate-pulse-slow" />
        <div className="absolute w-[280px] h-[280px] bottom-1/4 right-1/3 rounded-full bg-aurabyt-blue/20 blur-3xl animate-pulse-slow" />
      </div>

      {/* Confetti */}
      {showConfetti && width && height && (
        <Confetti width={width} height={height} numberOfPieces={200} />
      )}

      {/* Main Content */}
      <div className="relative z-10 max-w-xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary animate-bounce mb-4">
          Thank you!
        </h1>

        <p className="text-lg text-muted-foreground mb-6 transition-opacity duration-500 ease-in-out min-h-[2rem]">
          {rotatingMessages[currentMessageIndex]}
        </p>

        <Link to="/" className="btn-primary px-6 py-3 rounded-lg inline-block">
          Go Back Now
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;