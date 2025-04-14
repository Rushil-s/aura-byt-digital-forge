
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechCorp Inc.",
    content: "AuraByt's web development team built our new e-commerce platform. The results were phenomenal - a 40% increase in conversions and a beautiful, responsive design.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
  },
  {
    id: 2,
    name: "Michael Chang",
    position: "CEO",
    company: "Innovate Solutions",
    content: "The digital marketing campaign by AuraByt exceeded our expectations. They truly understand our market and helped us reach our target audience effectively.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Operations Manager",
    company: "Global Enterprises",
    content: "AuraByt's IT support has been invaluable to our business. Their response time is incredible, and they've helped us streamline our entire infrastructure.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
  }
];

const TestimonialSlider = () => {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const max = testimonials.length - 1;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        setActive(prevActive => (prevActive === max ? 0 : prevActive + 1));
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay, max]);

  const next = () => {
    setAutoplay(false);
    setActive(prevActive => (prevActive === max ? 0 : prevActive + 1));
  };

  const prev = () => {
    setAutoplay(false);
    setActive(prevActive => (prevActive === 0 ? max : prevActive - 1));
  };

  return (
    <div className="w-full overflow-hidden py-10">
      <div className="relative">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="mb-6 md:mb-0 md:mr-8">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          size={18}
                          fill={i < testimonial.rating ? "#8B5CF6" : "none"}
                          color={i < testimonial.rating ? "#8B5CF6" : "#CBD5E1"}
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg italic text-gray-700 mb-6">
                      "{testimonial.content}"
                    </blockquote>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Controls */}
        <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
          <button 
            className="ml-4 bg-white/80 rounded-full p-2 shadow-md pointer-events-auto hover:bg-white transition-colors"
            onClick={prev}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className="mr-4 bg-white/80 rounded-full p-2 shadow-md pointer-events-auto hover:bg-white transition-colors"
            onClick={next}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === active ? 'bg-primary' : 'bg-gray-300'}`}
              onClick={() => {
                setAutoplay(false);
                setActive(idx);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
