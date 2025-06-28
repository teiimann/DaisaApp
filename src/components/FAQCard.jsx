import React from 'react';
import { cn } from '@/lib/utils'; // Remove this line if you don’t use `cn`

function FAQCard({ question, answer, className }) {
  return (
    <div className={cn ? cn("faq-card-wrapper", className) : `faq-card-wrapper ${className || ''}`}>
      <div className="relative w-full h-48 bg-psyco-black-light rounded-lg flex items-center justify-center overflow-hidden perspective-1000 shadow-lg shadow-psyco-green-DEFAULT/20 transition-all duration-600 hover:scale-105 hover:shadow-xl hover:shadow-psyco-green-DEFAULT/30 group">
        
        {/* Question front */}
        <div className="text-center px-6 transition-all duration-600 group-hover:scale-0">
          <h3 className="text-xl font-bold text-white mb-2">{question}</h3>
        </div>

        {/* Answer on hover (flip effect) */}
        <div className="absolute top-0 left-0 w-full h-full p-5 bg-psyco-black-light transform rotate-x-90 origin-bottom transition-all duration-600 group-hover:rotate-x-0">
          <h4 className="text-lg font-bold text-white mb-3">{question}</h4>
          <p className="text-sm text-gray-300 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default FAQCard;
