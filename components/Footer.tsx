import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-600 pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-[1320px]">
        
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
                <img src="https://sandbox.pivotmkg.com/ion-exchange-kumar/assets/img/brand-assets/Container.svg" alt="" srcset="" />
            </div>
            <p className="text-sm leading-relaxed text-gray-600 mb-6">
              Leading water and environment solutions provider for over 60 years. 
              Building a sustainable future through innovation and care.
            </p>
            <div className="flex gap-4">
               <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="Facebook">
                 <img className="h-[24px]" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="" srcset="" />
               </a>
               <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="Twitter">
                 <img className="h-[24px]" src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="" srcset="" />
               </a>
               <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                 <img className="h-[24px]" src="https://img.icons8.com/ios-glyphs/30/linkedin.png" alt="" srcset="" />
               </a>
               <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors " aria-label="YouTube">
                <img className="h-[24px]" src="https://img.icons8.com/?size=100&id=62852&format=png&color=000000" alt="" srcset="" />
               </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
             <h4 className="text-gray-900 font-bold mb-6">Quick Links</h4>
             <ul className="space-y-3 text-sm">
                {NAV_ITEMS.map(item => (
                   <li key={item.label}><a href={item.href} className="text-gray-600 hover:text-blue-600 transition-colors">{item.label}</a></li>
                ))}
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Investors</a></li>
             </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
             <h4 className="text-gray-900 font-bold mb-6">Contact Us</h4>
             <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                   <MapPin size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                   <span className="text-gray-600">Ion House, Dr. E. Moses Road,<br/>Mahalaxmi, Mumbai - 400 011</span>
                </li>
                <li className="flex items-center gap-3">
                   <Phone size={18} className="text-blue-600 flex-shrink-0" />
                   <span className="text-gray-600">+91 22 6231 2000</span>
                </li>
                <li className="flex items-center gap-3">
                   <Mail size={18} className="text-blue-600 flex-shrink-0" />
                   <span className="text-gray-600">contact@ionexchange.co.in</span>
                </li>
             </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
             <h4 className="text-gray-900 font-bold mb-6">Stay Updated</h4>
             <p className="text-sm text-gray-500 mb-4">Subscribe to our newsletter for the latest updates.</p>
             <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded px-4 py-2 w-full focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 placeholder-gray-400"
                />
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors shadow-sm">
                   Subscribe
                </button>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
           <p>&copy; 2024 ION Exchange. All rights reserved.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Sitemap</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;