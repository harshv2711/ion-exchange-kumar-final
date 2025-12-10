import React from 'react';
import { INDUSTRIES } from '../constants';

const IndustriesSection: React.FC = () => {
  // Duplicate the industries array to create a seamless infinite loop
  // We need enough items to fill the screen + scroll off smoothly
  // Tripling it ensures smooth playback on very wide screens too
  const loopedIndustries = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      {/* Industries We Serve Section */}
      
      <div className="container mx-auto px-4 max-w-[1320px] mb-16 text-center">
        <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-3 block">
          Industries We Serve
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Tailored Solutions for Diverse Sectors
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Ion Exchange provides tailored water and wastewater solutions enabling operational reliability, 
          compliance, and cost efficiency across sectors.
        </p>
      </div>

      {/* Auto-Scroll Carousel */}
      <div className="relative w-full">
        
        {/* Gradient Masks for smooth fade in/out at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>

        {/* Scrolling Track */}
        {/* 
            To adjust speed: Change duration in the style tag below (currently 40s).
            To pause on hover: The class 'hover:[animation-play-state:paused]' handles this.
        */}
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {loopedIndustries.map((industry, index) => (
            <div 
              key={`${industry.name}-${index}`}
              className="mx-4 w-[280px] md:w-[320px] h-[380px] bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative flex-shrink-0 group overflow-hidden"
            >
              {/* 1. Background Image */}
              <img 
                src={industry.image} 
                alt={industry.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
              />
              
              {/* 2. Black Gradient Overlay */}
              {/* Specific gradient to ensure text readability: dark at bottom, fading to transparent */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>

              {/* 3. Card Text Styling */}
              <div className="absolute bottom-8 left-8 z-20">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors drop-shadow-sm">
                  {industry.name}
                </h3>
                {/* Blue Indicator Line */}
                <div className="h-1 w-8 bg-blue-500 rounded-full group-hover:w-16 transition-all duration-300 shadow-sm"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Continuous Loop Logic */}
      {/* 
         The animation moves the track -33.33% because we triplicated the array. 
         Moving 1/3 of the total width brings the second set exactly where the first set started, creating a seamless loop.
      */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default IndustriesSection;