import React from "react";
import logo from "../assets/logoF.png";
import { RiHome2Line } from "react-icons/ri";
// import {FaInstagram} from "react-icons/fa"
import { IoFastFoodOutline } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="Logo" className="rounded-full  max-h-16" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl font-medium">
        <button class=" text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-white hover:text-black cursor-pointer">
          <RiHome2Line />
        </button>
        <button class=" text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-white hover:text-black">
          <IoFastFoodOutline />
        </button>
        <button class=" text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-white hover:text-black">
          <SiGooglemaps />
        </button>

        {/* <RiHome2Line />
    <IoFastFoodOutline />
    <SiGooglemaps /> */}
      </div>
    </nav>
  );
};

export default Navbar;
