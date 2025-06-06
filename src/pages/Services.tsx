import React, { useEffect, useRef, memo } from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, Globe, Smartphone, BarChart, Search, Mail, ShieldCheck, Server, Headphones, Settings, Cpu, CheckCircle, Users, MonitorSmartphone, Coffee, Cloud, Share2, TrendingUp, LineChart, Youtube, Instagram, Palette, FileCode } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import SEO from '@/components/SEO';

// Memoize service components for performance
const ServiceCategory = memo(({ 
  id, 
  category, 
  description, 
  items, 
  index 
}: { 
  id: string; 
  category: string; 
  description: string; 
  items: any[]; 
  index: number;
}) => {
  return (
    <section 
      id={id} 
      className={`py-12 md:py-20 ${index % 2 === 1 ? 'bg-card/20' : 'bg-background'} relative overflow-hidden`}
    >
      {/* Background elements */}
      {index % 2 === 0 && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 blur-3xl rounded-full"></div>
        </div>
      )}
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center section-title">
          <h2 className="text-3xl font-bold mb-4">{category}</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((service, i) => (
            <ServiceItem 
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

// Memoize service item component
const ServiceItem = memo(({ service, index }: { service: any; index: number }) => {
  return (
    <div 
      className="professional-card relative service-card group" 
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-6 text-primary group-hover:scale-110 transition-transform">
        {service.icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
      <p className="text-muted-foreground mb-4 md:mb-6">{service.description}</p>
      
      <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">Key Benefits:</h4>
      <ul className="space-y-1 md:space-y-2 mb-4 md:mb-6 text-sm md:text-base">
        {service.benefits.slice(0, 4).map((benefit: string, j: number) => (
          <li key={j} className="flex items-start">
            <CheckCircle className="text-primary mr-2 h-4 w-4 md:h-5 md:w-5 mt-0.5 flex-shrink-0" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      
      {/* Technologies section */}
      <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">Technologies:</h4>
      <div className="flex flex-wrap gap-1 md:gap-2">
        {service.technologies.map((tech: string, k: number) => (
          <span key={k} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs md:text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
});

const Services = () => {
  const isMobile = useIsMobile();
  const servicesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create an observer to handle animation of elements as they come into view
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Use requestAnimationFrame for smoother animations
          requestAnimationFrame(() => {
            entry.target.classList.add('animate-fade-in');
            // Cast to HTMLElement to access style property
            (entry.target as HTMLElement).style.opacity = '1';
          });
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe elements in batches to improve performance
    const observeElements = () => {
      document.querySelectorAll('.service-card:not([style*="opacity: 1"])').forEach((card, index) => {
        // Stagger the observations to prevent jank
        setTimeout(() => {
          (card as HTMLElement).style.opacity = '0';
          observer.observe(card);
        }, index % 10 * 50); // Batch in groups of 10
      });
      
      document.querySelectorAll('.section-title:not([style*="opacity: 1"])').forEach(title => {
        (title as HTMLElement).style.opacity = '0';
        observer.observe(title);
      });
    };
    
    // Execute after a short delay to ensure the DOM is ready
    const timer = setTimeout(observeElements, 100);
    
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
  
  const services = [
    {
      id: 'web-development',
      category: 'Software & Web Development',
      description: "We create cutting-edge digital solutions that help businesses thrive in today's online landscape.",
      items: [
        {
          icon: <Globe size={32} />,
          title: 'Website Development',
          description: 'Custom responsive websites that look great on any device and drive conversions.',
          benefits: ['Mobile-first responsive design', 'Optimized for speed and performance', 'SEO-friendly architecture', 'User-friendly interfaces', 'Modern design principles'],
          technologies: ['React', 'Next.js', 'Vue', 'WordPress', 'Tailwind CSS']
        },
        {
          icon: <Code size={32} />,
          title: 'Web Applications',
          description: 'Custom web applications that streamline your business operations and enhance productivity.',
          benefits: ['Intuitive user interfaces', 'Scalable architecture', 'Secure data management', 'Real-time features', 'Custom admin dashboards'],
          technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL']
        },
        {
          icon: <Smartphone size={32} />,
          title: 'Mobile App Development',
          description: 'Native and cross-platform mobile applications designed for maximum user engagement.',
          benefits: ['Native performance', 'Cross-platform compatibility', 'Engaging user experience', 'Offline functionality', 'Push notifications'],
          technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
        },
        {
          icon: <Database size={32} />,
          title: 'Database Solutions',
          description: 'Effective database design and management to ensure your data is secure and accessible.',
          benefits: ['Optimized data structures', 'High-performance queries', 'Secure data storage', 'Data migration services', 'Backup and recovery solutions'],
          technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase']
        },
        {
          icon: <FileCode size={32} />,
          title: 'Custom API Development',
          description: 'Build robust API solutions that connect your services and applications seamlessly.',
          benefits: ['RESTful and GraphQL APIs', 'Secure authentication', 'Comprehensive documentation', 'Performance optimization', 'Third-party integrations'],
          technologies: ['Node.js', 'Express', 'GraphQL', 'Django', 'Ruby on Rails']
        },
        {
          icon: <Cloud size={32} />,
          title: 'Cloud Solutions',
          description: 'Leverage the power of cloud computing to scale your applications and reduce infrastructure costs.',
          benefits: ['Scalable infrastructure', 'Reduced operational costs', 'Improved reliability', 'Global deployment', 'Automated backups'],
          technologies: ['AWS', 'Google Cloud', 'Azure', 'Digital Ocean', 'Heroku']
        }
      ]
    }, 
    {
      id: 'digital-marketing',
      category: 'Digital Marketing',
      description: 'Boost your online presence and reach your target audience through our comprehensive digital marketing strategies.',
      items: [
        {
          icon: <Search size={32} />,
          title: 'SEO Optimization',
          description: "Improve your website's visibility in search engines and drive organic traffic.",
          benefits: ['Keyword research and strategy', 'On-page and off-page optimization', 'Regular performance reporting', 'Local SEO optimization', 'Technical SEO audits'],
          technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Moz', 'Google Search Console']
        },
        {
          icon: <BarChart size={32} />,
          title: 'Social Media Marketing',
          description: 'Build and engage your audience on social media platforms to increase brand awareness.',
          benefits: ['Content strategy development', 'Community management', 'Performance analytics', 'Targeted advertising', 'Competitor analysis'],
          technologies: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok']
        },
        {
          icon: <Mail size={32} />,
          title: 'Email Marketing',
          description: 'Targeted email campaigns that convert prospects into customers and drive repeat business.',
          benefits: ['Custom email templates', 'Campaign automation', 'Performance analytics and optimization', 'Segmentation strategies', 'A/B testing'],
          technologies: ['Mailchimp', 'SendGrid', 'ActiveCampaign', 'HubSpot', 'Klaviyo']
        },
        {
          icon: <LineChart size={32} />,
          title: 'PPC Advertising',
          description: 'Maximize your ROI with targeted pay-per-click campaigns across major platforms.',
          benefits: ['Strategic keyword targeting', 'Ad copy optimization', 'Landing page development', 'Conversion tracking', 'Budget management'],
          technologies: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Microsoft Ads', 'Amazon Ads']
        },
        {
          icon: <Youtube size={32} />,
          title: 'Content Marketing',
          description: 'Create valuable content that attracts, engages, and converts your target audience.',
          benefits: ['Content strategy', 'Blog post creation', 'Video production', 'Infographics and visual content', 'Content distribution'],
          technologies: ['WordPress', 'YouTube', 'Medium', 'Canva', 'Hootsuite']
        },
        {
          icon: <TrendingUp size={32} />,
          title: 'Growth Marketing',
          description: 'Data-driven strategies to rapidly scale your customer acquisition and retention.',
          benefits: ['Conversion rate optimization', 'User acquisition strategies', 'Retention marketing', 'Marketing automation', 'Analytics and reporting'],
          technologies: ['Mixpanel', 'Hotjar', 'Optimizely', 'Google Analytics', 'Customer.io']
        }
      ]
    }, 
    {
      id: 'it-support',
      category: 'IT Support & Infrastructure',
      description: 'Ensure your business operations run smoothly with our comprehensive IT support and infrastructure solutions.',
      items: [
        {
          icon: <Headphones size={32} />,
          title: 'Technical Support',
          description: 'Responsive technical support to resolve issues quickly and minimize downtime.',
          benefits: ['Rapid response times', 'Remote and on-site support', 'Proactive issue prevention', '24/7 monitoring', 'Dedicated support team'],
          technologies: ['TeamViewer', 'Zendesk', 'Freshdesk', 'ServiceNow', 'Jira']
        },
        {
          icon: <Server size={32} />,
          title: 'Network Infrastructure',
          description: 'Design and manage reliable network infrastructure to support your business needs.',
          benefits: ['Secure network architecture', 'Scalable solutions', 'Regular maintenance', 'Performance optimization', 'Redundancy planning'],
          technologies: ['Cisco', 'Juniper', 'Meraki', 'VMware', 'Aruba']
        },
        {
          icon: <ShieldCheck size={32} />,
          title: 'Cybersecurity',
          description: 'Protect your business from cyber threats with our comprehensive security solutions.',
          benefits: ['Security audits and assessments', 'Threat prevention', 'Security training for staff', 'Incident response planning', 'Compliance management'],
          technologies: ['Fortinet', 'Palo Alto', 'CrowdStrike', 'KnowBe4', 'SentinelOne']
        },
        {
          icon: <Cpu size={32} />,
          title: 'Hardware Solutions',
          description: 'Expert advice on hardware selection, deployment, and maintenance.',
          benefits: ['Customized specifications', 'Cost-effective procurement', 'Regular maintenance', 'Lifecycle management', 'Hardware inventory tracking'],
          technologies: ['Dell', 'HP', 'Lenovo', 'Apple', 'Microsoft']
        },
        {
          icon: <MonitorSmartphone size={32} />,
          title: 'IT Consulting',
          description: 'Strategic IT consulting to align your technology with your business goals.',
          benefits: ['Technology roadmap development', 'IT budget planning', 'Digital transformation strategies', 'Vendor management', 'Risk assessment'],
          technologies: ['Microsoft 365', 'Google Workspace', 'Salesforce', 'AWS', 'Azure']
        },
        {
          icon: <Cloud size={32} />,
          title: 'Cloud Migration',
          description: 'Seamlessly transition your infrastructure and applications to the cloud.',
          benefits: ['Migration strategy', 'Risk mitigation', 'Minimal downtime', 'Cost optimization', 'Post-migration support'],
          technologies: ['AWS', 'Azure', 'Google Cloud', 'VMware Cloud', 'IBM Cloud']
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
    <div className="bg-background">
      <SEO 
        title="AuraByt Services - Web Development, Digital Marketing & IT Support"
        description="Explore AuraByt's comprehensive services including web development, digital marketing and IT support solutions tailored for your business needs."
        keywords="web development, digital marketing, IT support, software development, SEO, cloud solutions"
      />
      
      {/* Services Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-background text-foreground relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-primary/5 blur-3xl animate-float animation-delay-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-reveal">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl opacity-90 mb-8 animate-fade-in text-reveal-delay-1" style={{
              animationDelay: '0.2s'
            }}>
              We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
            </p>
            
            {/* Quick navigation buttons */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mt-8">
              {services.map((service, index) => (
                <button 
                  key={service.id}
                  onClick={() => scrollToService(service.id)}
                  className="px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-all duration-300 animate-fade-in flex items-center gap-2"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {index === 0 ? <Code size={18} /> : index === 1 ? <BarChart size={18} /> : <Server size={18} />}
                  <span className="hidden sm:inline">{service.category}</span>
                  <span className="inline sm:hidden">{service.category.split(' ')[0]}</span>
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
          />
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background animation elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-white/5 blur-3xl rounded-full animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Get Started?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              Contact us today to discuss how we can help your business grow.
            </p>
            <Link to="/contact" className="inline-block px-6 py-3 md:px-8 md:py-4 bg-background text-primary rounded-lg font-bold hover:bg-background/90 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;