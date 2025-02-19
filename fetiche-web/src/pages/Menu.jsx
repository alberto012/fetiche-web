import React, { memo, useState, useEffect } from 'react';
import lomitoIA from "../assets/Burger/lomitoIA.png";
import hamburguesaIA from "../assets/Burger/hamburguesaIA.png";
import milanesas from "../assets/Burger/milanesas.png";
import sanguche from "../assets/Burger/sanguche.png";
import { motion, AnimatePresence } from 'framer-motion';

const MenuItem = memo(({ item, isActive, onClick, isMobile }) => (
  <motion.div
    layout
    onClick={onClick}
    className={`relative cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500
      rounded-2xl ${isActive && !isMobile ? 'md:col-span-2 md:row-span-2' : ''}`}
    whileHover={{ scale: isMobile ? 1.02 : 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <motion.div className="relative w-full h-full">
      <motion.img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className={`w-full h-full object-cover ${
          isMobile ? 'h-64' : isActive ? 'h-[500px]' : 'h-[300px]'
        }`}
        layoutId={`image-${item.id}`}
      />
      <motion.div 
        className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent 
          text-white ${isMobile ? 'p-2' : isActive ? 'p-4' : 'p-6'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3 
          className={`font-black tracking-wider drop-shadow-lg ${
            isMobile ? 'text-2xl mb-2' : isActive ? 'text-2xl mb-4' : 'text-2xl'
          }`}
          layoutId={`title-${item.id}`}
        >
          {item.name}
        </motion.h3>
        {(isActive || isMobile) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <motion.p className={`text-gray-200 font-medium leading-relaxed ${
              isMobile ? 'text-base' : isActive ? 'text-xl' : 'text-base'
            }`}>
              Descubre nuestra selección de {item.name.toLowerCase()} preparados con los mejores ingredientes
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-full
                transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isMobile ? 'px-6 py-3 text-base w-full' : isActive ? 'px-6 py-1 text-xl' : 'px-2 py-3 text-lg'
                }`}
            >
              Ver Más
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  </motion.div>
));

MenuItem.displayName = 'MenuItem';

const items = [
  { id: 1, name: 'LOMITOS', image: lomitoIA },
  { id: 2, name: 'HAMBURGUESAS', image: hamburguesaIA },
  { id: 3, name: 'MILAS', image: milanesas },
  { id: 4, name: 'SANDWICHES', image: sanguche },
];

const MenuSection = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 720);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-4 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="mb-6 md:mb-12 lg:mb-16 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          CONOCE NUESTRO <span className="text-red-600 drop-shadow-md">MENÚ</span>
        </motion.h2>

        {isMobile ? (
          // Vista móvil: Lista vertical con scroll suave y diseño mejorado
          <motion.div 
            className="flex flex-col gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden rounded-lg h-48 relative"
              >
                <div className="absolute inset-0">
                  <MenuItem 
                    item={item}
                    isActive={true}
                    onClick={() => {}}
                    isMobile={true}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-full shadow-lg hover:bg-red-700 transition-all duration-300"
                    >
                      Ver Más
                    </motion.button>
                  </div>
                </div>


              </motion.div>
            ))}
          </motion.div>
        ) : (
          // Vista desktop: Grid interactivo
          <motion.div 
            className="flex flex-row flex-wrap justify-center gap-4 px-4"
            layout
          >
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  className="w-[280px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <MenuItem
                    item={item}
                    isActive={activeItem === item.id}
                    onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
                    isMobile={false}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default memo(MenuSection);
