import React, { useState } from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, image }) => {
  return (
    <div className="bg-gradient-to-br from-teal-500/10 to-teal-600/5 backdrop-blur-sm p-4 md:p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
        <img 
          src={image} 
          alt={author} 
          className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover ring-4 ring-teal-500/20 group-hover:ring-teal-500/40 transition-all duration-300"
        />
        <div>
          <h3 className="font-semibold text-gray-900 text-base md:text-lg">{author}</h3>
          <div className="flex gap-1 text-teal-500">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-base md:text-lg">★</span>
            ))}
          </div>
        </div>
      </div>
      <blockquote className="text-gray-700 text-sm md:text-base leading-relaxed">
        "{quote}"
      </blockquote>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  
  const testimonials = [
    {
      quote: "Бърза и лесна комуникация с екипа. Всичко бе извършено прецизно и в срок, с предварителен оглед, професионално изпълнение. Препоръчваме и бихме ползвали отново услугите им при първа възможност!",
      author: "Кремена Владимирова",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      quote: "Трябваше да се преместим спешно в друг град и го организираха буквално за един ден. Работят бързо, чисто и качествено. Цените са абсолютно конкурентни. Много съм доволна и препоръчвам Веско с две ръце.",
      author: "Вероника Христова",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      quote: "Изклютелно професионална услуга! Много съм доволен. Момчетата пристигнаха на време. Всичко беше добре организирано, без излишен стрес. Високо качество на достъпна цена! Препоръчвам!",
      author: "Атанас Иванов",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      quote: "Коректна и точна фирма – така бих описала фирмата. Попадна ми случайно в интернет и от тогава непрекъснато се доверявам на техните услуги.",
      author: "Маруся Цонева",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      quote: "Изключително точни и коректни! Рядко ми се случва да остана толкова приятно изненадана когато работя с нови хора! Бързи, чисти и сръчни момчета! Препоръчвам!Благодаря Ви!",
      author: "Габриела Денева",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      quote: "Всичко бързо и точно навреме. касови бележки, фактури, учтивост.",
      author: "Юри Славчев",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Какво казват нашите клиенти</h2>
          <p className="text-base md:text-xl text-gray-600">
            Присъединете се към хилядите доволни клиенти, които промениха своите пространства с нас
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {visibleTestimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              image={testimonial.image}
            />
          ))}
        </div>

        {!showAll && testimonials.length > 3 && (
          <div className="text-center mt-8 md:mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="bg-teal-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-teal-600 transition-all duration-300 font-medium hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-sm md:text-base"
            >
              Още Ревюта
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;