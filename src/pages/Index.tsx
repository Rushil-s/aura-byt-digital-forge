// src/pages/Index.tsx
import React, { useEffect, useRef, memo } from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialSlider from '@/components/TestimonialSlider';
import { Code, BarChart3, ServerCog } from 'lucide-react';
import SEO from '@/components/SEO';

// Memoize service cards for better performance
const MemoizedServiceCard = memo(ServiceCard);

const Index = () => {
  // Create refs for scroll animation
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Use requestAnimationFrame for better performance
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            entry.target.classList.add('is-visible');
          });
        }
      });
    };

    // Initialize IntersectionObserver with a callback that adds the is-visible class
    const observer = new IntersectionObserver(handleIntersection, { 
      threshold: 0.1, 
      rootMargin: '0px 0px -100px 0px' 
    });

    // Observe the services section
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    // Observe other scroll-animate elements
    const animateElements = document.querySelectorAll('.scroll-animate:not(.is-visible)');
    animateElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      // Cleanup observer
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
      
      animateElements.forEach((el) => {
        observer.unobserve(el);
      });
      
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      title: "Software & Web Development",
      description: "Custom web applications, responsive websites, and software solutions that drive business growth and efficiency.",
      icon: <Code size={32} />,
      link: "/services",
      delay: 100
    },
    {
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns that increase your brand visibility and drive meaningful customer engagement.",
      icon: <BarChart3 size={32} />,
      link: "/services",
      delay: 200
    },
    {
      title: "IT Support & Infrastructure",
      description: "Reliable IT support and infrastructure solutions that keep your business running smoothly and securely.",
      icon: <ServerCog size={32} />,
      link: "/services",
      delay: 300
    }
  ];

  return (
    <div className="w-full">
      <SEO 
        title="AuraByt – Digital Innovation Consultancy" 
        description="AuraByt is a Toronto-based IT consultancy specializing in web development, digital marketing, and IT support to help businesses innovate and grow." 
      />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <section 
        ref={servicesRef}
        className="section-padding bg-gray-50 scroll-animate opacity-0 translate-y-8 transition-all duration-700"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="animated-gradient-text">Services</span></h2>
            <p className="text-gray-600">
              We provide comprehensive digital solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <MemoizedServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-white relative scroll-animate opacity-0 translate-y-8 transition-all duration-700">
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