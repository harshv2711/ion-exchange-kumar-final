import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { ECOSYSTEM_CARDS } from '../constants';

const EcosystemSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1320px]">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div className="flex-1 min-w-0 pr-8">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2 block">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
              A Complete Ecosystem for Every Water Challenge
            </h2>
            <p className="mt-4 text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
              From industrial and municipal treatment to home water solutions, we provide a unified portfolio.
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0 mb-1">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 -mx-4 px-4 snap-x"
        >
          {ECOSYSTEM_CARDS.map((card, index) => (
            <div 
              key={index}
              className="min-w-[300px] md:min-w-[360px] h-[500px] relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 snap-start group cursor-pointer"
            >
              {/* Full Bleed Image */}
              <img 
                src={card.image} 
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Top Right Learn More Button */}
              <a 
                href="#" 
                className="absolute top-5 right-5 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-green-600 z-10"
                aria-label={`Learn more about ${card.title}`}
              >
                <ArrowUpRight size={20} strokeWidth={2.5} />
              </a>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-10">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-green-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed line-clamp-3 font-medium opacity-90">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSlider;