import React, { useState, useEffect } from "react";
import '../styles/Silder.css'

/**
 * @function Slider
 * @desc Componente funcional que muestra un slider con contenido interactivo.
 * @category Sections
 * @param {Object} props - Propiedades del componente.
 * @param {Array} props.data - Datos del slider que incluyen el contenido de cada diapositiva.
 * @param {number} props.activeSlide - Índice de la diapositiva activa actualmente.
 * @returns {JSX.Element}
 */
export default (props) => {
  
  const [activeSlide, setactiveSlide] = useState(props.activeSlide);

  const next = () => activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

  // Estilos de las diapositivas para animación y visibilidad según la diapositiva activa
  const getStyles = (index) => {
    let windowWidth = window.innerWidth;
    let scale = 1;
    let value = activeSlide - index;
    let cordenadas = {x: 0, z:0}
    switch(true){
      default: //1920
        cordenadas ={
          x: 1000, z: 1000
        };
        scale = 1;
      break;
      case windowWidth<=1024 && windowWidth>768:
        cordenadas ={
          x: 725, z: 1000
        };
        scale = 0.75;
        break;
      case windowWidth<=768 && windowWidth>480:
        cordenadas ={
          x: 300, z: 1000
        };
        scale = 0.6;
        break;
      case windowWidth<=480 && windowWidth>400:
        cordenadas ={
          x: 330, z: 330
        };
        scale = 0.6;
        break;
      case windowWidth<=400 && windowWidth>0:
        cordenadas ={
          x: 280, z: 300
        };
        scale = 0.6;
        break;
    }
    
    switch ( value ) {
      default:
        return{
          opacity:0,
          transform: `translateX(${cordenadas.x}px) translateZ(${cordenadas.z}px)`,
        }
      case 0 : 
        return {
          opacity: 1,
          transform: `translateX(0px) translateZ(0px) scale(${(scale)})`,
          zIndex: 3,
        
        }
      case 1: 
        return{
          opacity: .25,
          transform: `translateX(${(cordenadas.x - cordenadas.x *0.5)*-1}px) translateZ(${cordenadas.z * 0.01 * -1}px ) scale(${(scale*.75)})`,
          zIndex: 2,
          cursor: 'pointer',
        }
      case -1: 
        return{
          opacity: .25,
          transform: `translateX(${(cordenadas.x - cordenadas.x * 0.5) }px) translateZ(${cordenadas.z * 0.01 * -1}px) scale(${(scale*.75)})`,
          zIndex: 2,
          cursor: 'pointer',
        }
      case 2:
        return{
          opacity:0,
          transform: `translateX(${(cordenadas.x - cordenadas.x *0.5)*-1}px) translateZ(${cordenadas.z * 0.01 * -1}px) scale(${(scale*.75)})`,
        }
      case -2:
        return{
          opacity: 0,
          transform: `translateX(${cordenadas.x - cordenadas.x *0.5}px) translateZ(${cordenadas.z * 0.01 * -1}px) scale(${(scale*.75)})`,    
        }
      case 3:
        return{ 
          opacity:0,
          transform: `translateX(${(cordenadas.x - cordenadas.x *0.5)*-1}px) translateZ(${cordenadas.z * 0.01 * -1}px scale(${(scale)}))`,
        }
      case -3:
        return{
          opacity: 0,
          transform: `translateX(${cordenadas.x - cordenadas.x *0.5}px) translateZ(${cordenadas.z * 0.01 * -1}px) scale(${(scale)})`,
         }
      case 4: 
        return{ 
          opacity:0,
          transform: `translateX(${(cordenadas.x - cordenadas.x *0.5)*-1}px) translateZ(${cordenadas.z * 0.01 * -1}px) scale(${(scale)})`,
        }
      case -4 :
        return{ 
          opacity: 0,
          transform: `translateX(${cordenadas.x - cordenadas.x *0.5}px) translateZ(${cordenadas.z * 0.01 * -1}px) scale(${(scale)})`,
        }
    }
  };

  return (
    <div className="SliderWrapperMain">
      <div className="slideC">
        {props.data.map((item, i) => (
          <React.Fragment key={item.id}>
            <div
              className="slide"
              style={{
                background: item.bgColor,
                ...getStyles(i)
              }}
            >
              <SliderContent {...item} activeSlide={activeSlide} index={i} prev={prev} next={next}/>
            </div>
            <div
              style={{
                background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
                ...getStyles(i)
              }}
            />
          </React.Fragment>
        ))}
      </div>

    </div>
  );
};

/**
 * Componente interno que muestra el contenido de cada diapositiva en el slider.
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {number} props.activeSlide - Índice de la diapositiva activa actualmente.
 * @param {number} props.index - Índice de la diapositiva actual.
 * @param {function} props.prev - Función para retroceder a la diapositiva anterior.
 * @param {function} props.next - Función para avanzar a la diapositiva siguiente.
 * @returns {JSX.Element}
 */
const SliderContent = ({ activeSlide, index, prev, next, ...props }) => (
  
    <>
    {activeSlide === index ? 
    //si esta activo se muestra esto
      <div className="slideWrapper">
        <div className="slideContent" >
            <img src={props.image} alt="" /> 
            <p>{props.description}</p>
        </div>
      </div>

    :
    //si esta inactivo esto
    <div className="slideWrapper">
    <div className="slideContent inactive" onClick={() => {if(index<activeSlide){prev()}else{next()}}} key={index}>
        <div className="gradientCover" style={{ backgroundImage: `url(${props.image})` }}></div>
        <h2>{props.title}</h2>
    </div>
  </div>
    }
    </>
  );