import React, { useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, Clock, MapPin, Send, MessageCircle, Calendar } from 'lucide-react';
import { AnimatedShaderBackground } from '@/components/ui/animated-shader-background';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { HoverButton } from '@/components/ui/hover-glow-button';
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

  const quickActions = [
    {
      icon: <MessageCircle size={20} />,
      title: 'Quick Chat',
      description: 'Get instant answers to your questions',
      action: 'Start Chat'
    },
    {
      icon: <Calendar size={20} />,
      title: 'Schedule Meeting',
      description: 'Book a consultation call with our team',
      action: 'Book Now'
    },
    {
      icon: <Send size={20} />,
      title: 'Send Proposal',
      description: 'Share your project requirements',
      action: 'Send Details'
    }
  ];

  return (
    <div className="relative min-h-screen">
      <SEO 
        title="Contact AuraByt - Get In Touch With Our Team" 
        description="Contact AuraByt for all your web development, digital marketing and IT support needs. Our team is ready to help your business grow."
        keywords="Contact AuraByt, IT consultancy contact, Toronto tech company, web development services, digital marketing contact"
      />
      
      {/* Animated Background */}
      <AnimatedShaderBackground 
        className="fixed inset-0" 
        intensity={0.8}
        speed={0.7}
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8 border border-primary/20 backdrop-blur-sm">
              <Send size={16} />
              Let's Connect
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
              Ready to Build Something <span className="gradient-text">Amazing</span>?
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Transform your ideas into reality. Our team of experts is here to help you 
              navigate the digital landscape and achieve your business goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <HoverButton
                href="#contact-form"
                variant="primary"
                glowColor="hsl(217, 91%, 60%)"
                className="shadow-lg hover:shadow-primary/25"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Send size={20} />
                Start Your Project
              </HoverButton>
              
              <HoverButton
                href="tel:+14379252744"
                variant="secondary"
                glowColor="hsl(217, 91%, 60%)"
                className="shadow-lg"
              >
                <Phone size={20} />
                Call Now
              </HoverButton>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How Can We <span className="gradient-text">Help</span> You?
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the best way to get in touch with our team
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {quickActions.map((action, index) => (
                <div key={index} className="relative group">
                  <div className="relative h-full rounded-xl border border-border p-2">
                    <GlowingEffect
                      spread={35}
                      glow={true}
                      disabled={false}
                      proximity={80}
                      inactiveZone={0.05}
                      borderWidth={2}
                      movementDuration={1.5}
                    />
                    
                    <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-lg border bg-card/80 backdrop-blur-sm p-8 shadow-sm text-center">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary group-hover:scale-110 transition-transform border border-primary/20">
                        {action.icon}
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {action.title}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {action.description}
                        </p>
                        
                        <HoverButton
                          variant="secondary"
                          glowColor="hsl(217, 91%, 60%)"
                          className="w-full"
                        >
                          {action.action}
                        </HoverButton>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative py-20" id="contact-form">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="relative">
                <div className="relative h-full rounded-xl border border-border p-2">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={100}
                    inactiveZone={0.05}
                    borderWidth={2}
                    movementDuration={2}
                  />
                  
                  <div className="relative flex h-full flex-col overflow-hidden rounded-lg border bg-card/90 backdrop-blur-sm p-8 shadow-sm">
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
                      <div className="relative h-full rounded-xl border border-border p-2">
                        <GlowingEffect
                          spread={25}
                          glow={true}
                          disabled={false}
                          proximity={60}
                          inactiveZone={0.1}
                          borderWidth={1}
                          movementDuration={1.2}
                        />
                        
                        <div className="relative flex h-full flex-col overflow-hidden rounded-lg border bg-card/80 backdrop-blur-sm p-6 shadow-sm">
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
                  <div className="relative h-full rounded-xl border border-border p-2">
                    <GlowingEffect
                      spread={30}
                      glow={true}
                      disabled={false}
                      proximity={70}
                      inactiveZone={0.05}
                      borderWidth={2}
                      movementDuration={1.8}
                    />
                    
                    <div className="relative flex h-full flex-col overflow-hidden rounded-lg border bg-card/80 backdrop-blur-sm p-8 shadow-sm">
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

      {/* FAQ Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Get quick answers to common questions about our services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "How quickly can you start my project?",
                  answer: "We can typically begin new projects within 1-2 weeks, depending on scope and current workload. Rush projects can often be accommodated."
                },
                {
                  question: "What's included in your support?",
                  answer: "Our support includes bug fixes, security updates, performance monitoring, and technical assistance. We offer various support packages to fit your needs."
                },
                {
                  question: "Do you work with international clients?",
                  answer: "Yes! While we're based in Toronto, we work with clients globally. We're experienced in remote collaboration and different time zones."
                },
                {
                  question: "What's your project process like?",
                  answer: "We follow an agile approach: discovery, planning, design, development, testing, and launch. You'll have regular updates and input throughout."
                }
              ].map((faq, index) => (
                <div key={index} className="relative group">
                  <div className="relative h-full rounded-xl border border-border p-2">
                    <GlowingEffect
                      spread={25}
                      glow={true}
                      disabled={false}
                      proximity={60}
                      inactiveZone={0.1}
                      borderWidth={1}
                      movementDuration={1.2}
                    />
                    
                    <div className="relative flex h-full flex-col overflow-hidden rounded-lg border bg-card/80 backdrop-blur-sm p-6 shadow-sm">
                      <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;