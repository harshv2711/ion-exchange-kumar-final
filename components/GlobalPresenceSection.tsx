import React from 'react';
import { STATS } from '../constants';

const GlobalPresenceSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B1120] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1320px] relative z-10">
        
        {/* Top Row: Content + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left: Text Content */}
          <div className="max-w-xl">
             <span className="text-[#38bdf8] font-bold uppercase tracking-wider text-sm mb-3 block">
              Global Reach
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Global Presence
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light mb-8">
              With operations across 40+ countries, manufacturing excellence and a robust service network, 
              Ion Exchange is positioned as a global water technology leader.
            </p>
            
            {/* Map Legend */}
            <div className="flex gap-6">
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                 <span className="text-sm text-gray-300">Offices</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-sm text-gray-300">Manufacturing</span>
               </div>
            </div>
          </div>

          {/* Right: Green World Map (Inline SVG) */}
          <div className="relative w-full h-[300px] md:h-[400px]">
            <img src="world-map-section-20.svg" alt="" srcset="" />
          </div>
        </div>

        {/* Bottom Row: Metrics */}
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-8 border-t border-white/10 pt-12">
           {STATS.map((stat, index) => (
              <div key={index} className="flex-1 min-w-[200px]">
                 <div className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">{stat.value}</div>
                 <div className="text-blue-200 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">{stat.label}</div>
              </div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default GlobalPresenceSection;