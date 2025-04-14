
import React, { useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Portfolio from '@/components/Portfolio';
import TestimonialSlider from '@/components/TestimonialSlider';
import { Code, BarChart3, ServerCog } from 'lucide-react';

const Index = () => {
  // Create refs for scroll animation
  const sectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Initialize IntersectionObserver with a callback that adds the is-visible class
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    // Observe all scroll-animate elements
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      // Cleanup observer
      animateElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <section className="section-padding bg-gray-50 scroll-animate is-visible">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="animated-gradient-text">Services</span></h2>
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
              delay={200}
            />
            <ServiceCard 
              title="IT Support & Infrastructure"
              description="Reliable IT support and infrastructure solutions that keep your business running smoothly and securely."
              icon={<ServerCog size={32} />}
              link="/services"
              delay={300}
            />
          </div>
        </div>
      </section>
      
      {/* Portfolio Section - Commented out as requested
      <Portfolio />
      */}
      
      {/* Testimonials Section */}
      <section className="section-padding bg-white relative scroll-animate is-visible">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients <span className="animated-gradient-text">Say</span></h2>
            <p className="text-gray-600">
              Don't take our word for it. Here's what our clients have to say about our services.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>
    </div>
  );
};

export default Index;
