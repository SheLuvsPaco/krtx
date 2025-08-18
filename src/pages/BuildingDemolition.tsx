import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import { Hammer, CheckCircle, Clock, Truck, Camera, Shield, PenTool as Tool, Clock4, Sparkles, Users, BadgeCheck, Banknote, Wrench, Trash2, HardHat, Ruler, Shovel, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';
import PhonePopup from '../components/PhonePopup';

interface ProjectCardProps {
  images: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Project image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    </div>
  );
};

const BuildingDemolition: React.FC = () => {
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

  const floatingIcons = [
    Hammer, Wrench, Trash2, HardHat, Ruler, Shovel, Construction
  ];

  return (
    <div className="bg-gray-50 text-gray-900 relative">
      <Helmet>
        <title>Събаряне на сгради Варна и Бургас | KRTX – Къртачни Услуги</title>
        <meta name="description" content="Безопасно събаряне на сгради и конструкций във Варна и Бургас. Сертифициран екип, техника, извозване на отпадъци." />
        <link rel="canonical" href="https://krtxgroup.com/building-demolition" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Събаряне на сгради",
              "provider": {
                "@type": "LocalBusiness",
                "name": "KRTX",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Бургас",
                  "addressRegion": "Бургас",
                  "streetAddress": "ж.к. Меден Рудник, ул.Черни връх 10",
                  "addressCountry": "BG"
                }
              },
              "areaServed": ["Варна", "Бургас"],
              "description": "Професионално събаряне на сгради и конструкции, извозване на отпадъци",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "areaServed": ["Варна", "Бургас"]
              }
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Какви разрешителни са необходими за събаряне на сграда?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "За събаряне на сграда са необходими разрешение за премахване от общината и план за безопасност. Ние съдействаме за набавянето на всички необходими документи."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Извозвате ли отпадъците след събаряне?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Да, извозването на строителните отпадъци е включено в услугата. Разполагаме със собствен транспорт и депо."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 1px 1px, rgba(0, 128, 128, 0.15) 1px, transparent 0)
              `,
              backgroundSize: '40px 40px',
              animation: 'backgroundMove 20s linear infinite',
            }}
          />
          
          {[...Array(14)].map((_, i) => {
            const IconComponent = floatingIcons[i % floatingIcons.length];
            const size = Math.random() * 20 + 20;
            const duration = Math.random() * 15 + 20;
            const delay = Math.random() * -20;
            
            return (
              <div
                key={i}
                className="absolute opacity-5"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: 'translate(-50%, -50%)',
                  animation: `floatIcon ${duration}s ${delay}s linear infinite`,
                }}
              >
                <IconComponent size={size} />
              </div>
            );
          })}

          {[...Array(20)].map((_, i) => (
            <div
              key={`dot-${i}`}
              className="absolute rounded-full bg-teal-500/20 animate-pulse"
              style={{
                width: Math.random() * 10 + 5 + 'px',
                height: Math.random() * 10 + 5 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 2 + 's',
                animationDuration: Math.random() * 3 + 2 + 's',
              }}
            />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes backgroundMove {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(40px, 40px);
            }
          }

          @keyframes floatIcon {
            0% {
              transform: translate(-50%, -50%) rotate(0deg) translateY(0px);
            }
            25% {
              transform: translate(-50%, -50%) rotate(90deg) translateY(100px);
            }
            50% {
              transform: translate(-50%, -50%) rotate(180deg) translateY(0px);
            }
            75% {
              transform: translate(-50%, -50%) rotate(270deg) translateY(-100px);
            }
            100% {
              transform: translate(-50%, -50%) rotate(360deg) translateY(0px);
            }
          }
        `}
      </style>

      <div className="relative z-10">
        <Navigation />
        
        <section className="pt-20 md:pt-32 pb-12 md:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img
              src="https://i.postimg.cc/CLj2g0jS/shutterstock-1661074942-1920w-1.jpg"
              alt="Building Demolition"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-20">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                Професионално събаряне на сгради
              </h1>
              <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
                Търсите надежден партньор за събаряне на сгради? Това е процес, който изисква не само мощна техника, но и безупречна организация, внимателно планиране и стриктни мерки за безопасност.
                <br /><br />
                Ние поемаме цялата отговорност – от прецизното събаряне до извозването на отпадъците и подготвяне на терена за следващия етап. Работим чисто, стегнато и с уважение към всяка подробност от заданието.
                <br /><br />
                Разкажете ни за обекта – ние ще ви предложим сигурно и професионално решение, без излишен риск.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative w-full sm:w-auto">
                  <PhonePopup isVisible={showPhonePopup} />
                  <Button 
                    size="lg"
                    className="w-full sm:w-auto hover:scale-105 active:scale-95 transform transition-all duration-300"
                    onClick={handleCall}
                    onMouseEnter={() => setShowPhonePopup(true)}
                    onMouseLeave={() => setShowPhonePopup(false)}
                  >
                    Обади се
                  </Button>
                </div>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full sm:w-auto text-white border-white hover:bg-white/20 hover:text-white"
                  onClick={scrollToForm}
                >
                  Пишете ни
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">Готови Проекти</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <ProjectCard 
                images={[
                  'https://i.postimg.cc/76D9zQst/3.jpg',
                  'https://i.postimg.cc/CLyGn2RG/4.jpg'
                ]} 
              />
              <ProjectCard 
                images={[
                  'https://i.postimg.cc/X77VLjB4/5.jpg',
                  'https://i.postimg.cc/jSHZjbvn/6.jpg'
                ]} 
              />
            </div>
            <div className="text-center mt-8 md:mt-12">
              <p className="text-lg md:text-xl text-gray-700 mb-4 md:mb-6">Разгледайте още от нашите проекти</p>
              <Link 
                to="/gallery"
                className="inline-flex items-center gap-2 bg-teal-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-teal-600 transition-all duration-300 font-medium hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-sm md:text-base"
              >
                <Camera size={18} className="md:w-5 md:h-5" />
                Галерия
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg">
                <div className="bg-primary-100 p-3 md:p-4 rounded-full w-fit mb-4 md:mb-6">
                  <Hammer className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Професионално оборудване</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Използваме само професионална техника за къртене, която гарантира бързина и прецизност.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg">
                <div className="bg-primary-100 p-3 md:p-4 rounded-full w-fit mb-4 md:mb-6">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Гарантирано качество</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Работим прецизно и чисто, с внимание към всеки детайл от проекта.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg">
                <div className="bg-primary-100 p-3 md:p-4 rounded-full w-fit mb-4 md:mb-6">
                  <Truck className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Извозване на отпадъци</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Осигуряваме пълно почистване и извозване на строителните отпадъци.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white text-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16">Как работим</h2>
                <div className="space-y-8 md:space-y-12">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="bg-teal-500 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 text-lg md:text-xl font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-teal-500">Оглед и оферта</h3>
                      <p className="text-sm md:text-lg text-gray-600">
                        Извършваме безплатен оглед на обекта и изготвяме детайлна оферта.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="bg-teal-500 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 text-lg md:text-xl font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-teal-500">Подготовка</h3>
                      <p className="text-sm md:text-lg text-gray-600">
                        Защитаваме околните повърхности и подготвяме помещението за работа.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="bg-teal-500 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 text-lg md:text-xl font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-teal-500">Изпълнение</h3>
                      <p className="text-sm md:text-lg text-gray-600">
                        Извършваме къртенето професионално и ефективно.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="bg-teal-500 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 text-lg md:text-xl font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-teal-500">Почистване</h3>
                      <p className="text-sm md:text-lg text-gray-600">
                        Почистваме обекта и извозваме всички отпадъци.
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 flex flex-col sm:flex-row gap-4">
                    <div className="relative">
                      <PhonePopup isVisible={showPhonePopup} />
                      <Button 
                        size="lg"
                        className="w-full sm:w-auto"
                        onClick={handleCall}
                        onMouseEnter={() => setShowPhonePopup(true)}
                        onMouseLeave={() => setShowPhonePopup(false)}
                      >
                        Обадете се сега
                      </Button>
                    </div>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="w-full sm:w-auto"
                      onClick={scrollToForm}
                    >
                      Пишете ни
                    </Button>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default BuildingDemolition;