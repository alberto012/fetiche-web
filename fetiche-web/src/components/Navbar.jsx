import { useState } from 'react';
import promoil from '../assets/Header/promoil.png';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { navItems } from '../data/data';

const Navbar = ({ colorDeep }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-[999] flex flex-col lg:flex-row w-full px-4 md:px-8 gap-2 lg:gap-0 lg:items-center lg:justify-between bg-gradient-to-b from-black/60 via-black/40 to-transparent backdrop-blur-md'>
        <div className='flex items-center justify-between w-full lg:w-auto'>
          <div className={`flex justify-center items-center p-2`} style={{ borderColor: `${colorDeep}` }}>
            <Link to='/'>
              <img src={promoil} alt="fetiche logo" className="w-full h-auto max-w-[80px] md:max-w-[90px]" width="50" height="80" />
            </Link>
          </div>
          <button 
            className="lg:hidden focus:outline-none focus:shadow-outline p-2" 
            onClick={() => setOpenMenu(prev => !prev)}
          >
            {openMenu ? <IoCloseOutline className='w-6 h-6' /> : <IoMenuOutline className='w-6 h-6' />}
          </button>
        </div>

        <nav className={`${openMenu ? 'flex' : 'hidden lg:flex'} flex-col lg:flex-row w-full lg:w-auto items-center gap-3 transition-all duration-300 ease-in-out`}>
          <ul className='flex flex-col lg:flex-row items-center gap-3 w-full lg:w-auto'>
            {navItems.map(item => (
              <li key={item.id} className='w-full lg:w-auto'>
                <Link
                  to={item.to}
                  onClick={() => setOpenMenu(false)}
                  className='text-sm md:text-base text-center font-bold bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white px-4 md:px-6 py-2 transition-all duration-300 hover:bg-red-700 hover:text-yellow-400 rounded-lg backdrop-blur-sm border border-white/30 hover:border-yellow-400 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] w-full block'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <Link
        to='https://pedir.fetichelomiteria.com.ar'
        className='fixed bottom-4 right-4 z-[1000] text-center text-sm sm:text-base md:text-lg font-black bg-gradient-to-r from-red-800 via-red-600 to-red-800 text-yellow-300 rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 transition-all duration-300 transform hover:scale-125 hover:shadow-[0_0_50px_rgba(220,38,38,0.8)] shadow-2xl animate-bounce border-4 border-red-500 uppercase tracking-wider whitespace-nowrap font-extrabold'
      >
        🔥 ¡PEDÍ YA! 🔥
      </Link>
    </>
  );
}

export default Navbar;
