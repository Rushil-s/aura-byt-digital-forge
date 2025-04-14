
import React, { useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Portfolio from '@/components/Portfolio';
import TestimonialSlider from '@/components/TestimonialSlider';
import { Code, BarChart3, ServerCog, ArrowRight, CheckCircle, Zap, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Reference for scroll animations
  const servicesRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animation for elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px' // Trigger earlier for better UX
    });
    
    // Observe elements with scroll-animate class
    document.querySelectorAll('.scroll-animate').forEach(item => {
      observer.observe(item);
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section - Enhanced with animations */}
      <section className="section-padding bg-gray-50" id="services" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 scroll-animate opacity-0 transform translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="animated-gradient-text">Services</span></h2>
            <p className="text-gray-600">
              We provide comprehensive digital solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Software & Web Development"
              description="Custom web applications, responsive websites, and software solutions that drive business growth and efficiency."
              icon={<Code size={32} className="animate-pulse-slow" />}
              link="/services"
              delay={100}
            />
            <ServiceCard 
              title="Digital Marketing"
              description="Strategic digital marketing campaigns that increase your brand visibility and drive meaningful customer engagement."
              icon={<BarChart3 size={32} className="animate-pulse-slow animation-delay-300" />}
              link="/services"
              delay={300}
            />
            <ServiceCard 
              title="IT Support & Infrastructure"
              description="Reliable IT support and infrastructure solutions that keep your business running smoothly and securely."
              icon={<ServerCog size={32} className="animate-pulse-slow animation-delay-500" />}
              link="/services"
              delay={500}
            />
          </div>
          
          <div className="mt-12 text-center scroll-animate opacity-0 transform translate-y-10 transition-all duration-700">
            <Link 
              to="/services" 
              className="inline-flex items-center text-primary font-medium hover:underline group"
            >
              View all our services
              <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <Portfolio />
      
      {/* Features/Why Choose Us Section - Enhanced with animations*/}
      <section className="section-padding relative" ref={featuresRef}>
        {/* Background animations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-aurabyt-purple/5 to-transparent opacity-60 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-radial from-aurabyt-blue/5 to-transparent opacity-60 blur-2xl"></div>
        </div>
      
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 scroll-animate opacity-0 transform translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="animated-gradient-text">AuraByt</span></h2>
            <p className="text-gray-600">
              We combine technical expertise with business acumen to deliver solutions that make a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Users size={28} />,
                title: "Expert Team",
                description: "Our team of specialists bring years of experience across various industries."
              },
              {
                icon: <Zap size={28} />,
                title: "Tailored Solutions",
                description: "We create customized solutions based on your unique business requirements."
              },
              {
                icon: <Code size={28} />,
                title: "Cutting-edge Technology",
                description: "We stay ahead of the curve by utilizing the latest technologies and methodologies."
              },
              {
                icon: <Shield size={28} />,
                title: "Ongoing Support",
                description: "We provide continuous support to ensure your digital assets perform optimally."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 scroll-animate opacity-0 transform translate-y-10 transition-all duration-700 parallax-card group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="parallax-card-inner">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section - New */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "200+", label: "Happy Clients", delay: 0 },
              { value: "500+", label: "Projects Completed", delay: 100 },
              { value: "15+", label: "Years Experience", delay: 200 },
              { value: "24/7", label: "Customer Support", delay: 300 }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="scroll-animate opacity-0 transform translate-y-10 transition-all duration-700"
                style={{ transitionDelay: `${stat.delay}ms` }}
              >
                <h3 className="text-4xl font-bold text-primary mb-2 animated-gradient-text">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section - Enhanced with background */}
      <section className="section-padding bg-white relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-gradient-radial from-aurabyt-purple/5 to-transparent opacity-60 blur-2xl"></div>
          <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-gradient-radial from-aurabyt-blue/5 to-transparent opacity-60 blur-2xl"></div>
          <div className="absolute inset-0 noise-bg"></div>
        </div>
      
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 scroll-animate opacity-0 transform translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients <span className="animated-gradient-text">Say</span></h2>
            <p className="text-gray-600">
              Don't take our word for it. Here's what our clients have to say about our services.
            </p>
          </div>
          
          <TestimonialSlider />
        </div>
      </section>
      
      {/* CTA Section - Enhanced with animations */}
      <section className="py-16 bg-aurabyt-navy text-white relative" ref={ctaRef}>
        {/* Background animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-1/3 h-1/2 bg-gradient-radial from-aurabyt-purple/20 to-transparent opacity-60 blur-2xl"></div>
          <div className="absolute bottom-0 left-1/4 w-1/2 h-1/3 bg-gradient-radial from-aurabyt-blue/20 to-transparent opacity-60 blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-aurabyt-indigo/10 blur-3xl animate-pulse-slow"></div>
        </div>
      
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center scroll-animate opacity-0 transform translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your <span className="animated-gradient-text">Digital Presence</span>?</h2>
            <p className="text-xl opacity-90 mb-8">
              Let's collaborate to bring your vision to life. Contact us today to get started!
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-4 bg-white text-aurabyt-navy rounded-lg font-bold hover:bg-gray-100 transition-colors btn-hover-shine group"
            >
              Get in Touch
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
