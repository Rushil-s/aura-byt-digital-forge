
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
      className="professional-card group h-full touch-manipulation"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 text-primary transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
        <div className="text-lg sm:text-xl md:text-2xl">
          {icon}
        </div>
      </div>
      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors leading-tight">
        {title}
      </h3>
      <p className="text-muted-foreground mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
      <Link
        to={link}
        className="inline-flex items-center font-medium text-primary hover:text-accent transition-all text-sm sm:text-base group/link touch-manipulation"
        aria-label={`Learn more about ${title}`}
      >
        Learn more 
        <ArrowRight 
          size={14} 
          className={`ml-2 transition-transform duration-300 flex-shrink-0 sm:w-4 sm:h-4 ${isHovered ? 'translate-x-1' : ''}`} 
        />
      </Link>
    </article>
  );
};

export default ServiceCard;
