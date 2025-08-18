import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Camera, Clock, Shield, Users } from 'lucide-react';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';

const GalleryPage: React.FC = () => {
  const handleCall = () => {
    window.location.href = 'tel:+359895652375';
  };

  const galleryItems = [
    {
      title: 'Завършени проекти, къртене на бани',
      images: [
        'https://i.postimg.cc/gjXwwYY2/5778468340732381487.jpg',
        'https://i.postimg.cc/sDWQsD6n/5778468340732381488.jpg',
        'https://i.postimg.cc/MTQ7NkLN/5778468340732381489.jpg',
        'https://i.postimg.cc/4yFX9Mf4/5778468340732381490-1.jpg'
      ]
    },
    {
      title: 'Завършен обект, къртене на бетон и събаряне на стени и почистване',
      images: [
        'https://i.postimg.cc/T2mppz47/5778468340732381482.jpg',
        'https://i.postimg.cc/tCj7Pr0X/5778468340732381483.jpg',
        'https://i.postimg.cc/MZ0VhJt2/5778468340732381491.jpg',
        'https://i.postimg.cc/MKdRp0h9/5778468340732381492.jpg'
      ]
    },
    {
      title: 'Завършен обект, събаряне на стена и почистване',
      images: [
        'https://i.postimg.cc/RZq2hRbd/5778468340732381500.jpg',
        'https://i.postimg.cc/C1p2vVMr/5778468340732381503.jpg',
        'https://i.postimg.cc/0NVVF8Kc/5778468340732381505.jpg',
        'https://i.postimg.cc/XNRQT1XS/5778468340732381508.jpg'
      ]
    },
    {
      title: 'Завършен обект, къртене на подове',
      images: [
        'https://i.postimg.cc/vmdNnQpm/5778468340732381510.jpg',
        'https://i.postimg.cc/LsB0Bcp3/5778468340732381512.jpg',
        'https://i.postimg.cc/PxskbscM/podove-1.jpg',
        'https://i.postimg.cc/3wDTDJLR/Podove-2.jpg',
        'https://i.postimg.cc/mDYW8pWW/podove-3.jpg',
        'https://i.postimg.cc/jS1T5J4m/podove-4.jpg'
      ]
    },
    {
      title: 'Събаряне на сгради',
      images: [
        'https://i.postimg.cc/76D9zQst/3.jpg',
        'https://i.postimg.cc/CLyGn2RG/4.jpg',
        'https://i.postimg.cc/X77VLjB4/5.jpg',
        'https://i.postimg.cc/jSHZjbvn/6.jpg'
      ]
    }
  ];

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
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Галерия – Кърти, Чисти, Извозва Варна и Бургас | KRTX</title>
        <meta name="description" content="Вижте нашите реализирани проекти във Варна и Бургас – къртене на баня, бетон, стени, подове и др. Професионално изпълнение с гарантирано качество." />
        <link rel="canonical" href="https://krtxgroup.com/gallery" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ImageGallery",
              "name": "KRTX Галерия Проекти",
              "description": "Галерия с реализирани проекти за къртене и събаряне във Варна и Бургас",
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
              "image": [
                {
                  "@type": "ImageObject",
                  "contentUrl": "https://i.postimg.cc/gjXwwYY2/5778468340732381487.jpg",
                  "description": "Къртене на баня във Варна - Завършен проект"
                },
                {
                  "@type": "ImageObject",
                  "contentUrl": "https://i.postimg.cc/T2mppz47/5778468340732381482.jpg",
                  "description": "Къртене на бетон в Бургас - Завършен проект"
                }
              ]
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
                  "name": "Какви проекти изпълнявате?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Изпълняваме всички видове къртачни работи - къртене на бани, стени, подове, бетон, както и цялостно събаряне на сгради. Работим както в жилищни, така и в търговски обекти."
                  }
                },
                {
                  "@type": "Question",
                  "name": "В кои градове работите?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Основно работим във Варна и Бургас, но при по-големи проекти можем да обслужваме и други населени места в региона."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      <Navigation />
      
      <div className="pt-32 pb-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-teal-500/10 p-4 rounded-full">
              <Camera className="w-6 h-6 text-teal-500" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2 text-gray-900">Галерия – Реални проекти във Варна и Бургас</h1>
              <p className="text-gray-600">
                Разгледайте нашите завършени проекти и се уверете в качеството на работа
              </p>
            </div>
          </div>

          <div className="space-y-16">
            {galleryItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center uppercase tracking-wide">
                  {item.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {item.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="relative rounded-xl overflow-hidden shadow-lg">
                      <div className="aspect-video">
                        <img 
                          src={image} 
                          alt={`${item.title} - Проект ${imageIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="py-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Защо да изберете KRTX за вашия проект?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                С над 10 години опит в бранша, ние предлагаме професионални услуги на достъпни цени. Нашият екип е готов да се справи с всяко предизвикателство, осигурявайки ви качествено и навременно изпълнение.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt blur-lg"></div>
                  
                  <div className="relative bg-white rounded-xl p-8 h-full flex flex-col transition-all duration-300 hover:transform hover:-translate-y-1">
                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <ul className="space-y-3 mb-6 flex-grow">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-teal-500 flex-shrink-0">✓</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg p-3 text-teal-600 font-semibold text-center">
                      {feature.footer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold mb-4">Готови ли сте да започнем вашия проект?</h3>
              <p className="text-xl text-gray-600 mb-8">Свържете се с нас за безплатна консултация и оферта</p>
              <Button 
                size="lg"
                onClick={handleCall}
                className="hover:scale-105 active:scale-95 transform transition-all duration-300"
              >
                Обадете се сега
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default GalleryPage;