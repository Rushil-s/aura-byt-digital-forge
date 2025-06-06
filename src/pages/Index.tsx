import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import SEO from '@/components/SEO';
import ProductCard from '@/components/ProductCard';
import { Code, BarChart3, ServerCog, ArrowRight, Shield, Zap, Globe, Users, Cpu, Database } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Code size={32} />,
      title: "Software Development",
      description: "Enterprise-grade applications, cloud-native solutions, and scalable architectures built with cutting-edge technologies.",
      features: ["React & Next.js", "Node.js & Python", "Cloud Architecture", "Microservices"],
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Digital Transformation",
      description: "Strategic digital initiatives, process automation, and data-driven solutions that accelerate business growth.",
      features: ["Process Automation", "Data Analytics", "Digital Strategy", "Performance Optimization"],
    },
    {
      icon: <ServerCog size={32} />,
      title: "Infrastructure & Security",
      description: "Robust cloud infrastructure, cybersecurity frameworks, and 24/7 monitoring for enterprise-level reliability.",
      features: ["Cloud Migration", "Security Audits", "DevOps", "Monitoring"],
    }
  ];

  const technologies = [
    { name: "React", icon: <Code size={24} /> },
    { name: "Node.js", icon: <Cpu size={24} /> },
    { name: "AWS", icon: <Globe size={24} /> },
    { name: "Docker", icon: <Database size={24} /> },
    { name: "Kubernetes", icon: <ServerCog size={24} /> },
    { name: "MongoDB", icon: <Database size={24} /> }
  ];

  const products = [
    {
      title: "ClaimByt",
      description: "AI-powered medical claims automation & RCM platform—eliminate denials, automate workflows, and unlock real-time revenue insights.",
      link: "/services"
    },
    {
      title: "AuraClaim",
      description: "Enterprise-grade AI billing engine: plug-and-play integration with any EHR, 99%+ coding accuracy, and actionable dashboard analytics.",
      link: "/services"
    },
    {
      title: "SkinsLegion",
      description: "Premium CS:GO & in-game item rentals with real insurance coverage—let your skins earn you passive income, securely and hassle-free.",
      link: "/services"
    },
    {
      title: "CodeLap",
      description: "Micro-contest coding platform—daily quick challenges, live leaderboards, and sponsor-driven tournaments to sharpen skills and win real prizes.",
      link: "/services"
    },
    {
      title: "TheCricLine",
      description: "Fantasy cricket & prediction hub—dynamic match data, real-time scorecards, and community leaderboards for true cricket enthusiasts.",
      link: "/services"
    },
    {
      title: "TradesEngine",
      description: "Algorithmic trading toolkit—backtest strategies, deploy bots, and monitor portfolio performance across multiple markets.",
      link: "/services"
    }
  ];

  return (
    <div className="w-full relative overflow-hidden">
      <SEO 
        title="AuraByt – Enterprise IT Consultancy" 
        description="AuraByt is a Toronto-based enterprise IT consultancy specializing in software development, digital transformation, and infrastructure solutions." 
      />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 blur-3xl rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20 scroll-animate opacity-0">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8 border border-primary/20">
              <Shield size={16} />
              Enterprise Solutions
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Comprehensive <span className="gradient-text">Technology</span> Solutions
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We architect, develop, and maintain enterprise-grade solutions that drive 
              digital transformation and accelerate business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative scroll-animate opacity-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="professional-card h-full group">
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-10">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <a 
                      href="/services" 
                      className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group/link text-lg"
                    >
                      Learn more 
                      <ArrowRight size={20} className="ml-3 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-card/20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-animate opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powered by <span className="gradient-text">Modern</span> Technology
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We leverage cutting-edge technologies to build scalable, secure, and high-performance solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border hover:bg-card/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 text-center scroll-animate opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center mb-4 text-primary group-hover:text-primary/80 transition-colors duration-300">
                  {tech.icon}
                </div>
                <div className="text-sm font-medium text-foreground">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-background relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20 scroll-animate opacity-0">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8 border border-primary/20">
              <Zap size={16} />
              Innovation Portfolio
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Our <span className="gradient-text">Product</span> Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Innovative digital solutions designed to solve complex business challenges 
              and drive meaningful results across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product, index) => (
              <div 
                key={index}
                className="scroll-animate opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard 
                  title={product.title}
                  description={product.description}
                  link={product.link}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 scroll-animate opacity-0">
            <a 
              href="/services"
              className="btn-primary text-lg"
            >
              View All Solutions
              <ArrowRight size={24} className="ml-3" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/20 text-foreground relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center scroll-animate opacity-0">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Ready to Transform Your <span className="gradient-text">Business</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Let's discuss how AuraByt can architect your digital future 
              through innovative technology solutions and strategic consulting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a
                href="/contact"
                className="btn-primary text-lg"
              >
                Start Your Project
                <ArrowRight size={24} className="ml-3" />
              </a>
              
              <a
                href="/services"
                className="btn-secondary text-lg"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;