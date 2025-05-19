// src/pages/Services.tsx
import React, { useEffect, useRef, memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, Database, Globe, Smartphone, BarChart, Search, Mail, ShieldCheck, 
  Server, Settings, FileCode, Cloud, Briefcase, FileText, Scale, Brain,
  Gamepad, Trophy, LineChart, ScrollText, FileSpreadsheet, FormInput,
  Phone, GraduationCap, Bot
} from 'lucide-react';
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
      className={`py-12 md:py-20 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'} relative overflow-hidden`}
    >
      {/* Background elements */}
      {index % 2 === 0 && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-aurabyt-purple/5 to-transparent opacity-60 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-radial from-aurabyt-blue/5 to-transparent opacity-60 blur-2xl"></div>
        </div>
      )}
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center section-title">
          <h2 className="text-3xl font-bold mb-4">{category}</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">{description}</p>
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

const ServiceItem = memo(({ service, index }: { service: any; index: number }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md p-6 md:p-8 hover-card relative service-card group" 
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-aurabyt-purple/5 to-aurabyt-blue/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
      
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-6 text-primary group-hover:scale-110 transition-transform">
        {service.icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
      <p className="text-gray-600 mb-4 md:mb-6">{service.description}</p>
      
      {service.features && (
        <>
          <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">Key Features:</h4>
          <ul className="space-y-1 md:space-y-2 mb-4 md:mb-6 text-sm md:text-base">
            {service.features.map((feature: string, j: number) => (
              <li key={j} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {service.technologies && (
        <>
          <h4 className="font-semibold mb-2 md:mb-3 text-sm md:text-base">Technologies:</h4>
          <div className="flex flex-wrap gap-1 md:gap-2">
            {service.technologies.map((tech: string, k: number) => (
              <span key={k} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs md:text-sm">
                {tech}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
});

const Services = () => {
  const isMobile = useIsMobile();
  const servicesRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      id: 'healthcare',
      category: 'Healthcare Solutions',
      description: "Advanced AI-powered solutions for healthcare providers and medical billing.",
      items: [
        {
          icon: <FileSpreadsheet size={32} />,
          title: 'ClaimByt',
          description: 'AI-powered medical claims automation & RCM platform.',
          features: [
            'Eliminate denials',
            'Automate workflows',
            'Real-time revenue insights',
            'Seamless EHR integration'
          ]
        },
        {
          icon: <Brain size={32} />,
          title: 'AuraClaim',
          description: 'Enterprise-grade AI billing engine with advanced analytics.',
          features: [
            'Plug-and-play EHR integration',
            '99%+ coding accuracy',
            'Actionable dashboard analytics',
            'Automated compliance checks'
          ]
        }
      ]
    },
    {
      id: 'gaming-entertainment',
      category: 'Gaming & Entertainment',
      description: "Innovative platforms for gaming enthusiasts and sports fans.",
      items: [
        {
          icon: <Gamepad size={32} />,
          title: 'SkinsLegion',
          description: 'Premium CS:GO & in-game item rentals with insurance coverage.',
          features: [
            'Secure item rentals',
            'Real insurance coverage',
            'Passive income generation',
            'Automated transactions'
          ]
        },
        {
          icon: <Trophy size={32} />,
          title: 'CodeLap',
          description: 'Micro-contest coding platform for skill development.',
          features: [
            'Daily coding challenges',
            'Live leaderboards',
            'Sponsor-driven tournaments',
            'Skill-based matchmaking'
          ]
        },
        {
          icon: <LineChart size={32} />,
          title: 'TheCricLine',
          description: 'Fantasy cricket & prediction hub for enthusiasts.',
          features: [
            'Dynamic match data',
            'Real-time scorecards',
            'Community leaderboards',
            'Advanced statistics'
          ]
        }
      ]
    },
    {
      id: 'business-solutions',
      category: 'Business Solutions',
      description: "Comprehensive tools for business operations and compliance.",
      items: [
        {
          icon: <Briefcase size={32} />,
          title: 'StartByt',
          description: 'AI-driven company formation & legal-docs assistant.',
          features: [
            'Business registration',
            'Document drafting',
            'Secure filing storage',
            'Compliance monitoring'
          ]
        },
        {
          icon: <ShieldCheck size={32} />,
          title: 'VaultByt',
          description: 'Encrypted document vault with enterprise-grade security.',
          features: [
            'AES-256 encryption',
            'Access controls',
            'Audit trails',
            'Secure sharing'
          ]
        },
        {
          icon: <ScrollText size={32} />,
          title: 'TaxByt',
          description: 'Automated tax-filing & compliance platform.',
          features: [
            'Guided workflows',
            'Real-time error checks',
            'CRA/IRS integration',
            'Document management'
          ]
        }
      ]
    },
    {
      id: 'professional-tools',
      category: 'Professional Tools',
      description: "Essential tools for career development and professional services.",
      items: [
        {
          icon: <FileText size={32} />,
          title: 'ResumeByt',
          description: 'AI-enhanced resume builder & optimizer.',
          features: [
            'ATS optimization',
            'Keyword analysis',
            'Template customization',
            'Job matching'
          ]
        },
        {
          icon: <FormInput size={32} />,
          title: 'FormByt',
          description: 'No-code form & survey platform with analytics.',
          features: [
            'Drag-and-drop builder',
            'Conditional logic',
            'Response analytics',
            'Integration options'
          ]
        }
      ]
    },
    {
      id: 'specialized-services',
      category: 'Specialized Services',
      description: "Advanced solutions for specific business needs.",
      items: [
        {
          icon: <Scale size={32} />,
          title: 'LegalByt',
          description: 'On-demand legal templates & AI review system.',
          features: [
            'Template customization',
            'Compliance checks',
            'AI document review',
            'Digital signatures'
          ]
        },
        {
          icon: <GraduationCap size={32} />,
          title: 'GrantByt',
          description: 'AI-powered grant discovery & proposal assistant.',
          features: [
            'Funding opportunities',
            'Proposal drafting',
            'Deadline tracking',
            'Application management'
          ]
        },
        {
          icon: <Bot size={32} />,
          title: 'CallByt',
          description: 'White-label AI voice agent platform.',
          features: [
            '24/7 conversational support',
            'Human fallback',
            'Multi-channel deployment',
            'Custom voice training'
          ]
        }
      ]
    }
  ];

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
          technologies: ['React', 'Next.js', 'Vue', 'WordPress', 'Tailwind CSS']
        },
        {
          icon: <Code size={32} />,
          title: 'Web Applications',
          description: 'Custom web applications that streamline your business operations and enhance productivity.',
          technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL']
        },
        {
          icon: <Smartphone size={32} />,
          title: 'Mobile App Development',
          description: 'Native and cross-platform mobile applications designed for maximum user engagement.',
          technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
        },
        {
          icon: <Database size={32} />,
          title: 'Database Solutions',
          description: 'Effective database design and management to ensure your data is secure and accessible.',
          technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase']
        },
        {
          icon: <FileCode size={32} />,
          title: 'Custom API Development',
          description: 'Build robust API solutions that connect your services and applications seamlessly.',
          technologies: ['Node.js', 'Express', 'GraphQL', 'Django', 'Ruby on Rails']
        },
        {
          icon: <Cloud size={32} />,
          title: 'Cloud Solutions',
          description: 'Leverage the power of cloud computing to scale your applications and reduce infrastructure costs.',
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
          technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Moz', 'Google Search Console']
        },
        {
          icon: <BarChart size={32} />,
          title: 'Social Media Marketing',
          description: 'Build and engage your audience on social media platforms to increase brand awareness.',
          technologies: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok']
        },
        {
          icon: <Mail size={32} />,
          title: 'Email Marketing',
          description: 'Targeted email campaigns that convert prospects into customers and drive repeat business.',
          technologies: ['Mailchimp', 'SendGrid', 'ActiveCampaign', 'HubSpot', 'Klaviyo']
        }
      ]
    },
    {
      id: 'it-support',
      category: 'IT Support & Infrastructure',
      description: 'Ensure your business operations run smoothly with our comprehensive IT support and infrastructure solutions.',
      items: [
        {
          icon: <Phone size={32} />,
          title: 'Technical Support',
          description: 'Responsive technical support to resolve issues quickly and minimize downtime.',
          technologies: ['TeamViewer', 'Zendesk', 'Freshdesk', 'ServiceNow', 'Jira']
        },
        {
          icon: <Server size={32} />,
          title: 'Network Infrastructure',
          description: 'Design and manage reliable network infrastructure to support your business needs.',
          technologies: ['Cisco', 'Juniper', 'Meraki', 'VMware', 'Aruba']
        },
        {
          icon: <Settings size={32} />,
          title: 'IT Consulting',
          description: 'Strategic IT consulting to align your technology with your business goals.',
          technologies: ['Microsoft 365', 'Google Workspace', 'Salesforce', 'AWS', 'Azure']
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
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="AuraByt Services & Products - Complete Digital Solutions"
        description="Explore AuraByt's comprehensive range of products and services, from healthcare solutions to gaming platforms and business tools."
        keywords="ClaimByt, AuraClaim, SkinsLegion, CodeLap, TheCricLine, web development, digital marketing, IT support"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-aurabyt-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-aurabyt-purple/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-aurabyt-blue/10 blur-3xl animate-float animation-delay-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-reveal">
              Our <span className="animated-gradient-text">Products & Services</span>
            </h1>
            <p className="text-xl opacity-90 mb-8 animate-fade-in text-reveal-delay-1" style={{
              animationDelay: '0.2s'
            }}>
              Discover our comprehensive suite of digital solutions designed to transform and elevate your business.
            </p>
          </div>
        </div>
      </section>

      {/* Products Sections */}
      <div ref={servicesRef}>
        {products.map((category, index) => (
          <ServiceCategory 
            key={category.id}
            id={category.id}
            category={category.category}
            description={category.description}
            items={category.items}
            index={index}
          />
        ))}
      </div>

      {/* Services Sections */}
      <div>
        {services.map((category, index) => (
          <ServiceCategory 
            key={category.id}
            id={category.id}
            category={category.category}
            description={category.description}
            items={category.items}
            index={index + products.length}
          />
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-purple-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-white/5 blur-3xl rounded-full animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              Contact us today to discuss how our products and services can help you achieve your goals.
            </p>
            <Link to="/contact" className="inline-block px-6 py-3 md:px-8 md:py-4 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-colors btn-hover-shine group">
              Get Started
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;