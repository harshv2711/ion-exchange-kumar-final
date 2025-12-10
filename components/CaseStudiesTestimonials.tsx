import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Quote, X } from 'lucide-react';

const CASE_STUDIES = [
  {
    id: 1,
    category: 'ZLD & Water Reuse',
    title: 'Textile Giant Achieves 92% Water Recovery',
    summary: 'Implementing a hybrid RO-evaporation system to meet strict regulatory norms while reducing freshwater intake.',
    image: 'Case-study-section/case-study-1.jpg',
    metric: '92% Recovery'
  },
  {
    id: 2,
    category: 'Pharma / High Purity',
    title: 'WFI Grade Water for Global Pharma Major',
    summary: 'Delivering consistent high-purity water using advanced multi-stage membrane technology for injectable manufacturing.',
    image: 'Case-study-section/case-study-2.jpg',
    metric: 'USP Grade'
  },
  {
    id: 3,
    category: 'Digital Innovation',
    title: 'Predictive Savings via IonSite Digital Twin',
    summary: 'A F&B plant reduced energy consumption by 18% using our remote monitoring and predictive maintenance platform.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    metric: '18% Energy Saved'
  },
  {
    id: 4,
    category: 'Municipal',
    title: '24/7 Water Supply for Smart City Project',
    summary: 'Upgrading urban water infrastructure to ensure continuous, pressurized water supply for over 1 million residents.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800',
    metric: '1M+ Citizens'
  },
  {
    id: 5,
    category: 'Power Sector',
    title: 'Condensate Polishing for Supercritical Plant',
    summary: 'Ensuring boiler protection and turbine efficiency with high-speed mixed bed condensate polishing units.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
    metric: 'Zero Corrosion'
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Ion Exchange has been a trusted partner in our sustainability journey. Their engineering systems consistently deliver exceptional results and reliability.",
    author: "Rajesh Kumar",
    role: "Operations Director, Global Manufacturing Firm"
  },
  {
    id: 2,
    quote: "IonSite transformed the way we monitor and manage our plant. Predictive maintenance alone saved us significant downtime and maintenance costs.",
    author: "Sarah Jenkins",
    role: "Plant Manager, Leading F&B Brand"
  },
  {
    id: 3,
    quote: "Their technical expertise in ZLD systems is unmatched. We achieved our environmental compliance goals ahead of schedule thanks to their team.",
    author: "Amit Patel",
    role: "EHS Head, Petrochemical Complex"
  }
];

const CaseStudiesTestimonials: React.FC = () => {
  // Case Study Logic
  const scrollRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCase, setActiveCase] = useState<typeof CASE_STUDIES[0] | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const openModal = (cs: typeof CASE_STUDIES[0]) => {
    setActiveCase(cs);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Testimonial Logic
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="bg-white overflow-hidden">
      
      {/* CASE STUDIES SECTION */}
      <section className="py-24 bg-slate-50 border-t border-gray-100 reveal-on-scroll">
        <div className="container mx-auto px-4 max-w-[1320px]">
          <div className="flex flex-col xl:flex-row gap-12 items-start">
            
            {/* Left Content */}
            <div className="xl:w-1/3 pt-4">
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-3 block">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Case Studies
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Discover how we engineer value for our clients across industries through innovation and execution excellence.
              </p>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => scroll('left')}
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Previous case study"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Next case study"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Right Carousel */}
            <div className="xl:w-2/3 w-full">
              <div 
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto hide-scrollbar pb-10 -mx-4 px-4 snap-x"
              >
                {CASE_STUDIES.map((cs) => (
                  <div 
                    key={cs.id}
                    className="min-w-[300px] md:min-w-[380px] h-[460px] relative rounded-2xl overflow-hidden shadow-lg polish-card snap-start group cursor-pointer bg-white"
                    onClick={() => openModal(cs)}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(cs)}
                    tabIndex={0}
                    role="button"
                    aria-label={`View case study: ${cs.title}`}
                  >
                    <img 
                      src={cs.image} 
                      alt={cs.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    
                    <div className="absolute top-6 left-6">
                      <span className="bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                        {cs.category}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-8">
                      <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-blue-200 transition-colors">
                        {cs.title}
                      </h3>
                      <p className="text-gray-300 text-sm line-clamp-2 mb-4">
                        {cs.summary}
                      </p>
                      <div className="flex items-center justify-between mt-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <span className="text-green-400 font-bold text-sm">{cs.metric}</span>
                        <span className="flex items-center gap-2 text-white text-sm font-semibold">
                          Read Case Study <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-white relative reveal-on-scroll">
        {/* Decorative background quote */}
        <div className="absolute top-10 left-10 opacity-[0.03] pointer-events-none select-none">
          <Quote size={200} />
        </div>

        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-8 block">
            What Our Partners Say
          </span>
          
          <div 
            className="min-h-[280px] flex flex-col justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {TESTIMONIALS.map((t, idx) => (
               <div 
                 key={t.id}
                 className={`transition-all duration-700 absolute w-full left-0 ${idx === currentTestimonial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}
               >
                  <blockquote className="text-2xl md:text-4xl font-medium text-gray-900 leading-snug mb-8">
                    "{t.quote}"
                  </blockquote>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 overflow-hidden border-2 border-white shadow-md">
                       {/* Placeholder avatar logic or initials */}
                       <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                          {t.author.charAt(0)}
                       </div>
                    </div>
                    <cite className="not-italic">
                      <div className="font-bold text-gray-900 text-lg">{t.author}</div>
                      <div className="text-gray-500 text-sm">{t.role}</div>
                    </cite>
                  </div>
               </div>
            ))}
             {/* Spacer to keep height since absolute positioning removes flow */}
             <div className="invisible">
                 <blockquote className="text-2xl md:text-4xl font-medium text-gray-900 leading-snug mb-8">
                    "{TESTIMONIALS[0].quote}"
                  </blockquote>
                  <div className="flex flex-col items-center">
                     <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
                     <div className="font-bold text-gray-900 text-lg">Placeholder</div>
                     <div className="text-gray-500 text-sm">Placeholder Role</div>
                  </div>
             </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
                aria-current={idx === currentTestimonial}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Case Study Modal */}
      {modalOpen && activeCase && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>
          <div 
            className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors z-20"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            
            <div className="relative h-[300px] md:h-[400px]">
              <img 
                src={activeCase.image} 
                alt={activeCase.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <span className="bg-blue-600 px-3 py-1 rounded text-xs font-bold uppercase mb-3 inline-block">
                  {activeCase.category}
                </span>
                <h2 id="modal-title" className="text-3xl md:text-4xl font-bold leading-tight">
                  {activeCase.title}
                </h2>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-wrap gap-4 mb-8">
                 <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg font-bold text-sm border border-green-100">
                   Result: {activeCase.metric}
                 </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {activeCase.summary}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Detailed case study content would go here. Ion Exchange delivered a comprehensive solution involving design, engineering, and commissioning. The project resulted in significant operational efficiency and regulatory compliance.
              </p>
              <button className="btn-cta bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
                Download Full Case Study
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default CaseStudiesTestimonials;
