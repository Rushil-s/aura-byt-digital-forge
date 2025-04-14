
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const [currentAttributeIndex, setCurrentAttributeIndex] = useState(0);
  const attributes = ['clarity', 'creativity', 'scalability', 'support', 'success'];

  useEffect(() => {
    window.scrollTo(0, 0);

    // Text rotation effect with increased time
    const rotationInterval = setInterval(() => {
      setCurrentAttributeIndex(prevIndex => (prevIndex + 1) % attributes.length);
    }, 3000); // Increased from 2000 to 3000ms for better readability

    // Animation for elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          (entry.target as HTMLElement).style.opacity = '1';
        }
      });
    }, {
      threshold: 0.1
    });
    
    document.querySelectorAll('.animate-on-scroll').forEach(item => {
      (item as HTMLElement).style.opacity = '0';
      observer.observe(item);
    });

    return () => {
      clearInterval(rotationInterval);
      observer.disconnect();
    };
  }, [attributes.length]);

  const team = [
    {
      name: "Alex Thompson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      bio: "With over 15 years of experience in the IT industry, Alex founded AuraByt with a vision to help businesses harness the power of technology."
    },
    {
      name: "Samantha Chen",
      role: "Head of Development",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      bio: "Samantha leads our development team, bringing her expertise in web and mobile application development to create innovative solutions for our clients."
    },
    {
      name: "Marcus Johnson",
      role: "Digital Marketing Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      bio: "Marcus specializes in creating effective digital marketing strategies that drive brand awareness and customer engagement."
    },
    {
      name: "Jessica Lee",
      role: "IT Support Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      bio: "With her technical expertise and customer-focused approach, Jessica ensures our clients receive prompt and effective IT support."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-aurabyt-navy text-white relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-aurabyt-purple/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-aurabyt-blue/10 blur-3xl animate-float animation-delay-300"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-aurabyt-indigo/10 blur-3xl animate-float animation-delay-700"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About <span className="animated-gradient-text">AuraByt</span>
            </h1>
            <p className="text-xl opacity-90 animate-fade-in text-center" style={{ animationDelay: '0.2s' }}>
              <span className="animated-gradient-text">AuraByt</span> is about <span className="animated-gradient-text typewriter-text">{attributes[currentAttributeIndex]}</span>
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
              <p className="text-gray-700 mb-6">
                At <span className="animated-gradient-text">AuraByt</span>, our mission is to empower businesses through innovative digital solutions that drive growth, efficiency, and competitive advantage. We believe that technology should work for you, not the other way around.
              </p>
              <p className="text-gray-700 mb-6">
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
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-lg bg-primary/10 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-lg bg-accent/10 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-700">
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
              <div key={index} className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition-shadow animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Commented out as requested 
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-700">
              Meet the experts behind <span className="animated-gradient-text">AuraByt's</span> success. Our diverse team brings together a wealth of experience and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow overflow-hidden hover-card animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Toronto Section */}
      <section className="py-20 bg-aurabyt-navy text-white relative">
        {/* Background animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-white/5 blur-3xl rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/3 w-1/3 h-1/2 bg-white/5 blur-3xl rounded-full animate-float animation-delay-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Proudly Based in Toronto</h2>
              <p className="text-xl opacity-90 mb-6">
                Located in the heart of Toronto's tech district, <span className="animated-gradient-text">AuraByt</span> is proud to be part of Canada's most dynamic technology ecosystem.
              </p>
              <p className="opacity-80 mb-8">
                Our Toronto roots influence our approach to business - innovative, diverse, and forward-thinking. We leverage the city's vibrant tech community to stay at the cutting edge of digital trends and technologies.
              </p>
              <Link 
                to="/contact" 
                className="inline-block px-6 py-3 bg-white text-aurabyt-navy rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Connect With Us
              </Link>
            </div>
            <div className="relative animate-on-scroll">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1517090504586-fde19ea6066f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80" 
                  alt="Toronto Skyline" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Let's discuss how <span className="animated-gradient-text">AuraByt</span> can help transform your business.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-4 btn-primary"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
