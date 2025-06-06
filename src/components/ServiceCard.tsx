
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
    <div 
      className="professional-card group animate-fade-in is-visible"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Link
        to={link}
        className="flex items-center font-medium text-primary hover:text-accent transition-all"
      >
        Learn more 
        <ArrowRight 
          size={18} 
          className={`ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
        />
      </Link>
    </div>
  );
};

export default ServiceCard;
