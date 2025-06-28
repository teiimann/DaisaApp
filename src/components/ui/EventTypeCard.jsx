import React from 'react';
import { cn } from '@/lib/utils'; // Optional

function EventTypeCard({ name, icon, description, className, style }) {
  return (
    <div 
      className={
        cn
          ? cn(
              "card-container relative w-full h-48 border-4 border-black-700 rounded-lg overflow-hidden group cursor-pointer bg-[#212121]",
              className
            )
          : `card-container relative w-full h-36 border-4 border-gray-700 rounded-lg overflow-hidden group cursor-pointer bg-[#212121] ${className || ''}`
      }
      style={style}
    >
      <div className="card w-full h-full rounded-lg overflow-hidden relative">
        {/* Inner section */}
        <div className="img-content w-full h-full flex items-center justify-center bg-[#212121] transition-all duration-700 ease-\[cubic-bezier\(0.23,1,0.32,1\)\] group-hover:scale-150 group-hover:blur-sm">
          <div className="text-white transition-all duration-700 ease-\[cubic-bezier\(0.23,1,0.32,1\)\] group-hover:fill-transparent">
            {icon}
          </div>
        </div>

        {/* Text overlay */}
        <div className="content absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-2.5 text-gray-200 px-6 py-5 leading-relaxed rounded-lg opacity-0 pointer-events-none translate-y-12 transition-all duration-700 ease-\[cubic-bezier\(0.23,1,0.32,1\)\] group-hover:opacity-100 group-hover:translate-y-0">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default EventTypeCard;
