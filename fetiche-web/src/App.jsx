import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Sucursales from "./pages/Sucursales";

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden  text-neutral-100 antialiased font-sans selection:text-red-900">
        <div
          className="fixed top-0 -z-10 h-full w-full"
          style={{
            background: '#f70210', // Colores ajustados
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        >
        </div>
        
        <div className="container mx-auto px-7 relative z-10">
          <Header colorDeep="red" /> {/* Asegúrate de pasar el color si es necesario */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sucursales" element={<Sucursales />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
