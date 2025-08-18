import React, { useEffect, useState } from 'react';
import Button from './Button';
import PhonePopup from './PhonePopup';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:+359895652375';
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        {/* Only show a dark background while video is loading */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-gray-900"></div>
        )}
        
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={handleVideoLoad}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <source 
            src="https://res.cloudinary.com/dbhqscmvj/video/upload/q_auto:low,f_auto,w_1920,h_1080,c_fill/v1747740929/VES_READY_TO_GO_VID_1_qk01e2.mp4" 
            type="video/mp4" 
          />
          {/* Fallback for very old browsers */}
          <div className="absolute inset-0 bg-gray-900"></div>
        </video>
      </div>
      
      <div className={`container mx-auto px-4 md:px-6 relative z-20 transition-all duration-1000 transform ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className="max-w-4xl">
          <h1 className="font-sans text-white">
            <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-2 tracking-tight leading-[1.1]">
              Къртене без компромиси
            </span>
            <span className="block text-lg sm:text-xl md:text-3xl lg:text-5xl font-light italic mb-8 text-white/90">
              ново начало за вашето пространство
            </span>
          </h1>
          
          <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed mb-8 mt-4">
            Създайте пространство за нови проекти. Доверете се на експерти по къртене и извозване на строителни отпадъци.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-start">
            <div className="relative w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto min-w-40"
                onClick={handleCall}
              >
                Обади се
              </Button>
            </div>
            <Link to="/#contact-form" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto min-w-40 text-white border-white hover:bg-white/30 hover:text-white"
                onClick={scrollToForm}
              >
                Изпратете Запитване
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gray-200/40 h-12 sm:h-16 z-30">
        <div className="container mx-auto px-4 md:px-6 h-full flex items-center">
          <div className="flex items-baseline max-w-4xl">
            <span className="font-serif text-xl sm:text-2xl md:text-4xl font-light text-white tracking-wider">KRTX</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;