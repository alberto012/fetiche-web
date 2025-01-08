import React from 'react';
// import sucursal1 from "../assets/burger/sucursal1.png";
// import sucursal2 from "../assets/burger/sucursal2.png";
import { PiCursorClickBold } from "react-icons/pi";
import sucursal1 from "../assets/burger/1.png";
import sucursal2 from "../assets/burger/2.png";
const Sucursales = () => {
  return (
    <div className="pb-24">
      <h1 className="my-10 text-center text-6xl font-extrabold uppercase">SUCURSALES</h1>
      <div className="flex flex-row items-center justify-center gap-12">
        <div className="relative group rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-transparent w-full h-48">
          <img src={sucursal2} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"/>
          <div className="absolute inset-0 bg-red-900 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center">
            <span className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 ">{<PiCursorClickBold className='text-5xl'/>}</span>
          </div>
        </div>
        <div className="relative group rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-transparent w-full h-48">
          <img src={sucursal1} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"/>
          <div className="absolute inset-0 bg-red-900 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center">
            <span className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100">{<PiCursorClickBold className='text-5xl'/>}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sucursales;
