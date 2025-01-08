import React from 'react';
import lomitoIA from "../assets/Burger/lomitoIA.png";
import hamburguesaIA from "../assets/Burger/hamburguesaIA.png";
import milanesas from "../assets/Burger/milanesas.png";
import sanguche from "../assets/Burger/sanguche.png";




const items = [
  { id: 1, name: 'LOMITOS', image: lomitoIA },
  { id: 2, name: 'HAMBURGUESAS', image: hamburguesaIA },
  { id: 3, name: 'MILAS', image: milanesas },
  { id: 4, name: 'SANDWICHES', image: sanguche },
];

const MenuSection = () => {
  return (
    <div className=" py-12">
      <h2 className="my-10 text-center text-6xl font-extrabold uppercase">CONOCÉ NUESTRO MENÚ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <div key={item.id} className="relative group rounded-lg overflow-hidden shadow-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-90% to-transparent text-white text-lg font-bold p-4 transition-opacity duration-300 group-hover:opacity-90">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
