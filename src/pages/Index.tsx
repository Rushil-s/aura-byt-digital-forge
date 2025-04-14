
import React, { useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialSlider from '@/components/TestimonialSlider';
import { Code, BarChart3, ServerCog, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Refs for scroll animations
  const servicesRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  // Intersection Observer setup
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe elements
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (testimonialRef.current) observer.observe(testimonialRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <section className="section-padding bg-gray-50" id="services">
        <div 
          ref={servicesRef} 
          className="container mx-auto px-4 opacity-0"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600">
              We provide comprehensive digital solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Software & Web Development"
              description="Custom web applications, responsive websites, and software solutions that drive business growth and efficiency."
              icon={<Code size={32} />}
              link="/services"
              delay={100}
            />
            <ServiceCard 
              title="Digital Marketing"
              description="Strategic digital marketing campaigns that increase your brand visibility and drive meaningful customer engagement."
              icon={<BarChart3 size={32} />}
              link="/services"
              delay={300}
            />
            <ServiceCard 
              title="IT Support & Infrastructure"
              description="Reliable IT support and infrastructure solutions that keep your business running smoothly and securely."
              icon={<ServerCog size={32} />}
              link="/services"
              delay={500}
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              View all our services
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features/Why Choose Us Section */}
      <section className="section-padding">
        <div 
          ref={featuresRef}
          className="container mx-auto px-4 opacity-0"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AuraByt</h2>
            <p className="text-gray-600">
              We combine technical expertise with business acumen to deliver solutions that make a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Expert Team",
                description: "Our team of specialists bring years of experience across various industries."
              },
              {
                title: "Tailored Solutions",
                description: "We create customized solutions based on your unique business requirements."
              },
              {
                title: "Cutting-edge Technology",
                description: "We stay ahead of the curve by utilizing the latest technologies and methodologies."
              },
              {
                title: "Ongoing Support",
                description: "We provide continuous support to ensure your digital assets perform optimally."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div 
          ref={testimonialRef}
          className="container mx-auto px-4 opacity-0"
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">
              Don't take our word for it. Here's what our clients have to say about our services.
            </p>
          </div>
          
          <TestimonialSlider />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-aurabyt-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl opacity-90 mb-8">
              Let's collaborate to bring your vision to life. Contact us today to get started!
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-4 bg-white text-aurabyt-navy rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
