import React, { useState, useEffect } from "react";
import Modelo3D from "../components/Modelo3D";
import '../styles/Modelo3DSection.css'

/**
 * Componente que representa un carrusel de tecnología con flechas interactivas.
 *
 * @function CarouselTechnology
 * @desc Componente para mostrar una serie de diapositivas de tecnología con flechas interactivas de navegación.
 * @category Components
 * @param {number} activeSlide Índice de la diapositiva activa
 * @param {Array} slides Array de diapositivas
 * @param {function} onSlideChange Función para cambiar la diapositiva activa
 * @returns {JSX.Element} Componente de carrusel con flechas interactivas
 */

const CarouselTechnology = ({ activeSlide, slides, onSlideChange }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(activeSlide);

  /**
   * Función para avanzar a la siguiente diapositiva.
   *
   * @param {number} index Índice de la diapositiva actual
   */

  const next = (index) => {
    if (activeSlideIndex < slides.length - 1 && activeSlide !== index) {
      onSlideChange(activeSlideIndex + 1); //cambia el padre
      setActiveSlideIndex(activeSlideIndex + 1); //cambia local
    }
  };

  /**
   * Función para retroceder a la diapositiva anterior.
   *
   * @param {number} index Índice de la diapositiva actual
   */

  const prev = (index) => {
    if (activeSlideIndex > 0 && activeSlide !== index) {
      onSlideChange(activeSlideIndex - 1); //cambia el padre
      setActiveSlideIndex(activeSlideIndex - 1); //cambia local
    }
  };

  /**
   * Calcula la altura del modelo en función del índice de la diapositiva.
   *
   * @param {number} index Índice de la diapositiva actual
   * @returns {number} Altura del modelo
   */

  const SeteoAltura =(index) =>{
    let altura = 0;
    if (index==activeSlideIndex) {
      altura= 720;  
    } else {
      altura= 719;
    }
    return(altura);
  }

  /**
   * Calcula la velocidad del modelo en función del índice de la diapositiva.
   *
   * @param {number} index Índice de la diapositiva actual
   * @returns {number} Velocidad del modelo
   */

  const SeteoVelocidad =(index) =>{
    let velocidad = 0;
    if (index==activeSlideIndex) {
      velocidad= 0.5;  
    } else {
      velocidad= 0;
    }
    return(velocidad);
  }

  /**
   * Calcula los estilos de transformación y opacidad para la diapositiva.
   *
   * @param {number} index Índice de la diapositiva actual
   * @returns {Object} Objeto con propiedades CSS de transformación y opacidad
   */

  const getStyles = (index) => {
    let xPosition = 0;
    let yPosition = 0;
    let scala = 1;
    let opacidad = 1;

    let windowWidth = window.innerWidth;
    let cordenadas = {x: 0, y:-150}
      
    switch(true){
        
        default: //1920
          cordenadas ={
            x: 300,
            y:-150
           };
         break;
        
        case windowWidth<=1024 && windowWidth>768:
          cordenadas ={
            x: 300,y:-150
          };
        break;
        
        case windowWidth<=768 && windowWidth>480:
          cordenadas ={
            x: 200,y:-100
          };
        break;
        
        case windowWidth<=480 && windowWidth>0:
          cordenadas ={
            x: 100,y:-100
          };
        break;
  }

    if(index==activeSlideIndex){
      xPosition = 0;
      yPosition= 0;
      scala = 1.15;
      opacidad = 1;
    }else{
      xPosition += cordenadas.x;
      yPosition += cordenadas.y;
      scala = .5;
      opacidad = .4;
    }

    return {
      transform: `translateX(${xPosition}px) translateY(${yPosition}px) rotateY(0deg) scale(${scala})`,
      opacity: (opacidad)
    };
  };

  return (
    <div className="SliderWrapperTech">
      <div className="slideC">
        {slides.map((item, i) => (
          <React.Fragment key={item.id}>
            <div className="slide" style={{ ...getStyles(i) }}>
              <ModeloInfo modelo={item.modelo} activeSlide={activeSlideIndex} index={i} prev={prev} next={next} altura={SeteoAltura(i)} velocidad={SeteoVelocidad(i)} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

/**
 * Componente que muestra información de un modelo en función de la diapositiva activa.
 *
 * @function
 * @desc Componente para mostrar información detallada de un modelo de tecnología en una diapositiva.
 * @param {number} activeSlide Índice de la diapositiva activa
 * @param {number} index Índice de la diapositiva actual
 * @param {function} prev Función para retroceder a la diapositiva anterior
 * @param {function} next Función para avanzar a la siguiente diapositiva
 * @param {number} altura Altura del modelo
 * @param {number} velocidad Velocidad del modelo
 * @param {string} modelo Nombre del modelo
 * @returns {JSX.Element} Componente que muestra información del modelo
 */

const ModeloInfo = ({ activeSlide, index, prev, next, altura, velocidad, modelo}) => (
  
  <>
    <div onClick={() => (index < activeSlide ? prev(index) : next(index))} key={index}>
      <Modelo3D modelo={modelo} luzD={7} alturaModelo={altura} velocidadModelo={velocidad}/>
    </div>
  </>
);

export default React.memo(CarouselTechnology);