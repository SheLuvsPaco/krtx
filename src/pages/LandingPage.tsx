import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Helmet>
        <title>Кърти, Чисти, Извозва Варна и Бургас | Професионални Услуги от KRTX</title>
        <meta name="description" content="Експертни къртачни услуги, почистване и извозване на отпадъци във Варна и Бургас. Денонощна реакция, опитен екип, топ цени. Обадете се за безплатна оферта!" />
        <link rel="canonical" href="https://krtxgroup.com/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "KRTX",
              "image": "https://krtxgroup.com/logo.png",
              "description": "Професионални къртачни услуги във Варна и Бургас",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Бургас",
                "addressRegion": "Бургас",
                "streetAddress": "ж.к. Меден Рудник, ул.Черни връх 10",
                "addressCountry": "BG"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "42.4560",
                "longitude": "27.4063"
              },
              "url": "https://krtxgroup.com",
              "telephone": "+359895652375",
              "priceRange": "$$",
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
              "areaServed": ["Варна", "Бургас"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Къртачни услуги",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Къртене на бани",
                      "url": "https://krtxgroup.com/bathroom-demolition"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Къртене на стени",
                      "url": "https://krtxgroup.com/wall-demolition"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Къртене на подове",
                      "url": "https://krtxgroup.com/floor-demolition"
                    }
                  }
                ]
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
                  "name": "Колко време отнема къртенето на баня?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Времето за къртене на баня зависи от размера и сложността на проекта. Обикновено отнема между 1-2 дни за стандартна баня."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Включени ли са отпадъците в цената?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Да, цената включва извозване на всички строителни отпадъци от обекта."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Работите ли в почивни дни?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Да, предлагаме услуги 7 дни в седмицата, включително през почивните дни."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      <Navigation />
      <Hero />
      <Features />
      <Testimonials />
      <ContactForm />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default LandingPage;