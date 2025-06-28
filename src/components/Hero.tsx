import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
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

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Company Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                <CheckCircle size={16} />
                Enterprise IT Consultancy
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  <span className="block">Professional</span>
                  <span className="block gradient-text">IT Solutions</span>
                  <span className="block">for Modern Business</span>
                </h1>
                
                {/* Dynamic text */}
                <div className="text-xl text-muted-foreground">
                  <span>Driving digital </span>
                  <span 
                    className={`font-semibold text-primary transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
                  >
                    {businessTexts[currentTextIndex]}
                  </span>
                  <span> through expert technology consulting</span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                AuraByt delivers enterprise-grade IT solutions including software development, 
                digital transformation, and infrastructure services. Based in Toronto, 
                serving clients globally.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/25"
                >
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-border text-foreground font-semibold rounded-lg hover:border-primary/30 hover:bg-card/50 transition-all"
                >
                  Our Services
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-8 pt-8 border-t border-border">
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Toronto-based</span> • Serving clients globally
                </div>
              </div>
            </div>
            
            {/* Right Column - Visual */}
            <div className="relative">
              <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-border">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                    <img 
                      src="/assets/aurabytlogo.png"
                      alt="AuraByt Logo" 
                      className="w-16 h-16 object-contain" 
                    />
                  </div>
                </div>
                
                {/* Services Preview */}
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Our Expertise</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      'Software Development',
                      'Digital Transformation', 
                      'Cloud Infrastructure',
                      'IT Consulting'
                    ].map((service, index) => (
                      <div key={service} className="flex items-center p-3 bg-background/50 rounded-lg border border-border/50">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-sm text-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="text-sm text-muted-foreground mb-3">Technologies we use:</div>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'AWS', 'Docker', 'Python', 'PostgreSQL'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;