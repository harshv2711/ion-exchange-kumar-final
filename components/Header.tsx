import React, { useState } from 'react';
import { Search, ArrowRight, ChevronDown } from 'lucide-react';

// Specific navigation configuration as requested
const HEADER_NAV_ITEMS = [
  { label: 'Solutions', href: '#solutions', hasMegaMenu: true },
  { label: 'Industries', href: '#industries' },
  { label: 'Sustainability', href: '#sustainability', color: 'text-green-500' },
  { label: 'Digital Innovation', href: '#digital-innovation', color: 'text-blue-500' },
  { label: 'Company', href: '#company' },
  { label: 'Resources', href: '#resources' },
];

// Placeholder data for the Mega Menu
const MEGA_MENU_DATA = [
  {
    title: "Water Treatment",
    links: ["Turnkey Projects", "Standard Systems", "Wastewater Treatment", "Zero Liquid Discharge"]
  },
  {
    title: "Resins & Membranes",
    links: ["Ion Exchange Resins", "RO/UF/NF Membranes", "Indion Resins", "Hydramem"]
  },
  {
    title: "Chemicals & Services",
    links: ["Cooling Water Treatment", "Boiler Water Treatment", "Fireside Additives", "O&M Services"]
  },
  {
    title: "Home & Community",
    links: ["ZeroB Purifiers", "Softening Systems", "Rural Water Solutions", "Institutional Plants"]
  }
];

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <style>{`
        @keyframes sheen {
          0% { transform: translateX(-100%) skewX(-12deg); }
          20% { transform: translateX(200%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-sheen {
          animation: sheen 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
      
      {/* Header Wrapper - pointer-events-auto allows interaction */}
      <div 
        className="relative w-full max-w-[1320px] pointer-events-auto"
        onMouseLeave={() => setActiveDropdown(null)}
      >
        {/* Visual Background Container (Rounded & Clipped for Sheen) */}
        <div className="absolute inset-0 bg-[#111111] rounded-xl shadow-2xl border border-white/5 overflow-hidden">
             {/* Subtle Reflective Sheen Animation */}
             <div className="absolute inset-0 pointer-events-none z-0">
               <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-sheen"></div>
             </div>
        </div>

        {/* Content Container (Not Clipped) */}
        <div className="relative z-10 h-[72px] flex items-center justify-between px-6 lg:px-8 text-white">
          
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0 cursor-pointer mr-8">
            <img src="https://sandbox.pivotmkg.com/ion-exchange-kumar/assets/img/brand-assets/Container.svg" alt="" srcset="" />
          </div>

          {/* Navigation Section */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-1 h-full">
            {HEADER_NAV_ITEMS.map((item) => (
              <div 
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => item.hasMegaMenu && setActiveDropdown(item.label)}
              >
                <a
                  href={item.href}
                  className={`text-[15px] font-medium transition-opacity hover:opacity-80 flex items-center gap-1.5 py-6 ${item.color || 'text-white'}`}
                >
                  {item.label}
                  {item.hasMegaMenu && <ChevronDown size={14} className="opacity-70 mt-0.5" />}
                </a>
              </div>
            ))}
          </nav>

          {/* Right Actions Section */}
          <div className="flex items-center gap-6 flex-shrink-0 ml-4">
            <button className="text-white hover:text-blue-400 transition-colors" aria-label="Search">
              <Search size={18} />
            </button>
            
            <a 
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 group shadow-lg shadow-blue-900/20"
            >
              Contact Us
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Solutions Mega Menu (Outside clipped area) */}
        {activeDropdown === 'Solutions' && (
          <div 
            className="absolute top-[calc(100%+8px)] left-0 right-0 bg-[#1a1a1a] rounded-xl shadow-2xl border border-white/10 p-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
            onMouseEnter={() => setActiveDropdown('Solutions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
             <div className="grid grid-cols-4 gap-8">
               {MEGA_MENU_DATA.map((col, idx) => (
                 <div key={idx} className="space-y-4">
                   <h4 className="text-blue-500 font-bold text-xs uppercase tracking-widest border-b border-white/10 pb-3">
                     {col.title}
                   </h4>
                   <ul className="space-y-3">
                     {col.links.map(link => (
                       <li key={link}>
                         <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all text-sm block">
                           {link}
                         </a>
                       </li>
                     ))}
                   </ul>
                 </div>
               ))}
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;