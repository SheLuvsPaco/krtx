import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';
import PhonePopup from '../components/PhonePopup';
import { Shield, PenTool as Tool, Clock, Users, BadgeCheck, Banknote, Sparkles, Award, Building2, ThumbsUp } from 'lucide-react';

const AboutPage: React.FC = () => {
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

  const features = [
    {
      icon: <Clock className="w-8 h-8 text-teal-500" />,
      title: "Навременна доставка",
      description: "Ценим вашето време и гарантираме завършване на проекта в срок",
      items: [
        "24/7 Достъпност",
        "Ефективно управление на проекти",
        "Бързо време за реакция"
      ],
      footer: "Средно време за отговор: 2 часа"
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-500" />,
      title: "Гарантирано качество",
      description: "Висококачествена изработка и материали във всеки проект",
      items: [
        "Премиум материали",
        "Контрол на качеството",
        "Удължена гаранция"
      ],
      footer: "100% гаранция за удовлетвореност"
    },
    {
      icon: <Users className="w-8 h-8 text-teal-500" />,
      title: "Експертен екип",
      description: "Квалифицирани професионалисти с дългогодишен опит",
      items: [
        "Сертифицирани специалисти",
        "Непрекъснато обучение",
        "Проектен опит"
      ],
      footer: "Над 10 години опит"
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-900">
      <Helmet>
        <title>За KRTX – Лидер в къртачните услуги за Варна и Бургас</title>
        <meta name="description" content="Научете повече за нашия опитен екип, мисия и професионални стандарти в кърти, чисти, извозва услуги във Варна и Бургас." />
        <link rel="canonical" href="https://krtxgroup.com/about" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "KRTX",
              "url": "https://krtxgroup.com",
              "logo": "https://krtxgroup.com/logo.png",
              "description": "Професионални къртачни услуги във Варна и Бургас",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Бургас",
                "addressRegion": "Бургас",
                "streetAddress": "ж.к. Меден Рудник, ул.Черни връх 10",
                "addressCountry": "BG"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+359895652375",
                "contactType": "customer service",
                "areaServed": ["Варна", "Бургас"],
                "availableLanguage": "Bulgarian"
              },
              "sameAs": [
                "https://facebook.com/krtx",
                "https://instagram.com/krtx"
              ]
            }
          `}
        </script>
      </Helmet>
      
      <Navigation />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-800 z-0"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full filter blur-[128px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-300 rounded-full filter blur-[128px] translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white/10 p-4 rounded-full">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white">За нас</h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Вашият надежден партньор в строителните и разрушителни дейности от 2020 година
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-teal-50 p-3 rounded-xl">
                    <Building2 className="w-6 h-6 text-teal-500" />
                  </div>
                  <h2 className="text-3xl font-bold m-0">Нашата История</h2>
                </div>
                <p className="text-xl leading-relaxed mb-8">
                  KRTX Construction стартира през 2020 година с ясна цел — да променим начина, по който се извършват разрушителните и строителни дейности в България. Започнахме като малък екип от трима души и с годините изградихме стабилен, сплотен екип от 12 професионалисти.
                </p>
                <p className="text-xl leading-relaxed mb-8">
                  Днес не се хвалим със "стотици обекти", а с нещо далеч по-ценно — доверието на клиентите ни, които отново и отново ни избират, защото знаят, че работим чисто, отговорно и с грижа към детайла.
                </p>
                <p className="text-xl leading-relaxed mb-8">
                  Търсите партньор, на когото можете да разчитате? Попълнете формата и нека поговорим за вашия проект.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
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

                <div className="flex items-center gap-4 mt-16 mb-6">
                  <div className="bg-teal-50 p-3 rounded-xl">
                    <Award className="w-6 h-6 text-teal-500" />
                  </div>
                  <h2 className="text-3xl font-bold m-0">Нашата Мисия</h2>
                </div>
                <p className="text-xl leading-relaxed mb-8">
                  Мисията ни е проста, но силна — да осигурим безопасно, точно и качествено разрушаване, съобразено с нуждите и очакванията на всеки клиент. Инвестираме постоянно в съвременна техника и обучение на екипа ни, за да сме винаги една крачка напред.
                </p>
                <p className="text-xl leading-relaxed mb-8">
                  Работим прецизно, бързо и с уважение към вашето време и пространство.
                </p>
                <p className="text-xl leading-relaxed mb-8">
                  Готови ли сте да започнем? Свържете се с нас още сега – само едно съобщение дели проекта ви от професионалното му изпълнение.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
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

                <div className="flex items-center gap-4 mt-16 mb-6">
                  <div className="bg-teal-50 p-3 rounded-xl">
                    <Tool className="w-6 h-6 text-teal-500" />
                  </div>
                  <h2 className="text-3xl font-bold m-0">Нашият Подход</h2>
                </div>
                <p className="text-xl leading-relaxed mb-8">
                  За нас всеки обект е уникален и изисква индивидуално отношение. Затова започваме с внимателен оглед и ясна комуникация – изслушваме ви, обсъждаме детайлите и предлагаме най-доброто решение спрямо нуждите и пространството ви.
                </p>
                <p className="text-xl leading-relaxed mb-8">
                  Работим стегнато, организирано и без излишен шум – защото знаем колко важни са времето и спокойствието ви. Винаги спазваме сроковете и оставяме обектите чисти, подготвени за следващия етап от проекта.
                </p>
                <p className="text-xl leading-relaxed mb-8">
                  Това не е просто услуга. Това е начин на работа, на който можете да се доверите.
                </p>
                <p className="text-xl leading-relaxed mb-8">
                  Разкажете ни какво планирате – ние ще ви покажем как действаме.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
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

                <div className="flex items-center gap-4 mt-16 mb-6">
                  <div className="bg-teal-50 p-3 rounded-xl">
                    <ThumbsUp className="w-6 h-6 text-teal-500" />
                  </div>
                  <h2 className="text-3xl font-bold m-0">Защо да изберете нас</h2>
                </div>
                <p className="text-xl leading-relaxed mb-8">
                  В морето от строителни фирми и фирми за къртене, ние се открояваме с нещо съвсем просто — отношение. За нас не сте просто „поръчка", а човек с конкретна нужда, с време, с бюджет и очаквания. И ние ги уважаваме.
                </p>
                <p className="text-xl leading-relaxed mb-8">
                  Комбинираме модерен технически ресурс с стабилен екип, който знае как да свърши работата — без претенции, без оправдания, без излишен шум. Получавате точна оферта, реален срок и ясен резултат.
                </p>
                <p className="text-xl leading-relaxed mb-8">
                  Работим така, както бихме искали да работят за нас.
                  Затова клиентите ни се връщат. А новите идват по препоръка.
                </p>
                <p className="text-xl leading-relaxed mb-8">
                  Свържете се с нас още днес — ще ви покажем защо доверието започва от първия разговор.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="relative h-auto"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt blur-lg"></div>
                    
                    <div className="relative bg-white rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:transform hover:-translate-y-1">
                      <div className="bg-teal-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                      <ul className="space-y-2 mb-4 flex-grow">
                        {feature.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <span className="text-teal-500 flex-shrink-0">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-teal-50 rounded-lg p-2 text-teal-600 font-semibold text-center text-sm">
                        {feature.footer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default AboutPage;