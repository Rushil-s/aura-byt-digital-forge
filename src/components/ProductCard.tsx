import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, link }) => {
  return (
    <div className="group relative bg-white border border-gray-200/50 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-500 p-6 h-full flex flex-col hover:-translate-y-2 hover:border-primary/20 overflow-hidden">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      {/* Floating icon */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
          <Sparkles size={16} className="text-white" />
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </div>
        
        <p className="text-gray-600 flex-grow mb-6 text-sm leading-relaxed">
          {description}
        </p>
        
        <Link 
          to={link}
          className="inline-flex items-center text-primary font-semibold text-sm group-hover:text-accent transition-colors duration-300 mt-auto group/link"
        >
          Explore Product
          <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl" />
    </div>
  );
};

export default ProductCard;