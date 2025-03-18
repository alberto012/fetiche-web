import { memo, useState, useEffect } from 'react';

const Hero = memo(({ colorDeep, mainText, subText, img }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="flex flex-col items-center w-full min-h-[300px] px-4 sm:px-8 md:px-16 z-10 relative overflow-hidden">
      <div className="w-full md:w-4/5 lg:w-3/5 relative">
        <img
          src={img}
          loading="eager"
          alt="Hero"
          className="object-cover w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full sm:w-2/3 md:w-1/2 px-4">
          <button
            type="button"
            className="bg-red-600 border-2 border-red-500 text-white text-base sm:text-lg md:text-xl font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10
                     focus:outline-none w-full rounded-lg tracking-wide uppercase
                     transition-all duration-200 ease-in-out
                     hover:bg-red-700 hover:border-red-600 hover:scale-[1.02]
                     active:bg-red-800 active:border-red-700 active:scale-[0.98]"
            style={{
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            ¡Ordena Ya!
          </button>
        </div>
      </div>
    </main>
  );
});

Hero.displayName = 'Hero';

export default Hero;
