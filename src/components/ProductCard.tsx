import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

interface ProductCardProps {
  title: string;
  description: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, link }) => {
  return (
    <div className="group relative professional-card h-full flex flex-col overflow-hidden">
      <GlowingEffect
        spread={35}
        glow={true}
        disabled={false}
        proximity={70}
        inactiveZone={0.05}
        borderWidth={2}
        movementDuration={1.8}
      />
      
      {/* Floating icon */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Code size={20} className="text-primary" />
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <div className="h-1 w-16 bg-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </div>
        
        <p className="text-muted-foreground flex-grow mb-8 leading-relaxed">
          {description}
        </p>
        
        <Link 
          to={link}
          className="inline-flex items-center text-primary font-semibold group-hover:text-primary/80 transition-colors duration-300 mt-auto group/link"
        >
          Explore Solution
          <ArrowRight size={18} className="ml-3 transform group-hover/link:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;