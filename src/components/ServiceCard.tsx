
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  link: string;
}

const ServiceCard = ({ title, description, icon, delay = 0, link }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <article 
      className="professional-card group h-full"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 text-primary transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-tight">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
      <Link
        to={link}
        className="inline-flex items-center font-medium text-primary hover:text-accent transition-all text-sm sm:text-base group/link"
        aria-label={`Learn more about ${title}`}
      >
        Learn more 
        <ArrowRight 
          size={16} 
          className={`ml-2 transition-transform duration-300 flex-shrink-0 ${isHovered ? 'translate-x-1' : ''}`} 
        />
      </Link>
    </article>
  );
};

export default ServiceCard;
