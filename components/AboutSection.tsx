import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="relative py-24 flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
          alt="Ion Exchange Corporate HQ" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-[1320px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-white/20">
              Our Story
            </span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              60+ Years of Leadership in Water & Environment Solutions.
            </h2>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              We pioneered ion exchange technology in India and continue to deliver breakthrough 
              advancements across engineering, manufacturing and digital innovation. 
              With over 40+ countries served and 7 manufacturing units, our impact is global.
            </p>
            
            <ul className="space-y-3 mb-8">
              {['60+ Years of Innovation', '1 Million+ Installations', '40+ Countries Served'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-blue-200">
                  <CheckCircle2 size={20} className="text-blue-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2">
              Read Our Story
              <ArrowRight size={18} />
            </button>
          </div>
          
          {/* Right side could be empty to show bg or have a floating card/video trigger */}
          <div className="hidden lg:flex justify-center items-center">
             {/* Play button or simple visual element */}
             <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;