// src/components/ContactForm.tsx
import React, { useState, useCallback, memo } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xeoadaga");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  // Show toast once after successful submission
  if (state.succeeded) {
    toast({
      title: "Message sent!",
      description: "Redirecting...",
      duration: 3000,
    });
  
    setTimeout(() => {
      navigate("/thank-you");
    }, 1500);
  }   

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
      <div>
        <label htmlFor="name" className="block mb-2 font-medium">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 font-medium">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="john.doe@example.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 font-medium">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[150px] resize-y"
          placeholder="How can we help you?"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full btn-primary flex items-center justify-center"
        aria-busy={state.submitting}
      >
        {state.submitting ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          <span>Send Message</span>
        )}
      </button>
    </form>
  );
};

export default memo(ContactForm);