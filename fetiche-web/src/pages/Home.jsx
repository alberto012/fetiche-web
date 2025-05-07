import React from 'react';
import Sucursales from './Sucursales';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { data } from '../data/data';
import { Header, Hero } from '../components';
import 'swiper/swiper-bundle.css';
import MenuSection from './Menu';
import NovedadesSection from './Novedades';
import uhquerico from '../assets/Burger/uhquerico.png';


const Home = () => {
      return (
        <div className="w-full min-h-screen pt-[80px] md:pt-[100px] max-w-[1920px] mx-auto overflow-hidden"> 
         
            <div className="w-full px-4 sm:px-6 md:px-8 flex justify-center">
                <img 
                    src={uhquerico} 
                    className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[450px] max-w-[720px] invert object-contain"
                    alt="Fetiche Burger"
                    loading="lazy"
                />
            </div>
            <Swiper
                spaceBetween={{ base: 20, md: 50 }}
                speed={2000}
                autoplay={{ 
                    delay: 3000, 
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true 
                }}
                effect="fade"
                fadeEffect={{ 
                    crossFade: true,
                    duration: 1000
                }}
                modules={[Autoplay, EffectFade]}
                className="mySwiper mt-4 sm:mt-6 md:mt-8 relative w-full"
                loop={true}
                grabCursor={true}
                breakpoints={{
                    320: {
                        spaceBetween: 10,
                        height: '50vh',
                        paddingBottom: '0.1rem'
                    },
                    750: {
                        spaceBetween: 15,
                        height: '60vh',
                        paddingBottom: '0.25rem'
                    },
                    1024: {
                        spaceBetween: 25,
                        height: '100vh',
                        paddingBottom: '0.5rem'
                    }
                }}
            >
                {data.map(({ id, colorDeep, colorLite, mainText, subText, shadow, mobileShadow, img }) => (
                    <SwiperSlide 
                    onClick={() => window.open('https://linktr.ee/fetiche.lomitos', '_blank')}
                        key={id}  
                        className="w-full h-full flex flex-col gap-1 sm:gap-2 md:gap-4 pt-2 sm:pt-3 md:pt-8 mb-0.25 sm:mb-0.5 md:mb-1 relative overflow-hidden hover:scale-[1.02] transition-transform duration-500"
                    >
                        <Hero
                            colorDeep={colorDeep}
                            mobileShadow={mobileShadow}
                            img={img}
                            className="w-full h-full object-cover"
                            
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
                <NovedadesSection/>
                <MenuSection/>
                <Sucursales />
            </div>
        </div>
    );
};

export default Home;
