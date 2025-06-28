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
  Quote
} from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: "Software Development",
      description: "Custom web applications, mobile apps, and enterprise software solutions built with modern technologies and best practices.",
      features: ["React & Next.js", "Node.js & Python", "Cloud Architecture", "API Development"],
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Digital Transformation",
      description: "Strategic digital initiatives that modernize your business processes and accelerate growth through technology.",
      features: ["Process Automation", "Data Analytics", "Digital Strategy", "Performance Optimization"],
    },
    {
      icon: <ServerCog size={32} />,
      title: "Infrastructure & Support",
      description: "Reliable cloud infrastructure, cybersecurity, and technical support to keep your business running smoothly.",
      features: ["Cloud Migration", "Security Audits", "DevOps", "Monitoring"],
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Python", category: "Backend" }
  ];

  const testimonials = [
    {
      quote: "AuraByt transformed our legacy systems into a modern, scalable platform. Their expertise and professionalism exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp Inc."
    },
    {
      quote: "The team's attention to detail and commitment to quality is outstanding. They delivered our project on time and within budget.",
      author: "Michael Chen",
      role: "CEO, Innovate Solutions"
    },
    {
      quote: "Working with AuraByt has been a game-changer for our business. Their solutions are robust, secure, and perfectly tailored to our needs.",
      author: "Emily Rodriguez",
      role: "Operations Manager, Global Enterprises"
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

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 border border-primary/20">
              <Zap size={16} />
              Our Services
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Comprehensive IT Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide end-to-end technology services that help businesses modernize, 
              scale, and succeed in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="professional-card"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary border border-primary/20">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  Learn more 
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="section-padding bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Modern Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground">
              We use proven, industry-standard technologies to build reliable and scalable solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 text-center hover:shadow-md transition-all hover:border-primary/30"
              >
                <div className="text-lg font-semibold text-foreground mb-2">{tech.name}</div>
                <div className="text-sm text-muted-foreground">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="professional-card"
              >
                <Quote size={24} className="text-primary/50 mb-4" />
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Let's discuss how we can help you achieve your technology goals 
              and drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/25"
              >
                Get Started Today
                <ArrowRight size={20} className="ml-2" />
              </Link>
              
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-border text-foreground font-semibold rounded-lg hover:border-primary/30 hover:bg-card/50 transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;