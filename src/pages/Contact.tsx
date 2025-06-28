import React, { useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, Clock, MapPin, Send } from 'lucide-react';
import { AnimatedShaderBackground } from '@/components/ui/animated-shader-background';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { FaqSection } from '@/components/ui/faq';
import SEO from '@/components/SEO';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone Number',
      details: '(437) 925-2744',
      description: 'Call us for immediate assistance'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Address',
      details: 'connect@aurabyt.com',
      description: 'Send us your project details'
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM',
      description: 'EST (Toronto Time)'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      details: 'Toronto, Canada',
      description: 'Serving clients globally'
    }
  ];

  const faqItems = [
    {
      question: "What types of businesses do you work with?",
      answer: "We work with businesses of all sizes across various industries, including e-commerce, healthcare, finance, education, and more. Our solutions are tailored to meet the specific needs of each client."
    },
    {
      question: "How long does a typical web development project take?",
      answer: "The timeline varies depending on the scope and complexity of the project. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes, we provide ongoing support and maintenance for all our projects. We offer various support packages to ensure your digital assets continue to perform optimally."
    },
    {
      question: "What is your approach to digital marketing?",
      answer: "We take a data-driven approach to digital marketing, focusing on strategies that deliver measurable results. We start by understanding your business goals and target audience, then develop a customized strategy to reach and engage them effectively."
    },
    {
      question: "How quickly can you start my project?",
      answer: "We can typically begin new projects within 1-2 weeks, depending on scope and current workload. Rush projects can often be accommodated with proper planning."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes! While we're based in Toronto, we work with clients globally. We're experienced in remote collaboration and different time zones."
    }
  ];

  const handleContactSupport = () => {
    // Scroll to contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden page-content">
      <SEO 
        title="Contact AuraByt - Get In Touch With Our Team" 
        description="Contact AuraByt for all your web development, digital marketing and IT support needs. Our team is ready to help your business grow."
        keywords="Contact AuraByt, IT consultancy contact, Toronto tech company, web development services, digital marketing contact"
      />
      
      {/* Animated Background - Fixed positioning to cover entire viewport */}
      <div className="fixed inset-0 w-full h-full z-0">
        <AnimatedShaderBackground 
          className="w-full h-full" 
          intensity={0.8}
          speed={0.7}
        />
      </div>
      
      {/* Content overlay with proper z-index */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-16 pb-8 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 border border-primary/20 backdrop-blur-sm">
                <Send size={16} />
                Let's Connect
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                Ready to Build Something <span className="gradient-text">Amazing</span>?
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-6 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
                Transform your ideas into reality with our expert team. Fill out the form below to get started.
              </p>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16" id="contact-form">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Form */}
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
                    
                    <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-border/30 bg-background/20 backdrop-blur-md p-8 shadow-sm">
                      <div className="mb-8">
                        <h2 className="text-3xl font-bold mb-4">
                          Send Us a <span className="gradient-text">Message</span>
                        </h2>
                        <p className="text-muted-foreground">
                          Tell us about your project and we'll get back to you within 24 hours.
                        </p>
                      </div>
                      
                      <ContactForm />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">
                      Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                      Ready to start your next project? We're here to help you every step of the way.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="relative group">
                        <div className="relative h-full rounded-xl border border-border/30 p-2">
                          <GlowingEffect
                            spread={25}
                            glow={true}
                            disabled={false}
                            proximity={60}
                            inactiveZone={0.1}
                            borderWidth={1}
                            movementDuration={1.2}
                          />
                          
                          <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-border/30 bg-background/20 backdrop-blur-sm p-6 shadow-sm">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform border border-primary/20">
                              {item.icon}
                            </div>
                            
                            <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                            
                            <p className="text-sm font-medium mb-1">
                              {item.details}
                            </p>
                            
                            <p className="text-xs text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Additional Info */}
                  <div className="relative">
                    <div className="relative h-full rounded-xl border border-border/30 p-2">
                      <GlowingEffect
                        spread={30}
                        glow={true}
                        disabled={false}
                        proximity={70}
                        inactiveZone={0.05}
                        borderWidth={2}
                        movementDuration={1.8}
                      />
                      
                      <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-border/30 bg-background/20 backdrop-blur-sm p-8 shadow-sm">
                        <h3 className="text-xl font-bold mb-4">
                          Why Choose <span className="gradient-text">AuraByt</span>?
                        </h3>
                        
                        <ul className="space-y-3 text-muted-foreground">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span>Expert team with 10+ years of experience</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span>24/7 support and maintenance</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span>Transparent pricing and timelines</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span>100% satisfaction guarantee</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section with Collapsible Component */}
        <FaqSection
          title="Frequently Asked Questions"
          description="Get quick answers to common questions about our services and process."
          items={faqItems}
          contactInfo={{
            title: "Still have questions?",
            description: "We're here to help you with any questions or concerns.",
            buttonText: "Contact Support",
            onContact: handleContactSupport
          }}
        />
      </div>
    </div>
  );
};

export default Contact;