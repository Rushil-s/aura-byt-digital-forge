
import React from 'react';
import PortfolioItem from './PortfolioItem';
import { portfolioProjects } from '../data/portfolioData';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useParallaxMouse } from '../hooks/useParallaxMouse';

const Portfolio = () => {
  const sectionRef = useIntersectionObserver(
    (entry) => {
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

  useParallaxMouse();

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
          {portfolioProjects.map((project, index) => (
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
