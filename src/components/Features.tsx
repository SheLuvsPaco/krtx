import React from 'react';
import { Hammer, Drill, Shovel, Construction, Building2 } from 'lucide-react';
import Button from './Button';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  backgroundImage?: string;
  isDarker?: boolean;
  link?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, backgroundImage, isDarker = false, link }) => {
  const ButtonComponent = link ? Link : Button;
  
  return (
    <div className="relative group h-[400px] md:h-[500px]">
      <div className="absolute -inset-0.5 bg-primary-400 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
      
      <div 
        className="bg-white shadow-lg rounded-xl p-6 md:p-8 relative transition-all duration-300 transform group-hover:-translate-y-2 h-full flex flex-col"
        style={backgroundImage ? {
          backgroundImage: isDarker ? 
            `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})` :
            `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white'
        } : {}}
      >
        <div className={`${backgroundImage ? 'bg-white/20' : 'bg-primary-100'} p-3 md:p-4 rounded-full w-fit self-start mb-4 md:mb-6`}>
          {icon}
        </div>
        <h3 className={`text-xl md:text-2xl font-bold mb-3 tracking-wide uppercase group-hover:bg-black/50 group-hover:px-2 group-hover:py-1 group-hover:rounded transition-all duration-300 inline-block ${backgroundImage ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'Oswald' }}>{title}</h3>
        <p className={`leading-relaxed opacity-0 group-hover:opacity-100 group-hover:bg-black/50 group-hover:p-3 group-hover:rounded transition-all duration-300 flex-grow text-sm md:text-base ${backgroundImage ? 'text-white/90' : 'text-gray-600'}`} style={{ fontFamily: 'Oswald', fontWeight: 400 }}>
          {description}
        </p>
        <div className="mt-4 md:mt-6 w-full">
          <ButtonComponent 
            to={link}
            variant="secondary" 
            size="sm" 
            className={`text-sm px-3 md:px-4 py-2 w-full font-medium tracking-wide uppercase ${
              backgroundImage ? 'bg-white/30 hover:bg-white/40 text-white' : 'bg-primary-500 hover:bg-primary-600'
            }`}
            style={{ fontFamily: 'Oswald' }}
          >
            Научете повече
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Hammer className="h-5 h-5 md:h-6 md:w-6 text-white" />,
      title: "Къртене на бани",
      description: "Готови сте да преобразите банята си, но ви притеснява първата и най-трудна стъпка – къртенето?",
      backgroundImage: "https://i.postimg.cc/qMp1pZW5/29-Uniquely-Cozy-Black-Bathroom-Decor-Inspirations.jpg",
      link: "/bathroom-demolition"
    },
    {
      icon: <Drill className="h-5 h-5 md:h-6 md:w-6 text-white" />,
      title: "Къртене на стени",
      description: "Професионално къртене на стени с модерна техника и опитен екип. Бързо, чисто и безопасно.",
      backgroundImage: "https://i.postimg.cc/xTkcN0rJ/Demolishing-a-wall-to-create-an-open-floor-plan-in-home-renovation-royalty-free-stock-ph.jpg",
      link: "/wall-demolition"
    },
    {
      icon: <Shovel className="h-5 h-5 md:h-6 md:w-6 text-white" />,
      title: "Къртене на подове",
      description: "Професионално къртене на подове с модерна техника. Бързо и качествено изпълнение.",
      backgroundImage: "https://i.postimg.cc/kMR2BJPV/1.jpg",
      link: "/floor-demolition"
    },
    {
      icon: <Construction className="h-5 h-5 md:h-6 md:w-6 text-white" />,
      title: "Къртене на бетон",
      description: "Къртенето на бетон е една от най-сложните и тежки задачи в строително-ремонтните дейности. Изисква се мощна техника, точен подход и екип с реален опит",
      backgroundImage: "https://i.postimg.cc/VL7pp85R/2.jpg",
      link: "/concrete-demolition"
    },
    {
      icon: <Building2 className="h-5 h-5 md:h-6 md:w-6 text-white" />,
      title: "Събаряне на сгради",
      description: "Търсите надежден партньор за събаряне на сгради? Професионални услуги по разрушаване на сгради с гарантирана безопасност, модерна техника и безупречна организация.",
      backgroundImage: "https://i.postimg.cc/SQMGKStR/SF-supervisors-seek-to-stop-illegal-home.jpg",
      isDarker: true,
      link: "/building-demolition"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Нашите Услуги</h2>
          <p className="text-gray-600 text-base md:text-xl max-w-3xl mx-auto font-light">
            Нашият екип предлага професионални решения за всякакъв вид къртене, демонтаж и почистване. Независимо дали става дума за ремонт, реконструкция или освобождаване на пространство – можете да разчитате на нас за прецизна работа и ясен резултат.
          </p>
          <p className="text-gray-600 text-base md:text-xl max-w-3xl mx-auto font-light mt-4">
            Разкажете ни какво ви предстои – ние ще се погрижим за всичко останало. Попълнете формата и ще се свържем с вас в най-кратък срок.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              backgroundImage={feature.backgroundImage}
              isDarker={feature.isDarker}
              link={feature.link}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
          {features.slice(3).map((feature, index) => (
            <FeatureCard 
              key={index + 3}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              backgroundImage={feature.backgroundImage}
              isDarker={feature.isDarker}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;