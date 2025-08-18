import React, { useState } from 'react';

interface ShowcaseItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const Showcase: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>(1);
  
  const showcaseItems: ShowcaseItem[] = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/7230262/pexels-photo-7230262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Neural Art",
      description: "Transform concepts into stunning visuals through our neural network."
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3889870/pexels-photo-3889870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Dynamic Landscapes",
      description: "Create immersive environments that evolve with your imagination."
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/4621456/pexels-photo-4621456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Abstract Dimensions",
      description: "Explore the boundaries between reality and fantasy with generative abstractions."
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/1910229/pexels-photo-1910229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Concept Visualization",
      description: "Materialize your ideas with precise control over every visual element."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200/40 to-gray-100/40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Limitless imagination</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            See what creators are building with our technology
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Image display */}
          <div className="lg:w-2/3 aspect-video overflow-hidden rounded-2xl shadow-xl">
            {showcaseItems.map(item => (
              <div 
                key={item.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  activeItem === item.id ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
          
          {/* Selection tabs */}
          <div className="lg:w-1/3 flex flex-col">
            {showcaseItems.map(item => (
              <div
                key={item.id}
                className={`p-6 cursor-pointer transition-all duration-300 rounded-xl ${
                  activeItem === item.id 
                    ? 'bg-primary-50 border border-primary-200' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setActiveItem(item.id)}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;