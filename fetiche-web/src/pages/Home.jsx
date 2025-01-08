
import React from 'react';
import Presentacion from './Presentacion';
import Nosotros from './Nosotros';
import Sucursales from './Sucursales';
import Carousel from '../components/Carousel';
import fetiche from '../assets/burger/fetiche.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { data } from '../data/data';
import { Header, Hero } from '../components';
import 'swiper/swiper-bundle.css';
import MenuSection from './Menu';
import NovedadesSection from './Novedades';

const Home = () => {
      return (
        <div>
            <Presentacion />
            
            <Swiper
                spaceBetween={30}
                speed={3000}
                autoplay={{ delay: 500, disableOnInteraction: false }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                modules={[Autoplay, EffectFade]}
                className="mySwiper"
            >
                {data.map(({ id, colorDeep, colorLite, mainText, subText, shadow, mobileShadow, img }) => (
                    <SwiperSlide key={id}  className="w-full h-screen flex flex-col md:gap-10 gap-4 pt-1 md:pt-8 mb-4">
                        
                        <Hero
                            colorDeep={colorDeep}
                            mainText={mainText}
                            subText={subText}
                            shadow={shadow}
                            mobileShadow={mobileShadow}
                            img={img}
                        />
                    </SwiperSlide>
                    
                ))}
                
            </Swiper>
            <NovedadesSection/>
            <MenuSection/>
            <Sucursales />
        </div>
    );
};

export default Home;
