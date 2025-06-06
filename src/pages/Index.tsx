import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import SEO from '@/components/SEO';
import ProductCard from '@/components/ProductCard';
import { Code, BarChart3, ServerCog, ArrowRight, Sparkles, Zap, Shield, Users, Globe, Rocket } from 'lucide-react';

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
      title: "Software & Web Development",
      description: "Custom web applications, responsive websites, and enterprise software solutions that drive business growth and operational efficiency.",
      features: ["React & Next.js", "Node.js & Python", "Cloud Architecture", "Mobile Apps"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns, SEO optimization, and data-driven solutions that increase brand visibility and drive customer engagement.",
      features: ["SEO & SEM", "Social Media", "Content Strategy", "Analytics"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <ServerCog size={32} />,
      title: "IT Support & Infrastructure",
      description: "Reliable enterprise-grade IT support, cloud services, and infrastructure solutions that keep your business secure and operations running smoothly.",
      features: ["24/7 Support", "Cloud Migration", "Cybersecurity", "Network Setup"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { icon: <Users size={24} />, number: "50+", label: "Happy Clients", color: "text-blue-500" },
    { icon: <Rocket size={24} />, number: "100+", label: "Projects Delivered", color: "text-purple-500" },
    { icon: <Globe size={24} />, number: "99%", label: "Uptime Guarantee", color: "text-green-500" },
    { icon: <Shield size={24} />, number: "24/7", label: "Support Available", color: "text-orange-500" }
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
        title="AuraByt – Digital Innovation Consultancy" 
        description="AuraByt is a Toronto-based IT consultancy specializing in web development, digital marketing, and IT support to help businesses innovate and grow." 
      />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group scroll-animate opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-50 ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-purple-500/5 to-pink-500/5 blur-3xl rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20 scroll-animate opacity-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              Our Core Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="gradient-text">Digital Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We deliver enterprise-grade solutions tailored to your business requirements, 
              helping you stay ahead in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative scroll-animate opacity-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="professional-card h-full relative overflow-hidden">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <a 
                      href="/services" 
                      className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors group/link"
                    >
                      Learn more 
                      <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20 scroll-animate opacity-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              <Zap size={16} />
              Innovation Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Product Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Innovative digital solutions designed to solve complex business challenges 
              and drive meaningful results.
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
          
          <div className="text-center mt-12 scroll-animate opacity-0">
            <a 
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 group"
            >
              View All Products
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-gradient-to-tl from-purple-500/20 to-pink-500/20 blur-3xl rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center scroll-animate opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your <span className="gradient-text">Digital Presence</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Let's discuss how AuraByt can help accelerate your business growth 
              through innovative digital solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 group"
              >
                Start Your Project
                <ArrowRight size={20} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="/services"
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105"
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