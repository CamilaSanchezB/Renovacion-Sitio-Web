import React, {useEffect, useState} from 'react';
import Welcome2 from '../sections/Welcome2'; 
import CarouselWorks from '../sections/CarouselWorks';
import Navbar from '../components/Navbar';
import { getRuta } from '../functions/dbFunctionalities';
import Title from '../components/Title';
import "../styles/Works.css"
import "../styles/Connectivity.css"

/**
 * @function HowItWorks
 * @category Pages
 * @desc Componente funcional que representa la sección "How It Works" en la página de inicio. Muestra un carrusel con atributos y una breve descripción sobre cómo funciona el servicio.
 * @returns {JSX.Element}
 */
export default function HowItWorks() {
  // Lista de atributos para el carrusel
  const atributos = ['Atribute', 'Atribute', 'Atribute', 'Atribute', 'Atribute'];

  // Estado para el scroll
  const [scrollear, setScrollear] = useState('');

  // Estado para la imagen de fondo
  const [background, setBackground] = useState('');

  /**
   * Función useEffect para cargar la imagen de fondo desde una ruta específica utilizando la función getRuta.
   */
  useEffect(() => {
    getRuta('fondo.webp').then((data) => {
      setBackground(data);
    });
  },[]);

  /**
   * Función useEffect para hacer scroll a la sección correspondiente cuando el estado "scrollear" cambia.
   */
  useEffect(()=>{
    if(scrollear !== ''){
      let element = document.getElementById(scrollear);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setScrollear('');
    }
  }, [scrollear])

  return (
    <div className="worksSection" >
      {/* Barra de navegación */}
      <Navbar />

      {/* Sección de bienvenida */}
      <Welcome2 title={"The first low-cost picosatellite constellation in LATAM"} text={"Our small satellites provide connectivity for IoT devices in remote areas, improving efficiency and productivity."} button={"Know more"} display={"none"} id={"Works"}/>


      <div className="Works" style={{ backgroundImage: `url(${background})` , }}>
        {/* Título y descripción de la sección */}
        <Title text="How it works? " anothertext="It is simple." estilo="Works left m10" />
    
        <div className="worksWrapper">
          {/* Carrusel de atributos */}
          <CarouselWorks CardInit={0} />
        </div>
      </div>
    </div>
  );
}

