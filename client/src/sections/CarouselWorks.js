import React, { useState, useEffect, useRef } from "react";
import { getRuta } from '../functions/dbFunctionalities';
import "../styles/CarouselWorks.css"
import Arrow from "../components/Arrow";

/**
   * @function  
   * @desc Función que establece el estilo de posición de cada tarjeta en el carrusel.
   * @param {number} index - Índice de la tarjeta actual.
   * @param {number} indexCard - Índice de la tarjeta inicial mostrada en el centro.
   * @returns {Object} Objeto con las propiedades CSS para establecer el estilo de la tarjeta.
   */
  
let widthProgress=0;

const setStylePerPosition = (index, indexCard) => {
  let windowWidth = window.innerWidth;

  
  switch(true){
    default: 
      widthProgress=1000;
      break;
    case windowWidth<=1024 && windowWidth>769:
      widthProgress=1000 ;
        break;
        
    case windowWidth<=768 && windowWidth>480:
      widthProgress=900;
      break;
    case windowWidth<=480 && windowWidth>0:
      widthProgress=600;
        break;
  }

  let cordenadas = {x: 0, z:0}
  let scale = 1
  switch(true){
    default: //1920
      cordenadas ={
        x: 1000, z: 1000
      };
      break;
    case windowWidth<=1024 && windowWidth>769:
        cordenadas ={
          x: 725, z: 1000
        };
        scale = .7
        break;
        
    case windowWidth<=768 && windowWidth>480:
      cordenadas ={
        x: 450, z: 1000
        
      };
      scale = .4
      break;
    case windowWidth<=480 && windowWidth>0:
        cordenadas ={
          x: 310, z: 330
        };
        scale = .4
        break;
  }
  let value = indexCard - index;
  switch ( value ) {
    default:
      return{
        opacity:0,
        transform: `translateX(${cordenadas.x}px) translateZ(${cordenadas.z}px)`,
      }
    case 0 : 
          return {
            opacity: 1,
            transform: `translateX(0px) translateZ(0px) scale(${scale})`,
            zIndex: 3,
          }
      case 1: 
          return{
            opacity: 0,
            transform: `translateX(${(cordenadas.x - cordenadas.x *0.05) *-1}px) translateZ(${cordenadas.z * 0.01 * -1}px) scale(${scale})`,
            zIndex: 2,
            cursor: 'pointer',
          }
      case -1: 
          return{
            opacity: 0,
            transform: `translateX(${cordenadas.x - cordenadas.x *0.05}px) translateZ(${cordenadas.z * 0.01 * -1}px) scale(${scale})`,
            zIndex: 2,
            cursor: 'pointer',
          }
      case 2:
          return{
            opacity:0,
            transform: `translateX(${(cordenadas.x + cordenadas.x *0.25)*-1}px) translateZ(${cordenadas.z * 0.01 * -1}px) scale(${scale})`,
            cursor: 'pointer',
          }
      case -2:
        return{
          opacity: 0,
          transform: `translateX(${cordenadas.x + cordenadas.x *0.25}px) translateZ(${cordenadas.z * 0.01 * -1}px) scale(${scale})`,    
          cursor: 'pointer',
        }
      case 3:
        return{ 
          opacity:0,
          transform: `translateX(${(cordenadas.x + cordenadas.x *0.25)*-1}px) translateZ(${cordenadas.z * 0.01 * -1}px) scale(${scale})`,
          cursor: 'pointer',
        }
      case -3:
        return{
          opacity: 0,
          transform: `translateX(${cordenadas.x + cordenadas.x *0.25}px) translateZ(${cordenadas.z * 0.01 * -1}px)`,
          cursor: 'pointer',
         }
      case 4: 
        return{ 
          opacity:0,
          transform: `translateX(${(cordenadas.x + cordenadas.x *0.25)*-1}px) translateZ(${cordenadas.z * 0.01 * -1}px)`,
          cursor: 'pointer',
        }
      case -4 :
        return{ 
          opacity: 0,
          transform: `translateX(${cordenadas.x + cordenadas.x *0.15}px) translateZ(${cordenadas.z * 0.01 * -1}px)`,
          cursor: 'pointer',
        }
    }

};

/**
 * @function CarouselWorks
 * @category Sections
 * @desc Componente de carrusel 3D que muestra noticias en una animación 3D interactiva.
 * @param {number} CardInit - Índice de la tarjeta inicial que se muestra en el centro del carrusel.
 * @returns {JSX.Element} Componente de carrusel 3D.
 */
export default React.memo(function Carousel3D({ CardInit }) {
  // Referencias para el contenedor de elementos y la sección de elementos del carrusel
  const elementContainerRef = useRef(null);
  const elementSectionRef = useRef(null);

  const [works1, setWorks1] = useState('');
  const [works2, setWorks2] = useState('');
  const [works3, setWorks3] = useState('');
  const [works4, setWorks4] = useState('');

  // Estado para la tarjeta inicial mostrada en el centro del carrusel
  const [InitCard, setInitCard] = useState(CardInit);

  useEffect(()=>{
    setInitCard(CardInit);
  },[])

  useEffect(() => {
    getRuta('Works1.webp').then((data) => {
      setWorks1(data);
    });
    getRuta('Works2.webp').then((data) => {
      setWorks2(data);
    });
    getRuta('Works3.webp').then((data) => {
      setWorks3(data);
    });
    getRuta('Works4.webp').then((data) => {
      setWorks4(data);
    });
  }, []);
  
  const elements = [
    { image: works1, numero: '1.', text: 'IoT sensors on ground connected to our communication Module, which sends key information to the satellites.' },
    { image: works2, numero: '2.', text: 'Satellites send sensors data to Ground Station Network with the data collected.' },
    { image: works3, numero: '3.', text: 'Ground Station sends precise data to the Cloud, which storages it​.' },
    { image: works4, numero: '4.', text: 'Producer - End User Accesses to Cloud from everywhere.' },
  ];

  function thisCard(index) {
    if (index !== InitCard) {
      setInitCard(index);
    }
  }

  const [value, setValue] = useState();
    const maxValue = 100;
    const progressStyle = {
      '--value': value,
      '--max': maxValue,
      width: `${widthProgress}px`,
      marginRight: '24px',
    };
  
    useEffect(() => {
      setValue(25 + InitCard * 25);
    }, [InitCard]);

  return (
    <section className="SectionPrueba" ref={elementSectionRef} id="Works">
    <Arrow clickFunction={()=>{thisCard(InitCard-1)}} max={elements.length-1} pointing={'l'} element={InitCard} estilo={'Carousel3DArrow'}/>
    <Arrow clickFunction={()=>{thisCard(InitCard+1)}} max={elements.length-1} pointing={'r'} element={InitCard} estilo={'Carousel3DArrow'}/>
        <div className="ContainerPrueba" ref={elementContainerRef} style={{ background: 'transparent' }}>
            {elements.map((element, index) => (
            <div onClick={() => thisCard(index)} className="CarouselPrueba" style={setStylePerPosition(index, InitCard)} key={index}>
                <div className="cardPrueba">
                    <div className="imagePrueba">
                        <img src={element.image} alt={element.image} />
                    </div>
                    <progress value={value} max={maxValue} style={progressStyle}></progress>   
                    <div className="descriptionPrueba" style={{ width: '100%', height:'122px' }}>
                        <div className="numeroPrueba">
                            <p>{element.numero}</p>
                        </div>
                         <div className="textPrueba" style={{height:'121px'}}>
                            <p>{element.text}</p>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </section>
  );
});