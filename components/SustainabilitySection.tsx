import React from 'react';
import { Leaf, Droplets, Recycle } from 'lucide-react';

const SustainabilitySection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="Sustainability-and-ZLD/Pioneering-Sustainable-Water-Recovery-14.png" 
                alt="Water Recovery and Circular Economy" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                 <p className="text-sm font-bold text-gray-900">Roha Manufacturing Facility</p>
                 <p className="text-xs text-green-600 font-semibold mt-1">Certified Net Zero for Water</p>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-10 -left-10 w-full h-full border-2 border-green-200 rounded-2xl -z-0 hidden md:block"></div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-green-600 font-bold uppercase tracking-wider text-sm mb-2 block">
              Sustainability & ZLD
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Pioneering Sustainable Water Recovery.
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We help industries transition to circular water systems with world-class Zero Liquid Discharge (ZLD) solutions, 
              enabling resource recovery and reduced freshwater dependency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <Droplets className="text-blue-500 mb-3" size={32} />
                <h4 className="font-bold text-2xl text-gray-900 mb-1">95%</h4>
                <p className="text-sm text-gray-500">Water Recovery</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <Leaf className="text-green-500 mb-3" size={32} />
                <h4 className="font-bold text-2xl text-gray-900 mb-1">Net Zero</h4>
                <p className="text-sm text-gray-500">Water Facility</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <Recycle className="text-teal-500 mb-3" size={32} />
                <h4 className="font-bold text-2xl text-gray-900 mb-1">50+</h4>
                <p className="text-sm text-gray-500">ZLD Plants</p>
              </div>
            </div>

            <button className="text-green-700 font-bold hover:text-green-800 flex items-center gap-2 group">
              Explore Our Sustainability Roadmap
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                 <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;