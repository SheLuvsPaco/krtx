import React, { useState } from 'react';
import Button from './Button';
import PhonePopup from './PhonePopup';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  const handleCall = () => {
    window.location.href = 'tel:+359895652375';
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-24 bg-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-primary-500 rounded-full filter blur-[128px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-primary-300 rounded-full filter blur-[128px] translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-3 md:mb-6 leading-tight">
            Готови ли сте за промяна?
          </h2>
          
          <p className="text-white/70 text-sm md:text-xl mb-6 md:mb-10 leading-relaxed">
            Изберете професионално къртене и демонтаж, на които можете да разчитате. Получете индивидуална оферта или разгледайте нашите услуги.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="relative">
              <PhonePopup isVisible={showPhonePopup} />
              <Button 
                size="lg" 
                variant="secondary" 
                className="w-full sm:min-w-48 hover:scale-105 active:scale-95 transform transition-all duration-300"
                onClick={handleCall}
                onMouseEnter={() => setShowPhonePopup(true)}
                onMouseLeave={() => setShowPhonePopup(false)}
              >
                Обадете се сега!
              </Button>
            </div>
            <Link to="/#contact-form" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:min-w-48 text-white border-white hover:bg-white/20 hover:text-white"
                onClick={scrollToForm}
              >
                Изпратете запитване
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;