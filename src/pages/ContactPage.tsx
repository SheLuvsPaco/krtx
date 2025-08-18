import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Helmet>
        <title>Свържете се с KRTX | Кърти, Чисти, Извозва Варна и Бургас</title>
        <meta name="description" content="Бърз контакт с KRTX – къртачни услуги във Варна и Бургас. Денонощен телефон, имейл, формуляр, офис адреси. Обадете се сега!" />
        <link rel="canonical" href="https://krtxgroup.com/contacts" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "KRTX Contact Page",
              "description": "Contact information for KRTX demolition services in Varna and Burgas",
              "mainEntity": {
                "@type": "LocalBusiness",
                "name": "KRTX",
                "image": "https://krtxgroup.com/logo.png",
                "telephone": ["+359895652375", "+359897798877"],
                "email": "office@vesgroupinvest.com",
                "address": [
                  {
                    "@type": "PostalAddress",
                    "addressLocality": "Бургас",
                    "addressRegion": "Бургас",
                    "streetAddress": "ж.к. Меден Рудник, ул.Черни връх 10",
                    "addressCountry": "BG"
                  },
                  {
                    "@type": "PostalAddress",
                    "addressLocality": "Варна",
                    "addressRegion": "Варна",
                    "streetAddress": "ж.к. Чайка 189",
                    "addressCountry": "BG"
                  }
                ],
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "00:00",
                  "closes": "23:59"
                },
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
                  "name": "Какво е работното време на KRTX?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Работим 24/7, включително през почивните дни. На разположение сме за спешни случаи по всяко време."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Как мога да получа оферта за къртене?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Можете да се свържете с нас по телефон, имейл или чрез контактната форма на сайта. След кратка консултация и безплатен оглед ще получите детайлна оферта."
                  }
                }
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
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/10 p-4 rounded-xl">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Контакти</h1>
          </div>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl">
            Свържете се с нас за професионална консултация и оферта. Нашите офиси са отворени 7 дни в седмицата.
          </p>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Burgas Office */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-6">Офис Бургас</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <p className="text-lg">гр. Бургас, ж.к. Меден Рудник, ул.Черни връх 10</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-teal-600 flex-shrink-0" />
                    <a href="tel:+359895652375" className="text-lg hover:text-teal-600 transition-colors">
                      0895 652 375
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-teal-600 flex-shrink-0" />
                    <a href="mailto:office@vesgroupinvest.com" className="text-lg hover:text-teal-600 transition-colors">
                      office@vesgroupinvest.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-teal-600 flex-shrink-0" />
                    <p className="text-lg">24/7 | Понеделник – Неделя</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[400px] relative overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5887.27936335945!2d27.406275!3d42.456682!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6eb41be34f4f3%3A0x4a5f81d4304ddf0a!2z0KLRgNCw0L3RgdC_0L7RgNGCINC4INCl0LDQvNCw0LvRgdC60Lgg0YPRgdC70YPQs9C4IC0gVkVTIEdST1VQIExURC4g0KPRgdC70YPQs9C4INGBINC_0LDQtNCw0LnQtNC1INCx0L7RgNC0Lg!5e0!3m2!1sen!2sbg!4v1747683735660!5m2!1sen!2sbg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-transform duration-300 hover:scale-105"
                ></iframe>
              </div>
            </div>

            {/* Varna Office */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-6">Офис Варна</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <p className="text-lg">гр. Варна, ж.к. Чайка 189</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-teal-600 flex-shrink-0" />
                    <a href="tel:+359897798877" className="text-lg hover:text-teal-600 transition-colors">
                      0897 798 877
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-teal-600 flex-shrink-0" />
                    <a href="mailto:office@vesgroupinvest.com" className="text-lg hover:text-teal-600 transition-colors">
                      office@vesgroupinvest.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-teal-600 flex-shrink-0" />
                    <p className="text-lg">24/7 | Понеделник – Неделя</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[400px] relative overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d5815.566818858812!2d27.938524!3d43.214032!3m2!1i1024!2i768!4f13.1!2m1!1zZy5rLiBDaGF5a2FQcmltb3Jza2ksINC2LtC6LiDQp9Cw0LnQutCwIDE4OSA5MDEwIFZhcm5h!5e0!3m2!1sen!2sbg!4v1747683868288!5m2!1sen!2sbg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-transform duration-300 hover:scale-105"
                ></iframe>
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

export default ContactPage;