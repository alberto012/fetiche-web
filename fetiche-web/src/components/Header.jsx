import { useState } from 'react';
import promoil from '../assets/Header/promoil.png';
import fetiche from '../assets/Header/fetichenombre.png';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { navItems } from '../data/data';

const Header = ({ colorDeep }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className='flex lg:items-center lg:justify-between lg:flex-row lg:gap-0 w-full md:px-16 flex-col gap-4 px-4'>
      <div className='flex flex-row items-center justify-between lg:w-auto'>
        <div className={`flex justify-center items-center p-3 `} style={{ borderColor: `${colorDeep}` }}>
          <Link to='/' ><img src={promoil} alt="fetiche logo" className="w-full h-auto max-w-[100px]" width="50" height="80" /></Link>
        </div>
        <button className="lg:hidden focus:outline-none focus:shadow-outline" onClick={() => setOpenMenu(prev => !prev)}>
          {openMenu ? <IoCloseOutline className='w-7 h-7' /> : <IoMenuOutline className='w-7 h-7' />}
        </button>
      </div>
      <nav className={`flex lg:items-center lg:justify-end lg:flex-row pb-4 flex-col lg:pb-0 gap-4 origin-top duration-300 ${openMenu ? 'h-full scale-y-1' : 'h-0 transform lg:transform-none scale-y-0'}`}>
        <ul className='flex lg:flex-row lg:items-center lg:gap-4 flex-col justify-center gap-4 list-none'>
          {navItems.map(item => (
            <li key={item.id} className='flex'>
              <Link
                to={item.to}
                onClick={() => setOpenMenu(false)}
                className={`md:text-base text-center text-sm border-2 rounded-full px-10 py-3 transition-colors duration-300 hover:bg-white hover:text-red-900`}
                style={{ borderColor: 'white' }}
              
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to='https://www.instagram.com/fetichelomiteria/?hl=es'
          className={`md:text-base text-center text-sm border-2 rounded-full px-10 py-3 transition-colors duration-300 hover:bg-white hover:text-red-900`}
          style={{ borderColor: 'white' }}
        >
          Conoce más
        </Link>
      </nav>
    </header>
  );
}

export default Header;
