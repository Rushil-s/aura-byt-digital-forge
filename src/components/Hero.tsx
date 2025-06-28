import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const businessTexts = ['innovation', 'transformation', 'excellence', 'growth', 'success'];
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
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-slate-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px)
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                <CheckCircle size={16} />
                Enterprise IT Consultancy
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  <span className="block">Professional</span>
                  <span className="block text-blue-600">IT Solutions</span>
                  <span className="block">for Modern Business</span>
                </h1>
                
                {/* Dynamic text */}
                <div className="text-xl text-slate-600">
                  <span>Driving digital </span>
                  <span 
                    className={`font-semibold text-blue-600 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
                  >
                    {businessTexts[currentTextIndex]}
                  </span>
                  <span> through expert technology consulting</span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                AuraByt delivers enterprise-grade IT solutions including software development, 
                digital transformation, and infrastructure services. Based in Toronto, 
                serving clients globally.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all"
                >
                  Our Services
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-8 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <Users className="text-blue-600" size={20} />
                  <span className="text-sm text-slate-600">100+ Clients Served</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-blue-600" size={20} />
                  <span className="text-sm text-slate-600">99% Success Rate</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Visual */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100">
                    <img 
                      src="/assets/aurabytlogo.png"
                      alt="AuraByt Logo" 
                      className="w-16 h-16 object-contain" 
                    />
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-900">500+</div>
                    <div className="text-sm text-slate-600">Projects Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-900">5+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-900">24/7</div>
                    <div className="text-sm text-slate-600">Support</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-900">99%</div>
                    <div className="text-sm text-slate-600">Client Satisfaction</div>
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="text-sm text-slate-600 mb-3">Technologies we use:</div>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'AWS', 'Docker', 'Python', 'PostgreSQL'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-lg opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-lg opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;