// src/pages/ThankYou.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Thank you!</h1>
      <p className="text-lg text-gray-600 mb-8">
        We’ve received your message and will get back to you shortly.
      </p>
      <Link to="/" className="btn-primary px-6 py-3 rounded-lg">
        Go Back Home
      </Link>
    </div>
  );
};

export default ThankYou;