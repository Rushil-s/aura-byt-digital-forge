
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, link }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col h-full">
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <div className="h-0.5 w-12 bg-gradient-to-r from-aurabyt-purple to-aurabyt-blue rounded-full"></div>
      </div>
      
      <p className="text-gray-600 flex-grow mb-4 text-sm">
        {description}
      </p>
      
      <Link 
        to={link}
        className="mt-auto text-primary flex items-center text-sm font-medium group"
      >
        Learn more 
        <ArrowRight size={16} className="inline-block ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </div>
  );
};

export default ProductCard;
