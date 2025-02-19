import React, { memo } from 'react';
import { PiCursorClickBold } from "react-icons/pi";
import sucursal1 from "../assets/burger/1.png";
import sucursal2 from "../assets/burger/2.png";


const SucursalCard = memo(({ imagen }) => (
  <div className="relative group rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-102 hover:shadow-xl bg-transparent w-full h-48 sm:h-64 md:h-80">
    <div className="w-full h-full relative">
      <img 
        src={imagen} 
        alt="Sucursal"
        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        width={800}
        height={600}
        decoding="async"
        style={{
          maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)'
        }}
      />
    </div>
    <div className="absolute inset-0 bg-red-900 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
      <span className="text-black text-xl sm:text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <PiCursorClickBold className='text-2xl sm:text-3xl md:text-4xl animate-pulse'/>

      </span>
    </div>
  </div>
));

SucursalCard.displayName = 'SucursalCard';

const Sucursales = () => {
  const sucursales = [
    { id: 1, imagen: sucursal2 },
    { id: 2, imagen: sucursal1 }
  ];

  return (
    <div className="pb-16 sm:pb-24 md:pb-32 text-black">
      <h1 className="my-6 sm:my-10 text-center text-5xl sm:text-4xl md:text-7xl font-black uppercase text-white tracking-tight">SUCURSALES</h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 md:gap-24 max-w-[95vw] mx-auto px-4 sm:px-10">
        {sucursales.map(sucursal => (
          <div key={sucursal.id} className="w-full max-w-[400px] sm:w-4/5 md:w-2/3 lg:w-1/2">
            <SucursalCard 
              imagen={sucursal.imagen}
              className="h-48 sm:h-56 md:h-64 lg:h-72" 
            />
          </div>
        ))}
      </div>
      </div>
    
  );
};

export default memo(Sucursales);
