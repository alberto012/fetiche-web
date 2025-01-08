import React from 'react';
import planazo from '../assets/Burger/planazo.png'
import promo from '../assets/Burger/promo.png'
import eligenos from '../assets/Burger/eligenos.png'

const novedades = [
  {
    title: "Nuevo Lomito de Pollo",
    description: "¡Prueba nuestro delicioso lomito de pollo con ingredientes frescos!",
    image: planazo,
  },
  {
    title: "Combo 2x1",
    description: "Aprovecha nuestra oferta especial de 2x1 en todos los lomitos.",
    image:eligenos,
  },
  {
    title: "Ensalada Especial",
    description: "Disfruta de nuestra nueva ensalada especial con ingredientes orgánicos.",
    image: promo,
  },
];

const NovedadesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="my-10 text-center text-6xl font-extrabold uppercase">NOVEDADES</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {novedades.map((novedad, index) => (
            <div 
              key={index} 
              className="relative bg-gradient-to-br from-transparent via-red-950 to-red-990 p-6 rounded-3xl shadow-2xl transform transition-transform duration-500 hover:rotate-3"
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img 
                  src={novedad.image} 
                  alt={novedad.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
                <button 
                  className="absolute bottom-4 right-4 py-2 px-6 bg-yellow-500 text-black font-bold rounded-full transition-colors duration-300 hover:bg-yellow-900"
                >
                  Saber más
                </button>
              </div>
              <h3 className="text-2xl font-semibold mt-4 text-white">{novedad.title}</h3>
              <p className="text-gray-300 mt-2 font-medium">{novedad.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NovedadesSection;
