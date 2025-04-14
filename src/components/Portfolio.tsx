
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioItemProps {
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  delay: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, category, imageUrl, description, delay }) => {
  return (
    <div className={`group relative overflow-hidden rounded-lg shadow-md hover-card animate-fade-in`} style={{ animationDelay: `${delay}ms` }}>
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <p className="text-xs font-medium text-primary mb-1">{category}</p>
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-sm text-white/80 hidden group-hover:block">{description}</p>
            <button className="mt-3 px-4 py-1.5 bg-white/20 text-white rounded-md text-sm flex items-center gap-1 backdrop-blur-sm hover:bg-white/30 transition-colors">
              View Project <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      imageUrl: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
      description: "A modern e-commerce solution with integrated payment systems and inventory management.",
      delay: 100
    },
    {
      title: "Financial App Dashboard",
      category: "UI/UX Design",
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      description: "Intuitive dashboard design for a financial services application with data visualization.",
      delay: 200
    },
    {
      title: "Social Media Campaign",
      category: "Digital Marketing",
      imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      description: "Multi-platform social media campaign that increased brand engagement by 45%.",
      delay: 300
    },
    {
      title: "Healthcare Provider Portal",
      category: "Web Application",
      imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      description: "Secure portal for healthcare providers to manage patient information and appointments.",
      delay: 400
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Our Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
            Check out some of our recent projects that showcase our expertise and creativity in delivering digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <PortfolioItem 
              key={index}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
              description={project.description}
              delay={project.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
