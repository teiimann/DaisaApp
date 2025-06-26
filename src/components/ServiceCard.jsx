import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({
  title,
  description,
  icon,
  imageSrc,
  link,
  className,
  style
}) => {
  return (
    <div 
    className={cn(
      "relative w-full h-48 bg-[#212121] border-4 border-[#222] rounded-lg overflow-hidden transition-all duration-300 ease-in-out group hover:shadow-[0_0_20px_#3b82f6] hover:border-blue-500",
      className
    )}
      style={style}
    >
      <div className="relative h-full flex flex-col justify-center gap-2.5 p-4">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        <div className="relative z-10">
          <div className="text-psyco-green-DEFAULT mb-2">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-white mb-2 cursor-default font-sans">{title}</h3>
          <p className="text-sm font-semibold text-white overflow-hidden cursor-default font-sans line-clamp-3 mb-4">{description}</p>
        </div>
        
        <Link 
          to={link}
          className="absolute right-5 bottom-1 flex items-center gap-1 text-sm font-normal text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer animate-card-text"
        >
          <span>Learn more</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
