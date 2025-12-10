import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EcosystemSlider from './components/EcosystemSlider';
import AboutSection from './components/AboutSection';
import IndustriesSection from './components/IndustriesSection';
import SustainabilitySection from './components/SustainabilitySection';
import MilestonesSection from './components/MilestonesSection';
import DigitalInnovationSection from './components/DigitalInnovationSection';
import GlobalPresenceSection from './components/GlobalPresenceSection';
import CSRSection from './components/CSRSection';
import CaseStudiesTestimonials from './components/CaseStudiesTestimonials';
import Footer from './components/Footer';
import { ArrowRight } from 'lucide-react';

function App() {
  // Polish Logic: Scroll Reveal, Header Shadow, Stat Counters
  useEffect(() => {
    // 1. Header Shadow
    const header = document.querySelector('.site-header');
    const headerScroller = () => {
      if (header) {
        if (window.scrollY > 18) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
      }
    };
    document.addEventListener('scroll', headerScroller, { passive: true });

    // 2. Reveal on Scroll Observer
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-on-scroll').forEach(el => revealObs.observe(el));

    // 3. Stat Counters
    const statObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          el.classList.add('animate-in');
          el.classList.remove('hidden');
          // Simple count-up logic
          /* logic omitted for brevity, keeping CSS transition */
          statObs.unobserve(el);
        }
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.stat-number').forEach(el => {
      el.classList.add('hidden'); // Init hidden state
      statObs.observe(el);
    });

    return () => document.removeEventListener('scroll', headerScroller);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Section 1: Hero */}
        <div className="reveal-on-scroll">
          <Hero />
        </div>
        
        {/* Section 2: Ecosystem / What we do */}
        <div id="solutions" className="reveal-on-scroll">
          <EcosystemSlider />
        </div>

        {/* Section 3: About Banner */}
        <div id="company" className="reveal-on-scroll">
           <AboutSection />
        </div>

        {/* Section 4: Industries */}
        <div id="industries" className="reveal-on-scroll">
          <IndustriesSection />
        </div>

        {/* Section 5: Sustainability */}
        <div id="sustainability" className="reveal-on-scroll">
           <SustainabilitySection />
        </div>

        {/* Section 6: Milestones */}
        <div className="reveal-on-scroll">
          <MilestonesSection />
        </div>

        {/* Section 7: Digital Innovation */}
        <div className="reveal-on-scroll">
          <DigitalInnovationSection />
        </div>

        {/* Section 8: CSR */}
        <div className="reveal-on-scroll">
          <CSRSection />
        </div>

        {/* Section 9: Global Presence */}
        <div className="reveal-on-scroll">
          <GlobalPresenceSection />
        </div>

        {/* Section 10: Case Studies & Testimonials */}
        <div className="reveal-on-scroll">
          <CaseStudiesTestimonials />
        </div>

        {/* Final CTA Banner */}
        <section className="py-20 bg-blue-600 text-center text-white reveal-on-scroll">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Build Your Next Water Solution?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-colors">
                  Contact Us
               </button>
               <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2">
                  Explore Solutions <ArrowRight size={18} />
               </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;