import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const TestimonialCard = ({
  name,
  position,
  company,
  testimonial,
  rating,
  imageSrc,
  className,
  style
}) => {
  return (
    <div 
      className={cn(
        "relative w-full h-48 bg-[#212121] border-4 border-[#222] rounded-lg flex flex-col justify-center gap-2.5 p-4 overflow-hidden transition-all duration-300 ease-in-out group card-modern-shadow hover:card-modern-shadow-hover hover:border-[#b671d6]",
        className
      )}
      style={style}
    >
      <div className="absolute top-4 right-4 text-psyco-green-DEFAULT opacity-20">
        <Quote size={32} />
      </div>
      
      <div className="flex items-center gap-3 mb-2">
        <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-psyco-green-muted flex-shrink-0">
          <img 
            src={imageSrc} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-semibold text-white cursor-default font-sans truncate">{name}</h4>
          <p className="text-sm font-semibold text-white cursor-default font-sans truncate">
            {position}, {company}
          </p>
          <div className="flex mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                size={12}
                className={cn(
                  i < rating ? "text-psyco-green-light fill-psyco-green-light" : "text-gray-500"
                )}
              />
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-sm font-semibold text-white overflow-hidden cursor-default font-sans line-clamp-2 relative z-10">"{testimonial}"</p>
      
      <div className="absolute right-5 bottom-1 flex items-center gap-1 text-sm font-normal text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer animate-card-text">
        <span>View More</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );
};

export default TestimonialCard;
