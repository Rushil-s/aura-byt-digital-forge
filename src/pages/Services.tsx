import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, Database, Globe, Smartphone, BarChart, Search, Mail, ShieldCheck, 
  Server, Headphones, Settings, Cpu
} from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'web-development',
      category: 'Software & Web Development',
      items: [
        {
          icon: <Globe size={36} />,
          title: 'Website Development',
          description: 'Custom responsive websites that look great on any device and drive conversions.',
          benefits: [
            'Mobile-first responsive design',
            'Optimized for speed and performance',
            'SEO-friendly architecture'
          ]
        },
        {
          icon: <Code size={36} />,
          title: 'Web Applications',
          description: 'Custom web applications that streamline your business operations and enhance productivity.',
          benefits: [
            'Intuitive user interfaces',
            'Scalable architecture',
            'Secure data management'
          ]
        },
        {
          icon: <Smartphone size={36} />,
          title: 'Mobile App Development',
          description: 'Native and cross-platform mobile applications designed for maximum user engagement.',
          benefits: [
            'Native performance',
            'Cross-platform compatibility',
            'Engaging user experience'
          ]
        },
        {
          icon: <Database size={36} />,
          title: 'Database Solutions',
          description: 'Effective database design and management to ensure your data is secure and accessible.',
          benefits: [
            'Optimized data structures',
            'High-performance queries',
            'Secure data storage'
          ]
        }
      ]
    },
    {
      id: 'digital-marketing',
      category: 'Digital Marketing',
      items: [
        {
          icon: <Search size={36} />,
          title: 'SEO Optimization',
          description: "Improve your website's visibility in search engines and drive organic traffic.",
          benefits: [
            'Keyword research and strategy',
            'On-page and off-page optimization',
            'Regular performance reporting'
          ]
        },
        {
          icon: <BarChart size={36} />,
          title: 'Social Media Marketing',
          description: 'Build and engage your audience on social media platforms to increase brand awareness.',
          benefits: [
            'Content strategy development',
            'Community management',
            'Performance analytics'
          ]
        },
        {
          icon: <Mail size={36} />,
          title: 'Email Marketing',
          description: 'Targeted email campaigns that convert prospects into customers and drive repeat business.',
          benefits: [
            'Custom email templates',
            'Campaign automation',
            'Performance analytics and optimization'
          ]
        }
      ]
    },
    {
      id: 'it-support',
      category: 'IT Support & Infrastructure',
      items: [
        {
          icon: <Headphones size={36} />,
          title: 'Technical Support',
          description: 'Responsive technical support to resolve issues quickly and minimize downtime.',
          benefits: [
            'Rapid response times',
            'Remote and on-site support',
            'Proactive issue prevention'
          ]
        },
        {
          icon: <Server size={36} />,
          title: 'Network Infrastructure',
          description: 'Design and manage reliable network infrastructure to support your business needs.',
          benefits: [
            'Secure network architecture',
            'Scalable solutions',
            'Regular maintenance'
          ]
        },
        {
          icon: <ShieldCheck size={36} />,
          title: 'Cybersecurity',
          description: 'Protect your business from cyber threats with our comprehensive security solutions.',
          benefits: [
            'Security audits and assessments',
            'Threat prevention',
            'Security training for staff'
          ]
        },
        {
          icon: <Cpu size={36} />,
          title: 'Hardware Solutions',
          description: 'Expert advice on hardware selection, deployment, and maintenance.',
          benefits: [
            'Customized specifications',
            'Cost-effective procurement',
            'Regular maintenance'
          ]
        }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-aurabyt-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Services</h1>
            <p className="text-xl opacity-90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((serviceCategory, index) => (
        <section 
          key={serviceCategory.id}
          id={serviceCategory.id}
          className={`py-20 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">{serviceCategory.category}</h2>
              <div className="w-16 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategory.items.map((service, i) => (
                <div 
                  key={i}
                  className="bg-white rounded-xl shadow-md p-8 hover-card"
                >
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <h4 className="font-semibold mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-purple-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Contact us today to discuss how we can help your business grow.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
