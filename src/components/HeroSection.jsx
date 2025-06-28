import React, { useEffect, useRef } from 'react';
import { MoveRight, KeySquare, Forklift , Warehouse} from 'lucide-react';
import { Link } from 'react-router-dom';
import UIbutton from './ui/UIbutton';

const HeroSection = () => {
  const backgroundRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!backgroundRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      backgroundRef.current.style.transform = `translate(${x * -15}px, ${y * -15}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 z-0 transition-transform duration-500 ease-out"
        style={{ willChange: 'transform' }}
      >
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-20 hidden lg:block">
        <Forklift className="h-12 w-12 text-blue-500/30" />
      </div>
      <div className="absolute bottom-1/4 right-20 hidden lg:block">
        <Warehouse className="h-16 w-16 text-blue-500/30" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          <div className="max-w-2xl">
          <div className="flex items-center mb-4">
  <div className="bg-blue-500/20 text-blue-400 rounded-full px-4 py-1 text-sm font-medium inline-flex items-center">
    <KeySquare className="h-3.5 w-3.5 mr-1" />
    Logistics. Infrastructure. Security.
  </div>
</div>

<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-glow mb-6">
  Discover <span className="text-blue-500">DAISA</span> Logistics Hub
</h1>

<p className="text-xl text-gray-300 mb-8">
  Multi-purpose warehouse complex with private railway access, secure perimeter, and top-tier logistics infrastructure in Shymkent, Kazakhstan.
</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/booking"
                className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
              >
                Book Now
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
              <UIbutton text="Our Services" to="/services" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
