import React, { useEffect, useState, useCallback } from 'react';
import { CheckCircle, Users, Target, Lightbulb, Heart, MapPin, Calendar, Award, Zap, Globe, Code, BarChart3, Shield, Rocket, Star, TrendingUp, Sparkles } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { HoverButton } from '@/components/ui/hover-glow-button';
import { SpiralBackground } from '@/components/ui/spiral-background';
import SEO from '@/components/SEO';

const About = () => {
  const [currentAttributeIndex, setCurrentAttributeIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('mission');
  const attributes = ['innovation', 'excellence', 'growth', 'transformation', 'success'];

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

  const stats = [
    { number: "100+", label: "Projects Delivered", icon: <Award size={24} /> },
    { number: "99%", label: "Client Satisfaction", icon: <Heart size={24} /> },
    { number: "5+", label: "Years Experience", icon: <Calendar size={24} /> },
    { number: "24/7", label: "Support Available", icon: <Zap size={24} /> }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex business challenges and drive digital transformation.",
      icon: <Lightbulb size={32} />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in every project, ensuring quality that exceeds expectations and delivers lasting value.",
      icon: <Award size={32} />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Partnership",
      description: "We work closely with our clients as true partners, treating their success as our own and building long-term relationships.",
      icon: <Users size={32} />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Growth",
      description: "We focus on solutions that scale with your business and drive sustainable growth through strategic technology implementation.",
      icon: <TrendingUp size={32} />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const tabContent = {
    mission: {
      title: "Our Mission",
      content: "At AuraByt, our mission is to empower businesses through innovative digital solutions that drive growth, efficiency, and competitive advantage. We believe that technology should work for you, not the other way around.",
      highlights: [
        "Customer-focused approach to every project",
        "Commitment to technical excellence and innovation", 
        "Transparent communication throughout the process",
        "Long-term partnerships built on trust and results"
      ]
    },
    vision: {
      title: "Our Vision",
      content: "To be the leading IT consultancy that transforms businesses through technology, creating a future where every organization can leverage digital innovation to achieve their full potential.",
      highlights: [
        "Leading digital transformation initiatives",
        "Setting industry standards for quality",
        "Building lasting technological foundations",
        "Empowering businesses of all sizes"
      ]
    },
    approach: {
      title: "Our Approach",
      content: "We combine technical expertise with business acumen to deliver solutions that not only meet your immediate needs but also position you for future success.",
      highlights: [
        "Discovery-driven project planning",
        "Agile development methodologies",
        "Continuous testing and optimization",
        "Comprehensive post-launch support"
      ]
    }
  };

  const whoWeAreContent = [
    {
      title: "Technology Innovators",
      description: "We're a team of passionate technologists who live and breathe innovation. Our expertise spans across modern web technologies, cloud platforms, and emerging digital trends.",
      icon: <Rocket size={32} />,
      features: [
        "Full-stack development expertise",
        "Cloud-native architecture specialists",
        "AI and machine learning integration",
        "Modern DevOps practices"
      ]
    },
    {
      title: "Business Strategists",
      description: "Beyond technical skills, we understand business. We align technology solutions with your strategic goals to ensure every project drives real business value.",
      icon: <Target size={32} />,
      features: [
        "Business process optimization",
        "Digital transformation planning",
        "ROI-focused solutions",
        "Scalable growth strategies"
      ]
    },
    {
      title: "Problem Solvers",
      description: "We thrive on complex challenges. Whether it's legacy system modernization or building cutting-edge applications, we find innovative solutions to your toughest problems.",
      icon: <Shield size={32} />,
      features: [
        "Legacy system modernization",
        "Complex integration challenges",
        "Performance optimization",
        "Security and compliance"
      ]
    }
  ];

  return (
    <div className="relative">
      <SEO 
        title="About AuraByt - Digital Innovation Consultancy" 
        description="AuraByt is a Toronto-based IT consultancy focused on delivering innovative digital solutions through clarity, creativity, scalability, support, and success."
        keywords="IT consultancy, Toronto tech company, web development, digital marketing, IT support, business growth"
      />
      
      {/* Spiral Background - spans entire page */}
      <SpiralBackground 
        totalDots={400}
        dotRadius={1.5}
        duration={12}
        dotColor="hsl(217, 91%, 60%)"
        opacity={0.08}
        className="fixed inset-0"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background/80 backdrop-blur-sm text-foreground relative overflow-hidden">
        {/* Additional background animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-primary/5 blur-3xl animate-float animation-delay-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8 border border-primary/20 backdrop-blur-sm">
              <Users size={16} />
              About Us
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in">
              Driving Digital <span className="gradient-text">Innovation</span>
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 animate-fade-in text-center mb-8" style={{ animationDelay: '0.2s' }}>
              <span className="gradient-text">AuraByt</span> is about <span className="gradient-text typewriter-text">{attributes[currentAttributeIndex]}</span>
            </p>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Based in Toronto, we're a team of passionate technologists dedicated to transforming businesses through innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="relative animate-on-scroll">
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
                  
                  <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-border/30 bg-background/40 backdrop-blur-sm p-6 shadow-sm text-center">
                    <div className="text-primary mb-3 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Who We Are Section */}
      <section className="py-20 bg-background/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Who We <span className="gradient-text">Are</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We're more than just an IT consultancy. We're your strategic technology partner, 
                combining deep technical expertise with business insight to drive meaningful results.
              </p>
            </div>

            {/* Who We Are Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {whoWeAreContent.map((item, index) => (
                <div key={index} className="relative animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
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
                    
                    <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-border/30 bg-background/40 backdrop-blur-sm p-8 shadow-sm group hover:scale-105 transition-transform duration-300">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                        {item.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                        {item.description}
                      </p>

                      <div className="space-y-3">
                        {item.features.map((feature, i) => (
                          <div key={i} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Company Story */}
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
                
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-border/30 bg-background/40 backdrop-blur-sm p-12 shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-on-scroll">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 border border-primary/20">
                        <Star size={16} />
                        Our Story
                      </div>
                      
                      <h3 className="text-3xl font-bold mb-6">
                        Built on <span className="gradient-text">Passion</span> & <span className="gradient-text">Purpose</span>
                      </h3>
                      
                      <div className="space-y-6 text-muted-foreground leading-relaxed">
                        <p>
                          Founded with a vision to bridge the gap between complex technology and business success, 
                          AuraByt emerged from the recognition that many businesses struggle to leverage technology effectively.
                        </p>
                        
                        <p>
                          Our founders, seasoned technology professionals with decades of combined experience, 
                          saw an opportunity to create a consultancy that truly understands both the technical 
                          and business sides of digital transformation.
                        </p>
                        
                        <p>
                          Today, we're proud to be a trusted partner for businesses across industries, 
                          helping them navigate the digital landscape and achieve their goals through 
                          innovative technology solutions.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-6 mt-8">
                        <div className="flex items-center">
                          <Globe size={20} className="text-primary mr-3" />
                          <div>
                            <div className="font-semibold">Global Reach</div>
                            <div className="text-sm text-muted-foreground">Serving clients worldwide</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Code size={20} className="text-primary mr-3" />
                          <div>
                            <div className="font-semibold">Tech Excellence</div>
                            <div className="text-sm text-muted-foreground">Cutting-edge solutions</div>
                          </div>
                        </div>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision/Approach Tabs */}
      <section className="py-20 bg-card/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Foundation</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide our work and define our commitment to excellence.
              </p>
            </div>

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
                
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-border/30 bg-background/40 backdrop-blur-sm shadow-sm">
                  {/* Tab Navigation */}
                  <div className="flex border-b border-border/30">
                    {Object.keys(tabContent).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 px-6 py-4 text-sm font-medium transition-all duration-300 ${
                          activeTab === tab
                            ? 'text-primary border-b-2 border-primary bg-primary/5'
                            : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                        }`}
                      >
                        {tabContent[tab as keyof typeof tabContent].title}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-6">
                          {tabContent[activeTab as keyof typeof tabContent].title}
                        </h3>
                        <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                          {tabContent[activeTab as keyof typeof tabContent].content}
                        </p>
                        
                        <div className="space-y-4">
                          {tabContent[activeTab as keyof typeof tabContent].highlights.map((item, index) => (
                            <div key={index} className="flex items-start">
                              <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                              <span className="text-muted-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="rounded-lg overflow-hidden shadow-xl">
                          <img 
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80" 
                            alt="Team Strategy Session" 
                            loading="lazy"
                            width="1024"
                            height="683"
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our work and relationships with clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="relative animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
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
                  
                  <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-border/30 bg-background/40 backdrop-blur-sm p-8 shadow-sm group hover:scale-105 transition-transform duration-300">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} p-4 mb-6 text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toronto Section */}
      <section className="py-20 bg-card/20 backdrop-blur-sm text-foreground relative">
        {/* Background animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-primary/5 blur-3xl rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/3 w-1/3 h-1/2 bg-primary/5 blur-3xl rounded-full animate-float animation-delay-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
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
                
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-border/30 bg-background/40 backdrop-blur-sm p-12 shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-on-scroll">
                      <div className="flex items-center mb-6">
                        <MapPin size={24} className="text-primary mr-3" />
                        <span className="text-primary font-semibold">Based in Toronto</span>
                      </div>
                      
                      <h2 className="text-4xl font-bold mb-6">
                        Proudly <span className="gradient-text">Canadian</span>
                      </h2>
                      
                      <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                        Located in the heart of Toronto's tech district, AuraByt is proud to be part of Canada's most dynamic technology ecosystem.
                      </p>
                      
                      <p className="text-muted-foreground mb-8 leading-relaxed">
                        Our Toronto roots influence our approach to business - innovative, diverse, and forward-thinking. We leverage the city's vibrant tech community to stay at the cutting edge of digital trends and technologies.
                      </p>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="flex items-center">
                          <Globe size={20} className="text-primary mr-3" />
                          <div>
                            <div className="font-semibold">Global Reach</div>
                            <div className="text-sm text-muted-foreground">Serving clients worldwide</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Code size={20} className="text-primary mr-3" />
                          <div>
                            <div className="font-semibold">Tech Hub</div>
                            <div className="text-sm text-muted-foreground">Toronto's innovation center</div>
                          </div>
                        </div>
                      </div>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background/60 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
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
                
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-border/30 bg-background/40 backdrop-blur-md p-12 shadow-sm text-center animate-on-scroll">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready to Work <span className="gradient-text">Together</span>?
                  </h2>
                  <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
                    Let's discuss how AuraByt can help transform your business with innovative digital solutions.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <HoverButton
                      href="/contact"
                      variant="primary"
                      glowColor="hsl(217, 91%, 60%)"
                      className="shadow-lg hover:shadow-primary/25"
                    >
                      Start Your Project
                    </HoverButton>
                    
                    <HoverButton
                      href="/services"
                      variant="secondary"
                      glowColor="hsl(217, 91%, 60%)"
                      className="shadow-lg"
                    >
                      Explore Services
                    </HoverButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;