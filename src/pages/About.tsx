import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { HoverButton } from '@/components/ui/hover-glow-button';
import SEO from '@/components/SEO';

const About = () => {
  const [currentAttributeIndex, setCurrentAttributeIndex] = useState(0);
  const attributes = ['clarity', 'creativity', 'scalability', 'support', 'success'];

  // Memoize observer creation to prevent recreation on each render
  const createObserver = useCallback(() => {
    return new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          (entry.target as HTMLElement).style.opacity = '1';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
  }, []);

  useEffect(() => {
    // Text rotation effect with increased time
    const rotationInterval = setInterval(() => {
      setCurrentAttributeIndex(prevIndex => (prevIndex + 1) % attributes.length);
    }, 3000);
    
    // Animation for elements when they come into view
    const observer = createObserver();
    
    // Use requestAnimationFrame to avoid layout thrashing
    requestAnimationFrame(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(item => {
        (item as HTMLElement).style.opacity = '0';
        observer.observe(item);
      });
    });

    return () => {
      clearInterval(rotationInterval);
      observer.disconnect();
    };
  }, [attributes.length, createObserver]);

  return (
    <div>
      <SEO 
        title="About AuraByt - Digital Innovation Consultancy" 
        description="AuraByt is a Toronto-based IT consultancy focused on delivering innovative digital solutions through clarity, creativity, scalability, support, and success."
        keywords="IT consultancy, Toronto tech company, web development, digital marketing, IT support, business growth"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background text-foreground relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-primary/5 blur-3xl animate-float animation-delay-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About <span className="gradient-text">AuraByt</span>
            </h1>
            <p className="text-xl opacity-90 animate-fade-in text-center" style={{ animationDelay: '0.2s' }}>
              <span className="gradient-text">AuraByt</span> is about <span className="gradient-text typewriter-text">{attributes[currentAttributeIndex]}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At <span className="gradient-text">AuraByt</span>, our mission is to empower businesses through innovative digital solutions that drive growth, efficiency, and competitive advantage. We believe that technology should work for you, not the other way around.
              </p>
              <p className="text-muted-foreground mb-6">
                Based in the vibrant tech hub of Toronto, we combine global expertise with local knowledge to deliver tailored solutions that meet the unique needs of each client.
              </p>
              <div className="space-y-4">
                {[
                  "Customer-focused approach to every project",
                  "Commitment to technical excellence and innovation",
                  "Transparent communication throughout the process",
                  "Long-term partnerships built on trust and results"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-on-scroll">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80" 
                  alt="AuraByt Team Collaboration" 
                  loading="lazy"
                  width="1024"
                  height="683"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground">
              The principles that guide our work and relationships with clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description: "We embrace new technologies and approaches to deliver cutting-edge solutions."
              },
              {
                title: "Integrity",
                description: "We operate with honesty and transparency in all our client relationships."
              },
              {
                title: "Excellence",
                description: "We strive for excellence in every project, focusing on quality and results."
              },
              {
                title: "Collaboration",
                description: "We work closely with our clients, treating their goals as our own."
              }
            ].map((value, index) => (
              <div key={index} className="professional-card text-center animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary mx-auto">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toronto Section */}
      <section className="py-20 bg-background text-foreground relative">
        {/* Background animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-primary/5 blur-3xl rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/3 w-1/3 h-1/2 bg-primary/5 blur-3xl rounded-full animate-float animation-delay-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Proudly Based in Toronto</h2>
              <p className="text-xl opacity-90 mb-6">
                Located in the heart of Toronto's tech district, <span className="gradient-text">AuraByt</span> is proud to be part of Canada's most dynamic technology ecosystem.
              </p>
              <p className="opacity-80 mb-8">
                Our Toronto roots influence our approach to business - innovative, diverse, and forward-thinking. We leverage the city's vibrant tech community to stay at the cutting edge of digital trends and technologies.
              </p>
              <HoverButton
                href="/contact"
                glowColor="hsl(217, 91%, 60%)"
                backgroundColor="hsl(217, 91%, 60%)"
                textColor="hsl(var(--primary-foreground))"
                hoverTextColor="hsl(var(--primary-foreground))"
                className="shadow-lg hover:shadow-primary/25"
              >
                Connect With Us
              </HoverButton>
            </div>
            <div className="relative animate-on-scroll">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1517090504586-fde19ea6066f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80" 
                  alt="Toronto Skyline" 
                  loading="lazy"
                  width="1024"
                  height="683"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how <span className="gradient-text">AuraByt</span> can help transform your business.
            </p>
            <HoverButton
              href="/contact"
              glowColor="hsl(217, 91%, 60%)"
              backgroundColor="hsl(217, 91%, 60%)"
              textColor="hsl(var(--primary-foreground))"
              hoverTextColor="hsl(var(--primary-foreground))"
              className="shadow-lg hover:shadow-primary/25"
            >
              Get in Touch
            </HoverButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;