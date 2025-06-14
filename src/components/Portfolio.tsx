import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioItemProps {
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  technologies: string[];
  delay: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, category, imageUrl, description, technologies, delay }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef}
      className="group relative overflow-hidden rounded-lg hover-card opacity-0 translate-y-8 transition-all duration-700 parallax-card"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative h-72 overflow-hidden parallax-card-inner">
        <div className="absolute inset-0 p-0.5 rounded-lg">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-aurabyt-purple/40 via-aurabyt-indigo/40 to-aurabyt-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-lg"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end backdrop-blur-sm group-hover:backdrop-blur-none">
          <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-xs font-medium text-primary mb-1 opacity-0 group-hover:opacity-100 transition-opacity delay-100">{category}</p>
            <h3 className="text-lg font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-150">{title}</h3>
            <p className="text-sm text-white/90 mb-3 opacity-0 group-hover:opacity-100 transition-opacity delay-200">{description}</p>
            
            <div className="flex flex-wrap gap-1 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-250">
              {technologies.map((tech, index) => (
                <span key={index} className="text-xs bg-white/20 text-white px-2 py-1 rounded-md backdrop-blur-sm">
                  {tech}
                </span>
              ))}
            </div>
            
            <button className="px-4 py-2 bg-white/20 text-white rounded-md text-sm flex items-center gap-2 backdrop-blur-sm hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 delay-300 transform translate-y-2 group-hover:translate-y-0">
              View Details <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          const items = entry.target.querySelectorAll('.hover-card');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('is-visible');
            }, 100 * index);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        const cards = document.querySelectorAll('.parallax-card');
        cards.forEach((card: Element) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const moveX = (x - centerX) / 20;
          const moveY = (y - centerY) / 20;
          
          const inner = card.querySelector('.parallax-card-inner') as HTMLElement;
          if (inner && rect.top < window.innerHeight && rect.bottom > 0) {
            inner.style.transform = `rotateY(${moveX}deg) rotateX(${-moveY}deg) translateZ(10px)`;
          }
        });
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Enterprise Cloud Migration",
      category: "Cloud Infrastructure",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      description: "Complete AWS cloud migration for Fortune 500 manufacturing company, reducing operational costs by 40%.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      delay: 100
    },
    {
      title: "Banking API Platform",
      category: "Fintech Development",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      description: "Secure REST API platform serving 2M+ daily transactions with 99.99% uptime.",
      technologies: ["Node.js", "PostgreSQL", "Redis", "JWT"],
      delay: 200
    },
    {
      title: "Healthcare Data Analytics",
      category: "Data Solutions",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      description: "Real-time analytics dashboard for patient data processing across 50+ hospitals.",
      technologies: ["React", "Python", "Apache Kafka", "MongoDB"],
      delay: 300
    },
    {
      title: "E-Commerce Modernization",
      category: "Digital Transformation",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      description: "Legacy system modernization resulting in 3x performance improvement and mobile-first design.",
      technologies: ["React", "Microservices", "GraphQL", "Stripe"],
      delay: 400
    },
    {
      title: "IoT Manufacturing System",
      category: "IoT Solutions",
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      description: "Smart factory monitoring system with predictive maintenance and real-time alerts.",
      technologies: ["IoT Core", "Python", "InfluxDB", "Grafana"],
      delay: 500
    },
    {
      title: "Enterprise Security Audit",
      category: "Cybersecurity",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
      description: "Comprehensive security assessment and implementation of zero-trust architecture.",
      technologies: ["Penetration Testing", "SIEM", "Multi-Factor Auth", "VPN"],
      delay: 600
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden scroll-animate opacity-0 translate-y-8 transition-all duration-700">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/80 to-white"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-radial from-aurabyt-purple/5 to-transparent opacity-70 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-radial from-aurabyt-blue/5 to-transparent opacity-70 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-xs font-medium text-primary/80 tracking-wider uppercase mb-2 inline-block">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-gradient-to-r after:from-aurabyt-purple after:to-aurabyt-blue after:rounded-full pb-3">
              Client Success Stories
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Explore our recent enterprise projects showcasing digital transformation, cloud migration, and custom software development solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioItem 
              key={index}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
              description={project.description}
              technologies={project.technologies}
              delay={project.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
