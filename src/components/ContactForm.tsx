// src/components/ContactForm.tsx
import React, { useState, useCallback, memo } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Memoize the handleChange function to prevent recreating it on every render
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: false }));
    }
  }, [formErrors]);

  // Memoize the validation function
  const validateForm = useCallback(() => {
    const errors = {
      name: formData.name.trim().length < 2,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: formData.message.trim().length < 10,
    };
    setFormErrors(errors);
    return !Object.values(errors).some(Boolean);
  }, [formData]);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      // Show success message
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
        duration: 5000,
      });
    }, 1500);
  }, [validateForm, toast]);

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
          className={`w-full px-4 py-3 rounded-lg border ${
            formErrors.name ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-primary/50`}
          placeholder="John Doe"
          aria-required="true"
          aria-invalid={formErrors.name}
          disabled={isSubmitting}
        />
        {formErrors.name && (
          <p className="mt-1 text-sm text-red-500" id="name-error" aria-live="polite">
            Please enter your name
          </p>
        )}
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
          className={`w-full px-4 py-3 rounded-lg border ${
            formErrors.email ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-primary/50`}
          placeholder="john.doe@example.com"
          aria-required="true"
          aria-invalid={formErrors.email}
          disabled={isSubmitting}
        />
        {formErrors.email && (
          <p className="mt-1 text-sm text-red-500" id="email-error" aria-live="polite">
            Please enter a valid email address
          </p>
        )}
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
          className={`w-full px-4 py-3 rounded-lg border ${
            formErrors.message ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[150px] resize-y`}
          placeholder="How can we help you?"
          aria-required="true"
          aria-invalid={formErrors.message}
          disabled={isSubmitting}
        />
        {formErrors.message && (
          <p className="mt-1 text-sm text-red-500" id="message-error" aria-live="polite">
            Please enter a message (min 10 characters)
          </p>
        )}
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary flex items-center justify-center"
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
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

// Memoize the entire component to prevent unnecessary re-renders
export default memo(ContactForm);