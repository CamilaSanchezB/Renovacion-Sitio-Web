import React, { useState, useEffect } from 'react';
import Footer from '../sections/Footer';
import LastMission from '../sections/LastMission'
import Carousel3D from '../sections/Carousel3D';
import Welcome from '../sections/Welcome';
import Contact from '../sections/Contact';
import Connectivity from '../sections/Connectivity';
import Applications from '../sections/Applications';
import Navbar from '../components/Navbar';
import CounterSection from '../sections/CounterSection'
import { getRuta } from '../functions/dbFunctionalities';

/**
 * @function Home
 * @category Pages
 * @desc Componente funcional que representa la página de inicio. Muestra varias secciones como carrusel de noticias, contadores, información de la última misión, etc.
 * @param {object[]} noticias - Array de objetos que contiene las noticias a mostrar en el carrusel.
 * @param {object[]} contadores - Array de objetos que contiene la información para los contadores.
 * @returns {JSX.Element}
 */
const Home = ({ noticias, contadores }) => {
 
  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    const element = document.getElementById(href);
    if (element) {
      
      element.scrollIntoView({ block: "center",
      behavior: "smooth" }, true);
    }
  }, []);


  const [foto1, setFoto1] = useState('');
  const [background, setBackground] = useState('');

  // Scroll hacia la sección actual en la carga de la página
  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    getRuta('carouselHome1.webp').then((data) => {
      setFoto1(data);
    });
    getRuta('fondo2.webp').then((data) => {
      setBackground(data);
    });
  }, []);

  // Información de la última misión
  const info = [{
    title: 'Our last mission MDQSAT-1 A & B',
    image: foto1,
    paragraph: 'Our last mission, called "Juana Azurduy II" and "Simon Bolivar" is the third one launched in June 2023 through Space X Falcon 9 Transporter 8. Designed and developed in less than a year with Cubesat standards.',
    Weigth: '570 gr.',
    Size: '10x10x5 cm',
    Sats: '2'
  }];

  return (
    <div>
      {/* Barra de navegación */}
      <Navbar />

      <div className="welcomeWrapper" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}>
        {/* Sección de bienvenida */}
        <Welcome />

        {/* Sección de contadores */}
        <CounterSection contadores={contadores} />
      </div>

      {/* Sección de conectividad */}
      <Connectivity />

      {/* Sección de aplicaciones */}
      <Applications />

      {/* Sección de la última misión */}
      <LastMission info={info} />

      {/* Carrusel 3D para las noticias */}
      <Carousel3D noticias={noticias} CardInit={2} />

      {/* Sección de contacto */}
      <Contact id={'Contact'}/>

      {/* Pie de página */}
      <Footer /> 
    </div>
  );
};

export default React.memo(Home);
