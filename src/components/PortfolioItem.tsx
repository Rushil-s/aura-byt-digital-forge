
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

const PortfolioItem: React.FC<PortfolioItemProps> = ({ 
  title, 
  category, 
  imageUrl, 
  description, 
  technologies, 
  delay 
}) => {
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

export default PortfolioItem;
