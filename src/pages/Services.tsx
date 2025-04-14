
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, Database, Globe, Smartphone, BarChart, Search, Mail, ShieldCheck, 
  Server, Headphones, Settings, Cpu, CheckCircle, Users, MonitorSmartphone, Coffee,
  Cloud, Share2, TrendingUp, LineChart, Youtube, Instagram, Palette, FileCode
} from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Animation for elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.style.opacity = '1';
        }
      });
    }, {
      threshold: 0.1
    });
    
    document.querySelectorAll('.service-card').forEach(card => {
      card.style.opacity = '0';
      observer.observe(card);
    });
    
    document.querySelectorAll('.section-title').forEach(title => {
      title.style.opacity = '0';
      observer.observe(title);
    });
    
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 'web-development',
      category: 'Software & Web Development',
      description: "We create cutting-edge digital solutions that help businesses thrive in today's online landscape.",
      items: [
        {
          icon: <Globe size={36} />,
          title: 'Website Development',
          description: 'Custom responsive websites that look great on any device and drive conversions.',
          benefits: [
            'Mobile-first responsive design',
            'Optimized for speed and performance',
            'SEO-friendly architecture',
            'User-friendly interfaces',
            'Modern design principles'
          ],
          technologies: ['React', 'Next.js', 'Vue', 'WordPress', 'Tailwind CSS']
        },
        {
          icon: <Code size={36} />,
          title: 'Web Applications',
          description: 'Custom web applications that streamline your business operations and enhance productivity.',
          benefits: [
            'Intuitive user interfaces',
            'Scalable architecture',
            'Secure data management',
            'Real-time features',
            'Custom admin dashboards'
          ],
          technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL']
        },
        {
          icon: <Smartphone size={36} />,
          title: 'Mobile App Development',
          description: 'Native and cross-platform mobile applications designed for maximum user engagement.',
          benefits: [
            'Native performance',
            'Cross-platform compatibility',
            'Engaging user experience',
            'Offline functionality',
            'Push notifications'
          ],
          technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
        },
        {
          icon: <Database size={36} />,
          title: 'Database Solutions',
          description: 'Effective database design and management to ensure your data is secure and accessible.',
          benefits: [
            'Optimized data structures',
            'High-performance queries',
            'Secure data storage',
            'Data migration services',
            'Backup and recovery solutions'
          ],
          technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase']
        },
        {
          icon: <FileCode size={36} />,
          title: 'Custom API Development',
          description: 'Build robust API solutions that connect your services and applications seamlessly.',
          benefits: [
            'RESTful and GraphQL APIs',
            'Secure authentication',
            'Comprehensive documentation',
            'Performance optimization',
            'Third-party integrations'
          ],
          technologies: ['Node.js', 'Express', 'GraphQL', 'Django', 'Ruby on Rails']
        },
        {
          icon: <Cloud size={36} />,
          title: 'Cloud Solutions',
          description: 'Leverage the power of cloud computing to scale your applications and reduce infrastructure costs.',
          benefits: [
            'Scalable infrastructure',
            'Reduced operational costs',
            'Improved reliability',
            'Global deployment',
            'Automated backups'
          ],
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
          icon: <Search size={36} />,
          title: 'SEO Optimization',
          description: "Improve your website's visibility in search engines and drive organic traffic.",
          benefits: [
            'Keyword research and strategy',
            'On-page and off-page optimization',
            'Regular performance reporting',
            'Local SEO optimization',
            'Technical SEO audits'
          ],
          technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Moz', 'Google Search Console']
        },
        {
          icon: <BarChart size={36} />,
          title: 'Social Media Marketing',
          description: 'Build and engage your audience on social media platforms to increase brand awareness.',
          benefits: [
            'Content strategy development',
            'Community management',
            'Performance analytics',
            'Targeted advertising',
            'Competitor analysis'
          ],
          technologies: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok']
        },
        {
          icon: <Mail size={36} />,
          title: 'Email Marketing',
          description: 'Targeted email campaigns that convert prospects into customers and drive repeat business.',
          benefits: [
            'Custom email templates',
            'Campaign automation',
            'Performance analytics and optimization',
            'Segmentation strategies',
            'A/B testing'
          ],
          technologies: ['Mailchimp', 'SendGrid', 'ActiveCampaign', 'HubSpot', 'Klaviyo']
        },
        {
          icon: <LineChart size={36} />,
          title: 'PPC Advertising',
          description: 'Maximize your ROI with targeted pay-per-click campaigns across major platforms.',
          benefits: [
            'Strategic keyword targeting',
            'Ad copy optimization',
            'Landing page development',
            'Conversion tracking',
            'Budget management'
          ],
          technologies: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Microsoft Ads', 'Amazon Ads']
        },
        {
          icon: <Youtube size={36} />,
          title: 'Content Marketing',
          description: 'Create valuable content that attracts, engages, and converts your target audience.',
          benefits: [
            'Content strategy',
            'Blog post creation',
            'Video production',
            'Infographics and visual content',
            'Content distribution'
          ],
          technologies: ['WordPress', 'YouTube', 'Medium', 'Canva', 'Hootsuite']
        },
        {
          icon: <TrendingUp size={36} />,
          title: 'Growth Marketing',
          description: 'Data-driven strategies to rapidly scale your customer acquisition and retention.',
          benefits: [
            'Conversion rate optimization',
            'User acquisition strategies',
            'Retention marketing',
            'Marketing automation',
            'Analytics and reporting'
          ],
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
          icon: <Headphones size={36} />,
          title: 'Technical Support',
          description: 'Responsive technical support to resolve issues quickly and minimize downtime.',
          benefits: [
            'Rapid response times',
            'Remote and on-site support',
            'Proactive issue prevention',
            '24/7 monitoring',
            'Dedicated support team'
          ],
          technologies: ['TeamViewer', 'Zendesk', 'Freshdesk', 'ServiceNow', 'Jira']
        },
        {
          icon: <Server size={36} />,
          title: 'Network Infrastructure',
          description: 'Design and manage reliable network infrastructure to support your business needs.',
          benefits: [
            'Secure network architecture',
            'Scalable solutions',
            'Regular maintenance',
            'Performance optimization',
            'Redundancy planning'
          ],
          technologies: ['Cisco', 'Juniper', 'Meraki', 'VMware', 'Aruba']
        },
        {
          icon: <ShieldCheck size={36} />,
          title: 'Cybersecurity',
          description: 'Protect your business from cyber threats with our comprehensive security solutions.',
          benefits: [
            'Security audits and assessments',
            'Threat prevention',
            'Security training for staff',
            'Incident response planning',
            'Compliance management'
          ],
          technologies: ['Fortinet', 'Palo Alto', 'CrowdStrike', 'KnowBe4', 'SentinelOne']
        },
        {
          icon: <Cpu size={36} />,
          title: 'Hardware Solutions',
          description: 'Expert advice on hardware selection, deployment, and maintenance.',
          benefits: [
            'Customized specifications',
            'Cost-effective procurement',
            'Regular maintenance',
            'Lifecycle management',
            'Hardware inventory tracking'
          ],
          technologies: ['Dell', 'HP', 'Lenovo', 'Apple', 'Microsoft']
        },
        {
          icon: <MonitorSmartphone size={36} />,
          title: 'IT Consulting',
          description: 'Strategic IT consulting to align your technology with your business goals.',
          benefits: [
            'Technology roadmap development',
            'IT budget planning',
            'Digital transformation strategies',
            'Vendor management',
            'Risk assessment'
          ],
          technologies: ['Microsoft 365', 'Google Workspace', 'Salesforce', 'AWS', 'Azure']
        },
        {
          icon: <Cloud size={36} />,
          title: 'Cloud Migration',
          description: 'Seamlessly transition your infrastructure and applications to the cloud.',
          benefits: [
            'Migration strategy',
            'Risk mitigation',
            'Minimal downtime',
            'Cost optimization',
            'Post-migration support'
          ],
          technologies: ['AWS', 'Azure', 'Google Cloud', 'VMware Cloud', 'IBM Cloud']
        }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section - Enhanced with animations */}
      <section className="pt-32 pb-24 bg-aurabyt-navy text-white relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-aurabyt-purple/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-aurabyt-blue/10 blur-3xl animate-float animation-delay-300"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-aurabyt-indigo/10 blur-3xl animate-float animation-delay-700"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-reveal">
              Our <span className="animated-gradient-text">Services</span>
            </h1>
            <p className="text-xl opacity-90 mb-8 animate-fade-in text-reveal-delay-1" style={{ animationDelay: '0.2s' }}>
              We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
            </p>
            
            {/* Animated icon row */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {[<Code />, <BarChart />, <Server />].map((icon, i) => (
                <div 
                  key={i}
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white animate-fade-in"
                  style={{ animationDelay: `${0.4 + i * 0.2}s` }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-1">
              <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse-slow"></div>
            </div>
            <span className="text-sm text-white/70 mt-2">Scroll</span>
          </div>
        </div>
      </section>

      {/* Services Sections with enhanced animations */}
      {services.map((serviceCategory, index) => (
        <section 
          key={serviceCategory.id}
          id={serviceCategory.id}
          className={`py-20 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'} relative overflow-hidden`}
        >
          {/* Background elements */}
          {index % 2 === 0 && (
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-aurabyt-purple/5 to-transparent opacity-60 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-radial from-aurabyt-blue/5 to-transparent opacity-60 blur-2xl"></div>
              <div className="absolute inset-0 noise-bg"></div>
            </div>
          )}
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center section-title">
              <h2 className="text-3xl font-bold mb-4">{serviceCategory.category}</h2>
              <div className="w-16 h-1 bg-primary mx-auto"></div>
              <p className="mt-4 text-gray-600">{serviceCategory.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategory.items.map((service, i) => (
                <div 
                  key={i}
                  className="bg-white rounded-xl shadow-md p-8 hover-card relative service-card group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-aurabyt-purple/5 to-aurabyt-blue/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                  
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <h4 className="font-semibold mb-3">Key Benefits:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircle className="text-primary mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Technologies section */}
                  <h4 className="font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, k) => (
                      <span key={k} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section with enhanced animations */}
      <section className="py-16 bg-purple-gradient text-white relative overflow-hidden">
        {/* Background animation elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-white/5 blur-3xl rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/3 w-1/3 h-1/2 bg-white/5 blur-3xl rounded-full animate-float animation-delay-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Contact us today to discuss how we can help your business grow.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-colors btn-hover-shine group"
            >
              Contact Us
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
