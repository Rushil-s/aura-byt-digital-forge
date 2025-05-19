
// src/pages/Index.tsx
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import SEO from '@/components/SEO';
import ProductCard from '@/components/ProductCard';
import { Code, BarChart3, ServerCog, ArrowRight } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Make all scroll-animate elements visible by default
    const scrollAnimateElements = document.querySelectorAll('.scroll-animate');
    scrollAnimateElements.forEach(el => {
      el.classList.add('is-visible');
    });
  }, []);

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
      
      {/* Our Professional Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="animated-gradient-text">Core Services</span></h2>
            <p className="text-gray-600">
              We deliver comprehensive enterprise solutions tailored to your business requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-aurabyt-purple">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Software & Web Development</h3>
              <p className="text-gray-600 mb-6">Custom web applications, responsive websites, and enterprise software solutions that drive business growth and operational efficiency.</p>
              <a href="/services" className="text-primary font-medium flex items-center hover:underline">
                Learn more <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-aurabyt-blue">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Digital Marketing</h3>
              <p className="text-gray-600 mb-6">Strategic digital marketing campaigns, SEO optimization, and data-driven solutions that increase brand visibility and drive meaningful customer engagement.</p>
              <a href="/services" className="text-primary font-medium flex items-center hover:underline">
                Learn more <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-primary">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <ServerCog size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">IT Support & Infrastructure</h3>
              <p className="text-gray-600 mb-6">Reliable enterprise-grade IT support, cloud services, and infrastructure solutions that keep your business secure and operations running smoothly.</p>
              <a href="/services" className="text-primary font-medium flex items-center hover:underline">
                Learn more <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="animated-gradient-text">Products Portfolio</span></h2>
            <p className="text-gray-600">
              Innovative digital solutions designed to solve complex business challenges
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
