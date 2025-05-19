
// src/pages/Index.tsx
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Code, BarChart3, ServerCog } from 'lucide-react';
import SEO from '@/components/SEO';
import ProductCard from '@/components/ProductCard';

const Index = () => {
  useEffect(() => {
    // Make all scroll-animate elements visible by default
    const scrollAnimateElements = document.querySelectorAll('.scroll-animate');
    scrollAnimateElements.forEach(el => {
      el.classList.add('is-visible');
    });
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
      title: "AuraByt",
      description: "Our flagship IT consultancy & digital-forge: software development, web design, digital marketing, and infrastructure services, all under one roof.",
      link: "/services"
    },
    {
      title: "TradesEngine",
      description: "Algorithmic trading toolkit—backtest strategies, deploy bots, and monitor portfolio performance across multiple markets.",
      link: "/services"
    },
    {
      title: "StartByt",
      description: "AI-driven company formation & legal-docs assistant—register your business, draft incorporations, and store filings in a secure, unified dashboard.",
      link: "/services"
    },
    {
      title: "VaultByt",
      description: "Encrypted document vault—AES-256 storage for contracts, certificates, and sensitive files with enterprise-grade access controls.",
      link: "/services"
    },
    {
      title: "TaxByt",
      description: "Automated tax-filing & compliance—guided workflows, real-time error checks, and seamless CRA/IRS submission for individuals and SMEs.",
      link: "/services"
    },
    {
      title: "ResumeByt",
      description: "AI-enhanced resume builder & optimizer—tailor your CV to any job posting and beat the ATS with data-driven keyword insights.",
      link: "/services"
    },
    {
      title: "FormByt",
      description: "No-code form & survey platform—drag-and-drop creation, conditional logic, and integrated analytics to capture and act on user feedback.",
      link: "/services"
    },
    {
      title: "LegalByt",
      description: "On-demand legal templates & AI review—NDAs, contracts, and policies you can customize in minutes, with built-in compliance checks.",
      link: "/services"
    },
    {
      title: "GrantByt",
      description: "AI-powered grant discovery & proposal assistant—find funding opportunities, draft applications, and track deadlines in one place.",
      link: "/services"
    },
    {
      title: "CallByt",
      description: "White-label AI voice agent platform—24/7 conversational support with seamless human-fallback, instantly deployable across multiple channels.",
      link: "/services"
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
      
      {/* Services Section - Made visible by default */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="animated-gradient-text">Services</span></h2>
            <p className="text-gray-600">
              We provide comprehensive digital solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
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

      {/* Products Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="animated-gradient-text">Products & Services</span></h2>
            <p className="text-gray-600">
              AuraByt offers a diverse range of digital products and services to accelerate your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard 
                key={index}
                title={product.title}
                description={product.description}
                link={product.link}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
