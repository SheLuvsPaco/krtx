import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import PhonePopup from './PhonePopup';
import { Link, useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<number | null>(null);
  const navigate = useNavigate();
  
  const services = [
    { name: 'Къртене на бани', href: '/bathroom-demolition' },
    { name: 'Къртене на стени', href: '/wall-demolition' },
    { name: 'Къртене на подове', href: '/floor-demolition' },
    { name: 'Къртене на бетон', href: '/concrete-demolition' },
    { name: 'Събаряне на сгради', href: '/building-demolition' }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleCall = () => {
    window.location.href = 'tel:+359895652375';
  };

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = window.setTimeout(() => {
      setIsServicesOpen(false);
    }, 300) as unknown as number;
    setCloseTimeout(timeout);
  };

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'py-2 md:py-4 bg-white shadow-lg' : 'py-4 md:py-6 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={handleHomeClick}>
          <img 
            src="https://i.postimg.cc/d01VWCd6/5864121048155408790-removebg-preview.png" 
            alt="KRTX Logo" 
            className="h-12 md:h-16 w-auto object-contain"
          />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <span 
            onClick={handleHomeClick}
            className={`font-bold hover:opacity-80 transition-colors cursor-pointer ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            Начало
          </span>
          
          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className={`font-bold hover:opacity-80 transition-colors flex items-center gap-1 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              Услуги
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            
            {/* Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 transition-all duration-300 transform origin-top ${
                isServicesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="block px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
          
          <Link 
            to="/about" 
            className={`font-bold hover:opacity-80 transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            За Нас
          </Link>
          <Link 
            to="/contacts" 
            className={`font-bold hover:opacity-80 transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Контакти
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Link 
            to="/gallery" 
            className={`font-bold hover:opacity-80 transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Галерия
          </Link>
          <div className="relative">
            <PhonePopup isVisible={showPhonePopup} />
            <a
              href="tel:+359895652375"
              className={`text-sm font-bold px-4 py-2 rounded-full transition-colors ${
                isScrolled 
                  ? 'bg-teal-500 text-white hover:bg-teal-600' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              onMouseEnter={() => setShowPhonePopup(true)}
              onMouseLeave={() => setShowPhonePopup(false)}
              onClick={handleCall}
            >
              Обади се
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`
        md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-lg transition-all duration-300
        flex flex-col items-center justify-center gap-6 text-center
        ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
      `}>
        <span 
          onClick={handleHomeClick}
          className="text-white text-2xl font-bold hover:text-white/80 transition-colors cursor-pointer"
        >
          Начало
        </span>
        
        {/* Mobile Services Menu */}
        <div className="flex flex-col gap-4">
          <span className="text-white text-2xl font-bold">Услуги</span>
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="text-white/80 text-xl hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {service.name}
            </Link>
          ))}
        </div>
        
        <Link 
          to="/about" 
          className="text-white text-2xl font-bold hover:text-white/80 transition-colors" 
          onClick={() => setIsMobileMenuOpen(false)}
        >
          За Нас
        </Link>
        <Link 
          to="/contacts" 
          className="text-white text-2xl font-bold hover:text-white/80 transition-colors" 
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Контакти
        </Link>
        <Link 
          to="/gallery" 
          className="text-white text-2xl font-bold hover:text-white/80 transition-colors" 
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Галерия
        </Link>
        <a 
          href="tel:+359895652375" 
          className="text-xl font-bold bg-white/10 text-white px-6 py-3 rounded-full hover:bg-white/20 transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Обади се
        </a>
      </div>
    </nav>
  );
};

export default Navigation;