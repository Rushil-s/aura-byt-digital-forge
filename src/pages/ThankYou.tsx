// src/pages/ThankYou.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';

const ThankYou = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000); // stop after 5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 animate-fade-in">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Thank you!</h1>
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        We’ve received your message and will get back to you shortly.
      </p>
      <Link to="/" className="btn-primary px-6 py-3 rounded-lg">
        Go Back Home
      </Link>
    </div>
  );
};

export default ThankYou;