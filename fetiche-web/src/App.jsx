import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import fetiche from './assets/Burger/fondo.png';
import Sucursales from "./pages/Sucursales"; 
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-100 antialiased font-sans">
        <Navbar />
        <div className="w-full relative z-0 pt-[80px] md:pt-[100px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sucursales" element={<Sucursales />} />
          </Routes>
        </div>

        <div className="fixed top-0 -z-10 h-full w-full bg-no-repeat bg-cover bg-center bg-black/80"
             style={{ backgroundImage: `url(${fetiche})`, opacity: 0.95 }}>
        </div>

        <div className="fixed top-0 -z-10 h-full w-full backdrop-blur-xl bg-black/40">
        </div>
      </div>
    </Router>
  );
};

export default App;
