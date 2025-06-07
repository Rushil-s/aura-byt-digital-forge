import React, { useState, useCallback, memo } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Send, User, Mail, MessageSquare, Loader2 } from 'lucide-react';

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

  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message sent!",
        description: "Redirecting...",
        duration: 3000,
      });

      const timer = setTimeout(() => {
        navigate("/thank-you", { state: { fromContactForm: true } });
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, navigate, toast]);

  return (
    <form onSubmit={handleSubmit} className="space-y-8" aria-label="Contact form">
      {/* Name Field */}
      <div className="space-y-3">
        <label htmlFor="name" className="flex items-center text-sm font-semibold text-foreground">
          <User size={16} className="mr-2 text-primary" />
          Your Name <span className="text-red-400 ml-1">*</span>
        </label>
        <div className="relative group">
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 bg-background/40 border border-border/50 rounded-lg 
                     text-foreground placeholder:text-muted-foreground
                     focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50
                     hover:border-primary/30 transition-all duration-300
                     backdrop-blur-sm"
            placeholder="Enter your full name"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>

      {/* Email Field */}
      <div className="space-y-3">
        <label htmlFor="email" className="flex items-center text-sm font-semibold text-foreground">
          <Mail size={16} className="mr-2 text-primary" />
          Email Address <span className="text-red-400 ml-1">*</span>
        </label>
        <div className="relative group">
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 bg-background/40 border border-border/50 rounded-lg 
                     text-foreground placeholder:text-muted-foreground
                     focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50
                     hover:border-primary/30 transition-all duration-300
                     backdrop-blur-sm"
            placeholder="your.email@example.com"
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Message Field */}
      <div className="space-y-3">
        <label htmlFor="message" className="flex items-center text-sm font-semibold text-foreground">
          <MessageSquare size={16} className="mr-2 text-primary" />
          Your Message <span className="text-red-400 ml-1">*</span>
        </label>
        <div className="relative group">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-4 bg-background/40 border border-border/50 rounded-lg 
                     text-foreground placeholder:text-muted-foreground
                     focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50
                     hover:border-primary/30 transition-all duration-300
                     backdrop-blur-sm resize-y min-h-[150px]"
            placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
          />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full relative group overflow-hidden rounded-lg bg-primary hover:bg-primary/90 
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]
                   shadow-lg hover:shadow-primary/25"
        >
          {/* Button glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Button content */}
          <div className="relative flex items-center justify-center px-8 py-4 text-primary-foreground font-semibold">
            {state.submitting ? (
              <>
                <Loader2 className="animate-spin mr-3 h-5 w-5" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Message</span>
              </>
            )}
          </div>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </button>
      </div>

      {/* Additional Info */}
      <div className="pt-4 border-t border-border/30">
        <div className="flex items-start space-x-3 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
          <p className="leading-relaxed">
            We typically respond within <span className="text-primary font-medium">24 hours</span>. 
            For urgent matters, please call us at{' '}
            <a href="tel:+14379252744" className="text-primary hover:text-primary/80 transition-colors font-medium">
              (437) 925-2744
            </a>
          </p>
        </div>
      </div>
    </form>
  );
};

export default memo(ContactForm);