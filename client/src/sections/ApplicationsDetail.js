import React, { useState, useEffect, useRef } from 'react';
import ElementSection from '../components/ElementCarouselApplications';
import '../styles/ApplicationsDetail.css';
import { getRuta } from '../functions/dbFunctionalities';
import {faWheatAwn, faBolt, faShip, faPersonDigging, faSeedling, faShieldHalved, faTruck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from '../components/Title'
import CarouselTemplate from './CarouselTemplate';

/**
 * @function ApplicationsDetail
 * @category Sections
 * @desc Componente que muestra los detalles de múltiples aplicaciones de la solución.
 * @returns {JSX.Element} Componente de detalles de aplicaciones.
 */
const ApplicationsDetail = () =>{
  const [image1, setImage1] = useState('');
  const [size, setSize] = useState(window.innerWidth);
  const [indexActual, setIndexActual] = useState(0);
  // Carga la imagen utilizando la función getRuta()
  useEffect(() => {
    getRuta('image_360.webp').then((data) => {
      setImage1(data);
    });
  }, []);

  // Función para ajustar el tamaño al cambiar el tamaño de la ventana
  function asignarTamano(){
    setSize(window.innerWidth);
  }
  // Escucha el evento de cambio de tamaño y actualiza el tamaño
  useEffect(()=>{
    window.addEventListener("resize", asignarTamano);
    return () => window.removeEventListener("resize", asignarTamano);
  }, [size])
  const elementContainerRef = useRef(null);
  const carouselSectionRef = useRef(null);
  // Datos de las diferentes aplicaciones
  const elements = [
    { title: 'Agricultura', ico:<FontAwesomeIcon icon={faWheatAwn}/>, text: 'Agricultura texto', image: image1 },
    { title: 'Energia', ico:<FontAwesomeIcon icon={faBolt} />, text: 'Energia', image: image1 },
    { title: 'Maritimo', ico:<FontAwesomeIcon icon={faShip} />, text: 'Maritimo', image: image1 },
    { title: 'Mineria', ico:<FontAwesomeIcon icon={faPersonDigging} />, text: 'Mineria', image: image1 },
    { title: 'Ambientales', ico:<FontAwesomeIcon icon={faSeedling} />, text: 'Ambientales', image: image1 },
    { title: 'Defensa', ico:<FontAwesomeIcon icon={faShieldHalved} />, text: 'Defensa', image: image1 },
    { title: 'Logistica', ico:<FontAwesomeIcon icon={faTruck} />, text: 'Logistica', image: image1 },
  ];
  // Maneja el clic en los títulos para desplazarse a la sección correspondiente
  const handleTitleClick = (index) => {
    elementContainerRef.current.scrollTo({
      left: index * window.innerWidth,
      behavior: 'smooth',
    });
  };
  return (
    <>
    <Title text={'Multiple applications'} estilo={'title left m10'}/>
    <div className="applicationsDetail">
      {size>=768 && (
        <div className="containerApplications">
        {elements.map((element, index) => (
          <h3
            key={index}
            className={`carouselCounterApplications ${
              index === indexActual ? 'selectedApplications' : ''
            }`}
            onClick={() => handleTitleClick(index)}
          >
            {size <=1024 ? element.ico : element.title}
          </h3>
        ))}
      </div>
      )}
      <div className="elementContainerApplications" ref={elementContainerRef}>
        {elements.map((element, index) => (
          <ElementSection
            key={index}
            text={element.text}
            image={element.image}
          />
        ))}
      </div>
      <div ref={carouselSectionRef}></div>
      <CarouselTemplate elements={elements} carouselSectionRef={carouselSectionRef} elementContainerRef={elementContainerRef} setIndexPadre={setIndexActual} indexPadre={indexActual}/>
    </div>
    </>
  );
};
export default React.memo(ApplicationsDetail);