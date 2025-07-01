import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  Code, 
  BarChart3, 
  ServerCog, 
  ArrowRight, 
  Shield, 
  Zap, 
  Database,
  CheckCircle,
  Quote,
  Star,
  Trophy,
  Target,
  Globe,
  Clock,
  Users
} from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Software Development",
      description: "Custom web applications, mobile apps, and enterprise software solutions built with modern technologies and industry best practices.",
      features: ["React & Next.js", "Node.js & Python", "Cloud Architecture", "API Development"],
      color: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20",
      textColor: "text-blue-500"
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Digital Transformation",
      description: "Strategic digital initiatives that modernize your business processes, optimize workflows, and accelerate growth through innovative technology solutions.",
      features: ["Process Automation", "Data Analytics", "Digital Strategy", "Performance Optimization"],
      color: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20",
      textColor: "text-purple-500"
    },
    {
      icon: <ServerCog size={40} />,
      title: "Infrastructure & Support",
      description: "Reliable cloud infrastructure, robust cybersecurity measures, and comprehensive technical support to keep your business running smoothly 24/7.",
      features: ["Cloud Migration", "Security Audits", "DevOps Implementation", "24/7 Monitoring"],
      color: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20",
      textColor: "text-green-500"
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend", icon: "⚛️" },
    { name: "Node.js", category: "Backend", icon: "🟢" },
    { name: "AWS", category: "Cloud", icon: "☁️" },
    { name: "Docker", category: "DevOps", icon: "🐳" },
    { name: "PostgreSQL", category: "Database", icon: "🐘" },
    { name: "Python", category: "Backend", icon: "🐍" },
    { name: "TypeScript", category: "Frontend", icon: "📘" },
    { name: "Kubernetes", category: "DevOps", icon: "⚙️" }
  ];

  const testimonials = [
    {
      quote: "AuraByt transformed our legacy systems into a modern, scalable platform that increased our efficiency by 300%. Their expertise and professionalism exceeded all our expectations.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp Inc.",
      rating: 5,
      company: "TechCorp"
    },
    {
      quote: "The team's attention to detail and commitment to quality is outstanding. They delivered our complex project on time and 20% under budget while exceeding all requirements.",
      author: "Michael Chen",
      role: "CEO, Innovate Solutions",
      rating: 5,
      company: "Innovate Solutions"
    },
    {
      quote: "Working with AuraByt has been a game-changer for our business. Their solutions are robust, secure, and perfectly tailored to our specific industry needs.",
      author: "Emily Rodriguez",
      role: "Operations Manager, Global Enterprises",
      rating: 5,
      company: "Global Enterprises"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Trophy size={24} />,
      title: "Award-Winning Solutions",
      description: "Recognized for excellence in software development and digital transformation.",
      color: "text-yellow-500"
    },
    {
      icon: <Shield size={24} />,
      title: "Enterprise Security",
      description: "Bank-level security protocols and compliance with industry standards.",
      color: "text-blue-500"
    },
    {
      icon: <Clock size={24} />,
      title: "Proven Track Record",
      description: "99% on-time delivery rate with over 100+ successful projects completed.",
      color: "text-green-500"
    },
    {
      icon: <Globe size={24} />,
      title: "Global Reach",
      description: "Serving clients across North America, Europe, and Asia with 24/7 support.",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="w-full">
      <SEO 
        title="AuraByt – Professional IT Consultancy & Software Development"
        description="Professional IT consultancy services including software development, digital transformation, and infrastructure solutions. Based in Toronto, serving clients globally."
        keywords="IT consultancy, software development, digital transformation, web development, cloud solutions, Toronto"
      />
      
      <Hero />

      {/* Enhanced Services Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary rounded-full text-sm font-medium mb-8 border border-primary/20 backdrop-blur-sm">
              <Zap size={18} />
              <span>Our Services</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Comprehensive <span className="gradient-text">IT Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We provide end-to-end technology services that help businesses modernize, 
              scale, and succeed in the digital age with cutting-edge solutions and expert guidance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-8 ${service.textColor} ${service.borderColor} border-2 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-10">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
                        <CheckCircle size={18} className={`${service.textColor} mr-4 flex-shrink-0`} />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/services" 
                    className={`inline-flex items-center ${service.textColor} font-semibold hover:opacity-80 transition-all group/link`}
                  >
                    Learn more 
                    <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-card/20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="gradient-text">AuraByt</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="text-center space-y-4 p-6 bg-background/50 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:bg-background/80"
              >
                <div className={`mx-auto w-16 h-16 ${item.color} bg-background/50 rounded-xl flex items-center justify-center border border-border`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Technology Stack Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-l from-blue-500/5 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Modern Technology <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We use proven, industry-standard technologies to build reliable, scalable, and future-proof solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:bg-card/80"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <div className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {tech.name}
                </div>
                <div className="text-sm text-muted-foreground">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="section-padding bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden"
              >
                {/* Background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <Quote size={32} className="text-primary/50 mr-4" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg italic group-hover:text-foreground transition-colors">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="border-t border-border/50 pt-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 border border-primary/20">
                        <Users size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-lg">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-blue-500/5 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary rounded-full text-sm font-medium mb-8 border border-primary/20 backdrop-blur-sm">
              <Target size={18} />
              <span>Ready to Get Started?</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Ready to Transform <br />
              <span className="gradient-text">Your Business?</span>
            </h2>
            
            <p className="text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Let's discuss how we can help you achieve your technology goals 
              and drive your business forward with innovative solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-2xl hover:shadow-primary/25 transform hover:-translate-y-1 text-lg"
              >
                Get Started Today
                <ArrowRight size={22} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/portfolio"
                className="group inline-flex items-center justify-center px-10 py-5 border-2 border-border text-foreground font-bold rounded-xl hover:border-primary/30 hover:bg-card/50 transition-all duration-300 backdrop-blur-sm text-lg"
              >
                <Trophy size={20} className="mr-3 text-primary" />
                View Our Work
              </Link>
            </div>
            
            {/* Additional trust indicators */}
            <div className="mt-16 pt-12 border-t border-border/50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;