import React, { memo } from 'react';
import { PiCursorClickBold } from "react-icons/pi";
import sucursal1 from "../assets/burger/1.png";
import sucursal2 from "../assets/burger/2.png";
import promoil from "../assets/Burger/logoRojo.png";

const SucursalCard = memo(({ imagen, link }) => (
  <div 
    className="relative group rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-102 hover:shadow-xl bg-transparent w-full h-48 sm:h-64 md:h-80 cursor-pointer"
    onClick={() => window.open(link, '_blank')}
  >
    <div className="w-full h-full relative">
      <img 
        src={imagen} 
        alt="Sucursal"
        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        width={800}
        height={600}
        decoding="async"
      />
    </div>
    <div className="absolute inset-0 bg-opacity-0 flex items-center justify-center">
      <span className="text-black text-xl sm:text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <PiCursorClickBold className='text-2xl sm:text-3xl md:text-4xl animate-pulse text-yellow-500'/>
      </span>
    </div>
  </div>
));

SucursalCard.displayName = 'SucursalCard';

const Sucursales = () => {
  const sucursales = [
    { id: 1, imagen: sucursal1, link: "https://menu.fu.do/fetiche" },
    { id: 2, imagen: sucursal2, link: "https://menu.fu.do/feti" }
  ];

  return (
    <div className="pb-16 sm:pb-24 md:pb-32 text-black">
      <h1 className="my-6 sm:my-10 text-center text-5xl sm:text-4xl md:text-7xl font-black uppercase text-white tracking-tight">SUCURSALES</h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-32 md:gap-48 max-w-[95vw] mx-auto px-4 sm:px-10 relative">
        {sucursales.map((sucursal, index) => (
          <React.Fragment key={sucursal.id}>
            <div className="w-full max-w-[400px] sm:w-4/5 md:w-2/3 lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gray-900/40 blur-3xl -z-10 animate-pulse"></div>
                <SucursalCard 
                  imagen={sucursal.imagen}
                  link={sucursal.link}
                  className="h-48 sm:h-56 md:h-64 lg:h-72 rounded-3xl relative z-10" 
                />
              </div>
            </div>
            {index === 0 && (
              <div className="hidden sm:block w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img 
                  src={promoil} 
                  alt="Promoil Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default memo(Sucursales);
