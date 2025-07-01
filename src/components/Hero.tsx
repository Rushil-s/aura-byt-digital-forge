import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Play, Star, Users, Award, Zap, Shield, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const businessTexts = ['innovation', 'transformation', 'excellence', 'growth'];
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % businessTexts.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [businessTexts.length]);

  const keyFeatures = [
    {
      icon: <Code2 size={20} className="text-blue-400" />,
      title: "Custom Development",
      description: "Tailored solutions for your unique business needs"
    },
    {
      icon: <Zap size={20} className="text-yellow-400" />,
      title: "Rapid Deployment",
      description: "Fast implementation with proven methodologies"
    },
    {
      icon: <Shield size={20} className="text-green-400" />,
      title: "Enterprise Security",
      description: "Bank-level security and compliance standards"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-background">
      {/* Enhanced background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Enhanced Content */}
            <div className="space-y-10">
              {/* Company Badge with enhanced styling */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary rounded-full text-sm font-medium border border-primary/20 backdrop-blur-sm">
                <CheckCircle size={16} />
                <span>Enterprise IT Consultancy</span>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              </div>
              
              {/* Enhanced Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                  <span className="block mb-2">Professional</span>
                  <span className="block gradient-text mb-2">IT Solutions</span>
                  <span className="block text-4xl lg:text-5xl text-muted-foreground font-medium">
                    for Modern Business
                  </span>
                </h1>
                
                {/* Enhanced Dynamic text */}
                <div className="text-2xl lg:text-3xl text-muted-foreground font-light">
                  <span>Driving digital </span>
                  <span 
                    className={`font-semibold text-primary transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
                  >
                    {businessTexts[currentTextIndex]}
                  </span>
                  <span> through expert technology consulting</span>
                </div>
              </div>
              
              {/* Enhanced Description */}
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                AuraByt delivers enterprise-grade IT solutions including software development, 
                digital transformation, and infrastructure services. Based in Toronto, 
                serving clients globally with cutting-edge technology solutions.
              </p>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/25 transform hover:-translate-y-1"
                >
                  Get Started
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                
                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center px-10 py-5 border-2 border-border text-foreground font-semibold rounded-xl hover:border-primary/30 hover:bg-card/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <Play size={18} className="mr-3 text-primary" />
                  Our Services
                </Link>
              </div>
              
              {/* Key Features */}
              <div className="space-y-4 pt-8">
                <div className="text-sm text-muted-foreground mb-4">Why choose AuraByt:</div>
                <div className="space-y-3">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300">
                      <div className="flex-shrink-0 w-10 h-10 bg-background/80 rounded-lg flex items-center justify-center border border-border">
                        {feature.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">{feature.title}</div>
                        <div className="text-sm text-muted-foreground">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Simple Trust Indicator */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-br from-primary/20 to-blue-500/20 border-2 border-background rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary/30 rounded-full" />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Toronto-based</span> • Serving clients globally
                </div>
              </div>
            </div>
            
            {/* Right Column - Simplified Visual */}
            <div className="relative">
              {/* Main Card with clean design */}
              <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-border/50 overflow-hidden">
                {/* Floating background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-primary/10 rounded-full blur-3xl" />
                
                {/* Logo Section */}
                <div className="relative flex justify-center mb-10">
                  <div className="group w-32 h-32 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl flex items-center justify-center border border-primary/20 shadow-lg hover:shadow-primary/20 transition-all duration-300">
                    <img 
                      src="/assets/aurabytlogo.png"
                      alt="AuraByt Logo" 
                      className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                </div>
                
                {/* Company Info */}
                <div className="text-center space-y-6 relative">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">AuraByt Inc.</h3>
                    <p className="text-muted-foreground">Enterprise IT Consultancy</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-border/50">
                      <span className="text-sm font-medium text-foreground">Established</span>
                      <span className="text-sm text-primary font-semibold">2020</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-border/50">
                      <span className="text-sm font-medium text-foreground">Headquarters</span>
                      <span className="text-sm text-primary font-semibold">Toronto, CA</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-border/50">
                      <span className="text-sm font-medium text-foreground">Specialization</span>
                      <span className="text-sm text-primary font-semibold">Enterprise Solutions</span>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Technologies */}
                <div className="mt-10 pt-8 border-t border-border/50 relative">
                  <div className="text-sm text-muted-foreground mb-4 text-center">Core Technologies:</div>
                  <div className="grid grid-cols-3 gap-3">
                    {['React', 'Node.js', 'AWS', 'Docker', 'Python', 'PostgreSQL'].map((tech) => (
                      <div key={tech} className="group text-center">
                        <div className="px-4 py-3 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-medium rounded-xl border border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          {tech}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-xl blur-sm"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-purple-500/30 to-primary/30 rounded-xl blur-sm"></div>
              <div className="absolute top-1/2 -right-4 w-6 h-6 bg-primary/40 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;