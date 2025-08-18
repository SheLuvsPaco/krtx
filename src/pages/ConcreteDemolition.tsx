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
          alt={`Къртене на бетон във Варна и Бургас - Проект ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    </div>
  );
};

const ConcreteDemolition: React.FC = () => {
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
        <title>Къртене на бетон Варна и Бургас | KRTX – Експертно, Чисто, Бързо</title>
        <meta name="description" content="Къртене на бетон, подове, плочи и фундаменти във Варна и Бургас. Опитен екип, модерна техника, екологично извозване." />
        <link rel="canonical" href="https://krtxgroup.com/concrete-demolition" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Къртене на бетон",
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
              "description": "Професионално къртене на бетон, плочи и фундаменти, извозване на отпадъци",
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
                  "name": "Каква техника използвате за къртене на бетон?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Използваме професионална техника от водещи производители, включително къртачи с различна мощност, диамантени дискове и специализирани инструменти според спецификата на проекта."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Колко време отнема къртенето на бетон?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Времето зависи от дебелината и площта на бетона, но обикновено между 1-3 дни за стандартен обект. Даваме точна оценка след оглед."
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
              src="https://i.postimg.cc/YSXPFzqt/Rocks-falling-off-the-ground-Suitable-for-illustrating-natural-disasters-or-dangerous-situations-P.jpg"
              alt="Къртене на бетон"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-20">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                Професионално къртене на бетон
              </h1>
              <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
                Къртенето на бетон е една от най-тежките и взискателни задачи в строително-ремонтните дейности. Изисква се мощна техника, точен подход и екип, който знае как да действа сигурно и контролирано.
                <br /><br />
                Ние се грижим за всичко – от прецизното къртене до извозването на отпадъците. Работим бързо, чисто и с внимание към всеки детайл, за да гарантираме резултат без компромиси.
                <br /><br />
                Разкажете ни какво трябва да бъде премахнато – ще го направим с нужната сила и точност.
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
                  'https://i.postimg.cc/T2mppz47/5778468340732381482.jpg',
                  'https://i.postimg.cc/tCj7Pr0X/5778468340732381483.jpg'
                ]} 
              />
              <ProjectCard 
                images={[
                  'https://i.postimg.cc/MZ0VhJt2/5778468340732381491.jpg',
                  'https://i.postimg.cc/MKdRp0h9/5778468340732381492.jpg'
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

export default ConcreteDemolition;