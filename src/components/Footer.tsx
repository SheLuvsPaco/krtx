import React from 'react';
import { Instagram, Twitter, Github, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-600 text-white pt-16 md:pt-20 pb-8 md:pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Logo and description */}
          <div>
            <div className="flex items-center mb-4 md:mb-6">
              <img 
                src="https://i.postimg.cc/d01VWCd6/5864121048155408790-removebg-preview.png" 
                alt="KRTX Logo" 
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>
            <p className="text-white/80 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Професионални услуги за къртене, разрушаване и извозване на отпадъци. Качество и надеждност за вашия проект.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Github size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Youtube size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-4 md:mb-6">Услуги</h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li><Link to="/bathroom-demolition" className="text-white/80 hover:text-white transition-colors">Къртене на бани</Link></li>
              <li><Link to="/wall-demolition" className="text-white/80 hover:text-white transition-colors">Къртене на стени</Link></li>
              <li><Link to="/floor-demolition" className="text-white/80 hover:text-white transition-colors">Къртене на подове</Link></li>
              <li><Link to="/concrete-demolition" className="text-white/80 hover:text-white transition-colors">Къртене на бетон</Link></li>
              <li><Link to="/building-demolition" className="text-white/80 hover:text-white transition-colors">Събаряне на сгради</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-4 md:mb-6">Информация</h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">За нас</Link></li>
              <li><Link to="/gallery" className="text-white/80 hover:text-white transition-colors">Галерия</Link></li>
              <li><Link to="/blog" className="text-white/80 hover:text-white transition-colors">Блог</Link></li>
              <li><Link to="/contacts" className="text-white/80 hover:text-white transition-colors">Контакти</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-4 md:mb-6">Контакти</h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <div className="flex items-start gap-2 md:gap-3">
                  <MapPin className="w-4 h-4 text-white/80 flex-shrink-0 mt-1" />
                  <span className="text-white/80">гр. Бургас, ж.к. Меден Рудник, ул.Черни връх 10</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2 md:gap-3">
                  <MapPin className="w-4 h-4 text-white/80 flex-shrink-0 mt-1" />
                  <span className="text-white/80">гр. Варна, ж.к. Чайка 189</span>
                </div>
              </li>
              <li>
                <a href="tel:+359895652375" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  0895 652 375
                </a>
              </li>
              <li>
                <a href="tel:+359897798877" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  0897 798 877
                </a>
              </li>
              <li>
                <a href="mailto:office@vesgroupinvest.com" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  office@vesgroupinvest.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/10 my-8 md:my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-white/60 text-xs md:text-sm text-center md:text-left">
            © 2025 KRTX. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            <Link to="/privacy-policy" className="text-white/60 hover:text-white transition-colors text-xs md:text-sm">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white/60 hover:text-white transition-colors text-xs md:text-sm">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-white/60 hover:text-white transition-colors text-xs md:text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;