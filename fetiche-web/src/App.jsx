import React from "react";
import Navbar from "./components/Navbar";
import Presentacion from "./components/Presentacion";
import Nosotros from "./components/Nosotros";
import Sucursales from "./components/Sucursales";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-100 antialiased slec  selection:text-red-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-50 h-full w-full items-center px-5 py-24" style={{ background: 'radial-gradient(100% 100% at 50% 10%, #6b1111 -10%, #000 100%)' }}>
      </div>
      </div>
      
      <div className="container mx-auto px-7">


      <Navbar />
      <Presentacion/>
      <Nosotros/>
      <Sucursales/>
      </div>
    </div>
  );
};

export default App;
