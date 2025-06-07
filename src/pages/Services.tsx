import React, { useEffect, useRef, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, Globe, Smartphone, BarChart, Search, Mail, ShieldCheck, Server, Headphones, Settings, Cpu, CheckCircle, Users, MonitorSmartphone, Coffee, Cloud, Share2, TrendingUp, LineChart, Youtube, Instagram, Palette, FileCode, ArrowRight, Zap, Star, Award, Target, Shield } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { HoverButton } from '@/components/ui/hover-glow-button';
import { SpiralBackground } from '@/components/ui/spiral-background';
import SEO from '@/components/SEO';

// Enhanced service card with better visual hierarchy
const ServiceCard = memo(({ service, index }: { service: any; index: number }) => {
  return (
    <div 
      className="relative service-card group overflow-hidden" 
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-full rounded-xl border border-border/30 p-2">
        <GlowingEffect
          spread={30}
          glow={true}
          disabled={false}
          proximity={80}
          inactiveZone={0.01}
          borderWidth={2}
          movementDuration={1.5}
        />
        
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-lg border bg-card/80 backdrop-blur-sm p-8 shadow-sm min-h-[400px]">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform border border-primary/20 backdrop-blur-sm">
                {service.icon}
              </div>
              <div className="text-right">
                <div className="text-xs text-primary font-medium px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                  {service.category}
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Key Features - Visual Icons */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wide text-primary/80">
              What You Get
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {service.features.slice(0, 4).map((feature: any, i: number) => (
                <div key={i} className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-muted-foreground">{feature.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies - Compact Pills */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wide text-primary/80">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.technologies.slice(0, 5).map((tech: string, k: number) => (
                <span key={k} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20 backdrop-blur-sm">
                  {tech}
                </span>
              ))}
              {service.technologies.length > 5 && (
                <span className="px-3 py-1 bg-muted/20 text-muted-foreground rounded-full text-xs">
                  +{service.technologies.length - 5} more
                </span>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t border-border/30">
            <Link 
              to="/contact" 
              className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group/link text-sm"
            >
              Get Started
              <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

// Service category with better layout
const ServiceCategory = memo(({ 
  id, 
  category, 
  description, 
  items, 
  index,
  stats 
}: { 
  id: string; 
  category: string; 
  description: string; 
  items: any[]; 
  index: number;
  stats?: any;
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 ${index % 2 === 1 ? 'bg-card/20 backdrop-blur-sm' : 'bg-background/60 backdrop-blur-sm'} relative overflow-hidden`}
    >
      {/* Background elements */}
      {index % 2 === 0 && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 blur-3xl rounded-full"></div>
        </div>
      )}
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center section-title">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8 border border-primary/20 backdrop-blur-sm">
            <Zap size={16} />
            {category}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {category.split(' ')[0]} <span className="gradient-text">{category.split(' ').slice(1).join(' ')}</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>

          {/* Stats if provided */}
          {stats && (
            <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
              {stats.map((stat: any, i: number) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((service, i) => (
            <ServiceCard 
              key={i} 
              service={service} 
              index={i} 
            />
          ))}
        </div>
      </div>
    </section>
  );
});

const Services = () => {
  const isMobile = useIsMobile();
  const servicesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Optimized scroll animations
    const observerOptions = {
      threshold: [0.1, 0.3],
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            entry.target.classList.add('is-visible');
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const elementsToAnimate = document.querySelectorAll('.service-card, .section-title');
    elementsToAnimate.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const services = [
    {
      id: 'development',
      category: 'Development & Engineering',
      description: "Transform your ideas into powerful digital solutions with our expert development team. We build scalable, secure, and high-performance applications.",
      stats: [
        { value: "500+", label: "Projects Delivered" },
        { value: "99.9%", label: "Uptime Guarantee" },
        { value: "24/7", label: "Support Available" }
      ],
      items: [
        {
          category: "Web Apps",
          title: 'Custom Web Applications',
          description: 'Scalable web applications built with modern frameworks and best practices.',
          features: [
            { name: "React/Next.js", icon: <Code size={16} /> },
            { name: "Real-time Features", icon: <Zap size={16} /> },
            { name: "API Integration", icon: <Database size={16} /> },
            { name: "Cloud Hosting", icon: <Cloud size={16} /> }
          ],
          technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
          icon: <Globe size={32} />
        },
        {
          category: "Mobile",
          title: 'Mobile App Development',
          description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
          features: [
            { name: "Cross-Platform", icon: <Smartphone size={16} /> },
            { name: "Native Performance", icon: <Zap size={16} /> },
            { name: "Push Notifications", icon: <Mail size={16} /> },
            { name: "Offline Support", icon: <Database size={16} /> }
          ],
          technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
          icon: <Smartphone size={32} />
        },
        {
          category: "Enterprise",
          title: 'Enterprise Software',
          description: 'Robust enterprise solutions designed to scale with your business needs.',
          features: [
            { name: "Microservices", icon: <Server size={16} /> },
            { name: "High Availability", icon: <Shield size={16} /> },
            { name: "Auto Scaling", icon: <TrendingUp size={16} /> },
            { name: "Security First", icon: <ShieldCheck size={16} /> }
          ],
          technologies: ['Java', 'Python', 'Kubernetes', 'Docker', 'MongoDB'],
          icon: <Server size={32} />
        },
        {
          category: "API",
          title: 'API Development',
          description: 'Secure, scalable APIs that power your applications and integrations.',
          features: [
            { name: "RESTful APIs", icon: <Code size={16} /> },
            { name: "GraphQL", icon: <Database size={16} /> },
            { name: "Authentication", icon: <ShieldCheck size={16} /> },
            { name: "Documentation", icon: <FileCode size={16} /> }
          ],
          technologies: ['Node.js', 'Express', 'GraphQL', 'JWT', 'Swagger'],
          icon: <FileCode size={32} />
        },
        {
          category: "Cloud",
          title: 'Cloud Solutions',
          description: 'Leverage cloud computing for scalability, reliability, and cost efficiency.',
          features: [
            { name: "Auto Scaling", icon: <TrendingUp size={16} /> },
            { name: "Load Balancing", icon: <Server size={16} /> },
            { name: "Monitoring", icon: <BarChart size={16} /> },
            { name: "Backup & Recovery", icon: <Database size={16} /> }
          ],
          technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Docker'],
          icon: <Cloud size={32} />
        },
        {
          category: "Database",
          title: 'Database Design',
          description: 'Optimized database solutions for performance, security, and scalability.',
          features: [
            { name: "Schema Design", icon: <Database size={16} /> },
            { name: "Performance Tuning", icon: <Zap size={16} /> },
            { name: "Data Migration", icon: <Share2 size={16} /> },
            { name: "Backup Strategy", icon: <ShieldCheck size={16} /> }
          ],
          technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'MySQL'],
          icon: <Database size={32} />
        }
      ]
    }, 
    {
      id: 'marketing',
      category: 'Digital Marketing & Growth',
      description: 'Drive growth and reach your target audience with data-driven marketing strategies that deliver measurable results.',
      stats: [
        { value: "300%", label: "Avg ROI Increase" },
        { value: "50+", label: "Campaigns Launched" },
        { value: "2M+", label: "Leads Generated" }
      ],
      items: [
        {
          category: "SEO",
          title: 'Search Engine Optimization',
          description: 'Improve your search rankings and drive organic traffic with proven SEO strategies.',
          features: [
            { name: "Keyword Research", icon: <Search size={16} /> },
            { name: "On-Page SEO", icon: <FileCode size={16} /> },
            { name: "Link Building", icon: <Share2 size={16} /> },
            { name: "Analytics", icon: <BarChart size={16} /> }
          ],
          technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Search Console', 'GTM'],
          icon: <Search size={32} />
        },
        {
          category: "Social",
          title: 'Social Media Marketing',
          description: 'Build your brand presence and engage with your audience across social platforms.',
          features: [
            { name: "Content Strategy", icon: <Palette size={16} /> },
            { name: "Community Management", icon: <Users size={16} /> },
            { name: "Paid Advertising", icon: <Target size={16} /> },
            { name: "Analytics", icon: <LineChart size={16} /> }
          ],
          technologies: ['Facebook Ads', 'Instagram', 'LinkedIn', 'Twitter', 'TikTok'],
          icon: <Instagram size={32} />
        },
        {
          category: "PPC",
          title: 'Pay-Per-Click Advertising',
          description: 'Maximize ROI with targeted PPC campaigns across Google, Facebook, and more.',
          features: [
            { name: "Campaign Setup", icon: <Target size={16} /> },
            { name: "Keyword Bidding", icon: <TrendingUp size={16} /> },
            { name: "A/B Testing", icon: <BarChart size={16} /> },
            { name: "ROI Tracking", icon: <LineChart size={16} /> }
          ],
          technologies: ['Google Ads', 'Facebook Ads', 'Microsoft Ads', 'LinkedIn Ads'],
          icon: <Target size={32} />
        },
        {
          category: "Email",
          title: 'Email Marketing',
          description: 'Nurture leads and retain customers with personalized email campaigns.',
          features: [
            { name: "Automation", icon: <Settings size={16} /> },
            { name: "Segmentation", icon: <Users size={16} /> },
            { name: "A/B Testing", icon: <BarChart size={16} /> },
            { name: "Analytics", icon: <LineChart size={16} /> }
          ],
          technologies: ['Mailchimp', 'SendGrid', 'HubSpot', 'Klaviyo', 'ConvertKit'],
          icon: <Mail size={32} />
        },
        {
          category: "Content",
          title: 'Content Marketing',
          description: 'Create valuable content that attracts, engages, and converts your audience.',
          features: [
            { name: "Content Strategy", icon: <Palette size={16} /> },
            { name: "Blog Writing", icon: <FileCode size={16} /> },
            { name: "Video Content", icon: <Youtube size={16} /> },
            { name: "Distribution", icon: <Share2 size={16} /> }
          ],
          technologies: ['WordPress', 'Canva', 'Adobe Creative', 'YouTube', 'Medium'],
          icon: <Youtube size={32} />
        },
        {
          category: "Analytics",
          title: 'Marketing Analytics',
          description: 'Track, measure, and optimize your marketing performance with advanced analytics.',
          features: [
            { name: "Performance Tracking", icon: <BarChart size={16} /> },
            { name: "ROI Analysis", icon: <TrendingUp size={16} /> },
            { name: "Custom Dashboards", icon: <MonitorSmartphone size={16} /> },
            { name: "Reporting", icon: <FileCode size={16} /> }
          ],
          technologies: ['Google Analytics', 'Mixpanel', 'Hotjar', 'Tableau', 'Power BI'],
          icon: <BarChart size={32} />
        }
      ]
    }, 
    {
      id: 'infrastructure',
      category: 'Infrastructure & Support',
      description: 'Ensure your business runs smoothly with reliable infrastructure, security, and 24/7 support services.',
      stats: [
        { value: "99.9%", label: "Uptime SLA" },
        { value: "<2min", label: "Response Time" },
        { value: "24/7", label: "Monitoring" }
      ],
      items: [
        {
          category: "Support",
          title: 'Technical Support',
          description: 'Get expert technical support when you need it most with our responsive team.',
          features: [
            { name: "24/7 Availability", icon: <Headphones size={16} /> },
            { name: "Remote Support", icon: <MonitorSmartphone size={16} /> },
            { name: "Issue Tracking", icon: <Settings size={16} /> },
            { name: "Knowledge Base", icon: <FileCode size={16} /> }
          ],
          technologies: ['TeamViewer', 'Zendesk', 'Slack', 'Jira', 'Confluence'],
          icon: <Headphones size={32} />
        },
        {
          category: "Infrastructure",
          title: 'Cloud Infrastructure',
          description: 'Scalable, secure cloud infrastructure designed for modern businesses.',
          features: [
            { name: "Auto Scaling", icon: <TrendingUp size={16} /> },
            { name: "Load Balancing", icon: <Server size={16} /> },
            { name: "Monitoring", icon: <BarChart size={16} /> },
            { name: "Backup & Recovery", icon: <Database size={16} /> }
          ],
          technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform'],
          icon: <Server size={32} />
        },
        {
          category: "Security",
          title: 'Cybersecurity',
          description: 'Protect your business with comprehensive security solutions and monitoring.',
          features: [
            { name: "Threat Detection", icon: <ShieldCheck size={16} /> },
            { name: "Vulnerability Scans", icon: <Search size={16} /> },
            { name: "Security Training", icon: <Users size={16} /> },
            { name: "Compliance", icon: <Award size={16} /> }
          ],
          technologies: ['Fortinet', 'CrowdStrike', 'Splunk', 'Nessus', 'KnowBe4'],
          icon: <ShieldCheck size={32} />
        },
        {
          category: "Consulting",
          title: 'IT Consulting',
          description: 'Strategic IT guidance to align technology with your business objectives.',
          features: [
            { name: "Technology Roadmap", icon: <Target size={16} /> },
            { name: "Digital Transformation", icon: <Zap size={16} /> },
            { name: "Vendor Management", icon: <Users size={16} /> },
            { name: "Cost Optimization", icon: <TrendingUp size={16} /> }
          ],
          technologies: ['Microsoft 365', 'Salesforce', 'ServiceNow', 'Tableau'],
          icon: <Cpu size={32} />
        },
        {
          category: "Migration",
          title: 'Cloud Migration',
          description: 'Seamlessly migrate your systems to the cloud with minimal downtime.',
          features: [
            { name: "Migration Planning", icon: <Target size={16} /> },
            { name: "Data Transfer", icon: <Database size={16} /> },
            { name: "Testing & Validation", icon: <CheckCircle size={16} /> },
            { name: "Training", icon: <Users size={16} /> }
          ],
          technologies: ['AWS Migration', 'Azure Migrate', 'VMware', 'Veeam'],
          icon: <Cloud size={32} />
        },
        {
          category: "Monitoring",
          title: 'System Monitoring',
          description: 'Proactive monitoring and alerting to prevent issues before they impact your business.',
          features: [
            { name: "Real-time Monitoring", icon: <BarChart size={16} /> },
            { name: "Automated Alerts", icon: <Mail size={16} /> },
            { name: "Performance Analytics", icon: <LineChart size={16} /> },
            { name: "Custom Dashboards", icon: <MonitorSmartphone size={16} /> }
          ],
          technologies: ['Datadog', 'New Relic', 'Grafana', 'Prometheus', 'Nagios'],
          icon: <BarChart size={32} />
        }
      ]
    }
  ];

  const scrollToService = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <div className="bg-background relative">
      <SEO 
        title="AuraByt Services - Web Development, Digital Marketing & IT Support"
        description="Explore AuraByt's comprehensive services including web development, digital marketing and IT support solutions tailored for your business needs."
        keywords="web development, digital marketing, IT support, software development, SEO, cloud solutions"
      />
      
      {/* Spiral Background - spans entire page */}
      <SpiralBackground 
        totalDots={350}
        dotRadius={1}
        duration={15}
        dotColor="hsl(217, 91%, 60%)"
        opacity={0.06}
        className="fixed inset-0"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background/80 backdrop-blur-sm text-foreground relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-primary/5 blur-3xl animate-float animation-delay-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8 border border-primary/20 backdrop-blur-sm">
              <Star size={16} />
              Our Services
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-reveal">
              Digital Solutions That <span className="gradient-text">Drive Results</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              From concept to deployment, we deliver comprehensive digital solutions 
              that transform your business and accelerate growth.
            </p>
            
            {/* Quick navigation */}
            <div className="flex flex-wrap justify-center gap-4">
              {services.map((service, index) => (
                <button 
                  key={service.id}
                  onClick={() => scrollToService(service.id)}
                  className="px-6 py-3 bg-card/50 hover:bg-primary/10 rounded-lg transition-all duration-300 border border-border hover:border-primary/30 backdrop-blur-sm group"
                >
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                    {service.category.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div ref={servicesRef}>
        {/* Services Sections */}
        {services.map((serviceCategory, index) => (
          <ServiceCategory 
            key={serviceCategory.id}
            id={serviceCategory.id}
            category={serviceCategory.category}
            description={serviceCategory.description}
            items={serviceCategory.items}
            index={index}
            stats={serviceCategory.stats}
          />
        ))}
      </div>

      {/* Process Section */}
      <section className="py-20 bg-card/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We understand your goals, challenges, and requirements" },
              { step: "02", title: "Strategy", description: "We develop a comprehensive plan and roadmap" },
              { step: "03", title: "Execution", description: "We build and implement your solution with precision" },
              { step: "04", title: "Support", description: "We provide ongoing support and optimization" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20 backdrop-blur-sm">
                  <span className="text-primary font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background/60 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="relative h-full rounded-xl border border-border/30 p-2">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={100}
                  inactiveZone={0.05}
                  borderWidth={2}
                  movementDuration={2}
                />
                
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-border/30 bg-background/40 backdrop-blur-md p-12 shadow-sm text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready to Get <span className="gradient-text">Started</span>?
                  </h2>
                  <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
                    Let's discuss your project and create a solution that drives real results for your business.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <HoverButton
                      href="/contact"
                      variant="primary"
                      glowColor="hsl(217, 91%, 60%)"
                      className="shadow-lg hover:shadow-primary/25"
                    >
                      Start Your Project
                      <ArrowRight size={20} className="ml-3" />
                    </HoverButton>
                    
                    <HoverButton
                      href="tel:+14379252744"
                      variant="secondary"
                      glowColor="hsl(217, 91%, 60%)"
                      className="shadow-lg"
                    >
                      Call Us Now
                    </HoverButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;