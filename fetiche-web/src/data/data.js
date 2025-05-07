import fetiche from '../assets/Burger/cometeldoble.jpg';
import lomito from '../assets/Burger/portada.jpg'; 
import dateelgusto from 'C:/Users/ryrco/Desktop/fetiche/fetiche-web/fetiche-web/src/assets/Burger/datelgusto.png';
// Datos para la sección hero





export const data = [
  {
    id: 1,
    colorDeep: "#e5bb4b", 
    colorLite: "#ffdb8a",
    mainText: "Descubre el sabor único de nuestros lomitos",
    subText: "¡No te lo pierdas!",
    shadow: "0 0 15px rgba(229, 187, 75, 0.5)",
    mobileShadow: "0 0 10px rgba(229, 187, 75, 0.3)",
    img: fetiche,
  },
  {
    id: 2,
    colorDeep: "#fec748",
    colorLite: "#ffe4a3", 
    mainText: "Ofertas especiales todos los días",
    subText: "¡2x1 en lomitos todos los miércoles!",
    shadow: "0 0 15px rgba(254, 199, 72, 0.5)",
    mobileShadow: "0 0 10px rgba(254, 199, 72, 0.3)",
    img: lomito,
  },
  {
    id: 3,
    colorDeep: "#ff8065",
    colorLite: "#ffb3a3",
    mainText: "Probá las novedades del Menú",
    subText: "Prueba nuestros lomitos gourmet",
    shadow: "0 0 15px rgba(255, 128, 101, 0.5)", 
    mobileShadow: "0 0 10px rgba(255, 128, 101, 0.3)",
    img: dateelgusto,
  },
];

// Datos para la navegación
export const navItems = [
  { 
    id: 'inicio',
    label: "Inicio",
    to: '/',
    icon: "🏠"
  },
  {
    id: 'sucursales',
    label: "Sucursales", 
    to: '/sucursales',
    icon: "📍"
  }
];
