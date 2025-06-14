
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import SEO from '@/components/SEO';
import ProductCard from '@/components/ProductCard';
import FeatureShowcase from '@/components/FeatureShowcase';
import Portfolio from '@/components/Portfolio';
import { HoverButton } from '@/components/ui/hover-glow-button';
import { Code, BarChart3, ServerCog, ArrowRight, Shield, Zap, Cpu, Database, Globe } from 'lucide-react';
import { initializeScrollAnimations } from '@/utils/animations';
import { Link } from 'react-router-dom';

const whatWeBuild = [
  {
    icon: <Code size={32} />,
    title: "Custom Software",
    description: "Web and mobile platforms built for massive scale, performance, and real business outcomes."
  },
  {
    icon: <ServerCog size={32} />,
    title: "Cloud Solutions",
    description: "End-to-end cloud architecture, DevOps, and security for hybrid/global teams."
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Data Intelligence",
    description: "Real-time analytics, AI-driven automation, and actionable enterprise insights."
  },
  {
    icon: <Shield size={32} />,
    title: "Security & Compliance",
    description: "Protect your IP and customer data, ensure compliance, and reduce risk."
  }
];

const Index = () => {
  useEffect(() => {
    const cleanup = initializeScrollAnimations();
    return cleanup;
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

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AuraByt",
    "description": "Enterprise IT Consultancy specializing in software development, digital transformation, and infrastructure solutions",
    "url": "https://aurabyt.com",
    "logo": "https://aurabyt.com/assets/aurabytlogo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-437-925-2744",
      "contactType": "Customer Service",
      "email": "connect@aurabyt.com",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressCountry": "CA"
    },
    "sameAs": [
      "https://www.linkedin.com/company/aurabyt",
      "https://twitter.com/aurabyt_inc",
      "https://www.facebook.com/aurabyt.inc",
      "https://www.instagram.com/aurabyt.inc"
    ],
    "foundingDate": "2023",
    "numberOfEmployees": "10-50",
    "serviceType": [
      "Software Development",
      "Digital Transformation", 
      "IT Infrastructure",
      "Cloud Solutions",
      "Cybersecurity"
    ]
  };

  return (
    <div className="w-full relative overflow-hidden">
      <SEO 
        title="AuraByt – Enterprise IT Consultancy & Digital Solutions" 
        description="Transform your business with AuraByt's enterprise IT solutions. Expert software development, digital transformation, and cloud infrastructure services in Toronto."
        keywords="enterprise IT consultancy, software development Toronto, digital transformation, cloud solutions, cybersecurity, web development, IT infrastructure"
        schema={structuredData}
      />
      
      <Hero />
      {/* WHAT WE BUILD SECTION */}
      <section className="py-20 md:py-28 bg-background border-b border-border/20" id="what-we-build">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center text-primary/80 bg-primary/10 rounded-full px-6 py-3 text-sm font-semibold mb-6 border border-primary/20 gap-2">
              <Code size={16} />
              What We Build
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 gradient-text">Technology that Drives Results</h2>
            <p className="text-lg text-muted-foreground mb-2">
              We architect, engineer, and deliver solutions for modern enterprises—future-ready and tailored to your industry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-10">
            {whatWeBuild.map((item, idx) => (
              <div key={idx} className="group p-7 rounded-xl bg-card border border-border/80 shadow-md hover:bg-primary/5 transition-all flex flex-col items-center text-center space-y-5 scroll-animate" style={{ animationDelay: `${50*idx}ms` }}>
                <div className="text-primary">{item.icon}</div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-muted-foreground text-base">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/portfolio" className="text-primary font-medium text-base underline hover:no-underline inline-block mt-2">
              See our portfolio
            </Link>
          </div>
        </div>
      </section>
      {/* END WHAT WE BUILD */}
      
      <FeatureShowcase />
      
      {/* Services Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 blur-3xl rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20 scroll-animate">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-primary/20">
              <Shield size={14} className="sm:w-4 sm:h-4" />
              Enterprise Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Comprehensive <span className="gradient-text">Technology</span> Solutions
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We architect, develop, and maintain enterprise-grade solutions that drive 
              digital transformation and accelerate business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative scroll-animate"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="professional-card h-full p-6 sm:p-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-primary/10 flex items-center justify-center mb-6 sm:mb-8 text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 sm:space-y-3 mb-8 sm:mb-10">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 sm:mr-4 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Changed Learn more to use Link */}
                  <Link 
                    to="/services" 
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group/link text-base sm:text-lg"
                  >
                    Learn more 
                    <ArrowRight size={18} className="ml-2 sm:ml-3 group-hover/link:translate-x-1 transition-transform flex-shrink-0" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 sm:py-20 bg-card/20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Powered by <span className="gradient-text">Modern</span> Technology
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              We leverage cutting-edge technologies to build scalable, secure, and high-performance solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group p-4 sm:p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border hover:bg-card/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 text-center scroll-animate"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center mb-3 sm:mb-4 text-primary group-hover:text-primary/80 transition-colors duration-300">
                  {tech.icon}
                </div>
                <div className="text-xs sm:text-sm font-medium text-foreground">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20 scroll-animate">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-primary/20">
              <Zap size={14} className="sm:w-4 sm:h-4" />
              Built by AuraByt
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Our <span className="gradient-text">Product</span> Portfolio
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Innovative digital solutions we've built to solve complex business challenges 
              and drive meaningful results across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="scroll-animate"
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
          
          <div className="text-center mt-12 sm:mt-16 scroll-animate">
            <HoverButton
              href="/services"
              variant="secondary"
              glowColor="hsl(217, 91%, 60%)"
              className="shadow-lg text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            >
              View All Solutions
              <ArrowRight size={20} className="ml-2 sm:ml-3 flex-shrink-0" />
            </HoverButton>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-card/20 text-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center scroll-animate">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Ready to Transform Your <span className="gradient-text">Business</span>?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
              Let's discuss how AuraByt can architect your digital future 
              through innovative technology solutions and strategic consulting.
            </p>
            
            <HoverButton
              href="/contact"
              variant="primary"
              glowColor="hsl(217, 91%, 60%)"
              className="shadow-lg hover:shadow-primary/25 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            >
              Get Started Today
              <ArrowRight size={20} className="ml-2 sm:ml-3 flex-shrink-0" />
            </HoverButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
