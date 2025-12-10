import React from 'react';
import { ArrowRight, Heart, School, Map } from 'lucide-react';

const CSRSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content Block */}
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-3 block flex items-center gap-2">
              <Heart size={14} className="fill-current" />
              CSR • Corporate Social Responsibility
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Creating Sustainable Impact Beyond Water
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed font-light">
              We are committed to improving lives through safe water, education, and sustainable community development.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-6 mb-10 border-t border-gray-200 pt-8">
              <div className="border-l-0 md:border-l-0 border-gray-200 pl-0">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">100k+</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Lives Touched</div>
                <p className="text-xs text-gray-400 mt-1 hidden xl:block">Safe water & community initiatives</p>
              </div>
              <div className="border-l border-gray-200 pl-6">
                 <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">500+</div>
                 <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Institutions</div>
                 <p className="text-xs text-gray-400 mt-1 hidden xl:block">Schools & Hospitals supported</p>
              </div>
              <div className="border-l border-gray-200 pl-6">
                 <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">Multi</div>
                 <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Regions</div>
                 <p className="text-xs text-gray-400 mt-1 hidden xl:block">Across India</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all flex items-center gap-2 group shadow-lg shadow-blue-600/20">
              Learn More About Our Impact
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* CSR Image Block */}
          <div className="relative">
             <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10 aspect-[4/3] group cursor-default">
                <img
                  src="Milestone-section/2021.jpg"
                  alt="CSR Community Initiative"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-lg max-w-xs border-l-4 border-blue-500">
                    <p className="text-gray-900 font-bold text-sm">The Ion Foundation</p>
                    <p className="text-gray-500 text-xs mt-1 leading-snug">Empowering communities through education, health, and hygiene.</p>
                </div>
             </div>
             
             {/* Decorative Offset Border */}
             <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gray-200 rounded-2xl -z-0 hidden md:block"></div>
             
             {/* Abstract Decor */}
             <div className="absolute -top-12 -left-12 opacity-10 text-blue-600">
                <Heart size={100} fill="currentColor" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSRSection;