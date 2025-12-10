import React from 'react';
import { Monitor, Cpu, Workflow, BarChart3, Radio, Database, Activity } from 'lucide-react';

const DigitalInnovationSection: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="digital-innovation">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 block">
            Digital Transformation
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Digital Innovation
          </h2>
          <p className="text-gray-600">
             IonSite Digital Twin represents the future of water plant intelligence, helping industries achieve higher efficiency and reduce operational risk.
          </p>
        </div>

        {/* Bento Grid: 3 Large, 4 Small */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          
          {/* Large Item 1: IonSite (Main) */}
          <div className="md:col-span-2 md:row-span-2 bg-blue-600 rounded-2xl p-8 text-white flex flex-col justify-between relative overflow-hidden group shadow-lg">
            {/* Background Image */}
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
              alt="Digital Innovation Dashboard" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Blue Overlay - using multiply to blend color or high opacity solid color */}
            <div className="absolute inset-0 bg-blue-600/90 mix-blend-multiply z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-0"></div>

            {/* Decorative Blur (Optional, kept subtle) */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none z-0"></div>

            <div className="relative z-10">
              <Monitor size={48} className="mb-6 text-blue-200" />
              <h3 className="text-3xl font-bold mb-4">IonSite Digital Twin</h3>
              <p className="text-blue-100 text-lg">
                Real-time plant visualization, performance prediction and remote diagnostics for smarter plant operations.
              </p>
            </div>
            <div className="mt-8 relative z-10">
               <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold text-sm hover:bg-blue-50 transition-colors shadow-md">
                  Learn More
               </button>
            </div>
          </div>

          {/* Large Item 2: IoT */}
          <div className="md:col-span-2 bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors border border-gray-100">
             <Radio size={32} className="text-purple-500 mb-4" />
             <h3 className="text-xl font-bold text-gray-900 mb-2">IoT Process Monitoring</h3>
             <p className="text-gray-600 text-sm">
               Connected sensors capturing continuous data for operational insight and predictive alerts.
             </p>
          </div>

          {/* Large Item 3: Predictive Maintenance */}
          <div className="md:col-span-2 bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors border border-gray-100">
             <Activity size={32} className="text-orange-500 mb-4" />
             <h3 className="text-xl font-bold text-gray-900 mb-2">Predictive Maintenance</h3>
             <p className="text-gray-600 text-sm">
               AI-driven maintenance forecasting to reduce downtime and extend equipment life.
             </p>
          </div>

          {/* Small Items */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
             <Cpu size={24} className="text-blue-500 mb-3" />
             <h4 className="font-bold text-gray-900 mb-1">Smart Automation</h4>
             <p className="text-xs text-gray-500">Intelligent dosing & controls.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
             <Database size={24} className="text-cyan-500 mb-3" />
             <h4 className="font-bold text-gray-900 mb-1">Cloud Dashboards</h4>
             <p className="text-xs text-gray-500">Secure, role-based access.</p>
          </div>

           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
             <BarChart3 size={24} className="text-indigo-500 mb-3" />
             <h4 className="font-bold text-gray-900 mb-1">Visualization</h4>
             <p className="text-xs text-gray-500">Real-time performance tracking.</p>
          </div>

           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
             <Workflow size={24} className="text-pink-500 mb-3" />
             <h4 className="font-bold text-gray-900 mb-1">Diagnostics</h4>
             <p className="text-xs text-gray-500">Remote troubleshooting support.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalInnovationSection;