import Button from './Button';

const Hero = ({ colorDeep, mainText, shadow, mobileShadow, subText, img }) => {
  const standardWidth = "100%"; // Cambiamos a un ancho del 100%
  const standardHeight = 300;

  return (
    <main className={`flex lg:flex-row lg:items-center flex-col items-start px-4 z-10 relative overflow-hidden md:px-16`}>
      <div className="flex flex-col gap-4 lg:w-1/2 justify-center lg:items-start lg:text-left w-full items-center text-center mb-5 md:mb-0">
        <h1 className='md:text-5xl text-4xl mx-auto lg:mx-0 font-bold leading-tight text-navy pl-3'>
          <span style={{ color: `${colorDeep}` }} className='uppercase'>{mainText}!</span>
        </h1>
        <p className='leading-normal md:text-2xl text-lg text-navy pl-2 uppercase'>{subText}</p>
        <div className="w-1/2 md:w-1/2 lg:w-1/2 mb:3 pb-4">
          <Button 
            type='button'
            text='Pedí ahora!'
            className='mt-8 text-xl font-bold py-4 px-9 focus:outline-none w-full'
            style={{ backgroundColor: `${colorDeep}`, boxShadow: `${window.innerWidth > 767 ? shadow : mobileShadow}` }}
          />
        </div>
      </div>

      <div className="lg:w-3/5 w-full lg:-mt-6 relative">
        <img
          src={img}
          loading="eager"
          alt={img}
          className="object-cover w-full h-full" 
          style={{ maxHeight: standardHeight }} // Mantenemos la altura máxima
        />
      </div>
    </main>
  );
};

export default Hero;
