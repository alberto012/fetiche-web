import React, { useState, useEffect, memo } from 'react';
import planazo from '../assets/Burger/planazo.png'
import promo from '../assets/Burger/promo.png'
import eligenos from '../assets/Burger/eligenos.png'
import { motion, AnimatePresence } from 'framer-motion';

const novedades = [
  {
    title: "¡MEGA PROMO LOMITO!",
    description: "Lomito de pollo premium con guarnición a elección. ¡El mejor precio del mercado!",
    image: planazo,
   
    disponible: true
  },
  {
    title: "2x1 EN LOMITOS", 
    description: "¡La mejor promo para compartir! Dos lomitos completos al precio de uno.",
    image: eligenos,

    disponible: true
  },
  {
    title: "COMBO FETICHE",
    description: "¡El combo más completo! Lomito + Papas + Gaseosa. ¡Una experiencia única!",
    image: promo,
   

    disponible: true
  },
];

const PromoCard = memo(({ novedad, index, setHoveredIndex }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    key={index}
    className="relative p-4 sm:p-6 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105"
    onMouseEnter={() => setHoveredIndex(index)}
    onMouseLeave={() => setHoveredIndex(null)}
  >
    <motion.div 
      className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10"
      whileHover={{ scale: 1.1 }}
    >
   
    </motion.div>

    
    <div className="relative overflow-hidden rounded-3xl group">
      <motion.img 
        src={novedad.image} 
        alt={novedad.title} 
        loading="lazy"
        className="w-full h-48 sm:h-64 md:h-72 object-cover"
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.8 }}
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 transform transition-all duration-500 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 sm:mb-3 drop-shadow-lg">{novedad.title}</h3>
        <p className="text-gray-200 text-sm sm:text-base md:text-lg font-medium mb-4 sm:mb-6 drop-shadow line-clamp-2">{novedad.description}</p>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <motion.span 
            className="text-2xl sm:text-3xl md:text-4xl font-black text-yellow-500 drop-shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            {novedad.precio}
          </motion.span>
          <motion.button 
            className="py-2 sm:py-4 px-6 sm:px-10 bg-yellow-500 text-black text-sm sm:text-base font-extrabold rounded-full shadow-xl transition-all duration-300 hover:bg-yellow-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://linktr.ee/fetiche.lomitos', '_blank')}
          >
            Ver mas
          </motion.button>
        </div>
      </div>
    </div>
  </motion.div>
));

PromoCard.displayName = 'PromoCard';

const NovedadesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="py-8 sm:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="my-6 sm:my-10 text-center text-3xl sm:text-4xl md:text-7xl font-black uppercase text-white tracking-tight"
        >
          PROMOCIONES <span className="text-red-600">IMPERDIBLES</span>
        </motion.h2>

        
        <div className="grid gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {novedades.map((novedad, index) => (
              <PromoCard 
                key={index}
                novedad={novedad}
                // index={index}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default memo(NovedadesSection);
