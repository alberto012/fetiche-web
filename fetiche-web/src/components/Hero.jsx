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
                 </div>
      </div>
    </main>
  );
});

Hero.displayName = 'Hero';

export default Hero;
