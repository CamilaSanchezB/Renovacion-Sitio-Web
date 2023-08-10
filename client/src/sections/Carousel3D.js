import React, { useState, useEffect, useRef } from "react";
import Wave from '../components/Wave'
import Button from '../components/Button'
import '../styles/Carousel3D.css';
import Arrow from "../components/Arrow";

/**
   * @function setStylePerPosition
   * @desc Función que establece el estilo de posición de cada tarjeta en el carrusel.
   * @param {number} index - Índice de la tarjeta actual.
   * @param {number} indexCard - Índice de la tarjeta inicial mostrada en el centro.
   * @returns {Object} Objeto con las propiedades CSS para establecer el estilo de la tarjeta.
   */
const setStylePerPosition = (index, indexCard) => {
  let windowWidth = window.innerWidth;
  let cordenadas = {x: 0, z:0}
  switch(true){
    default: //1920
      cordenadas ={
        x: 1000, z: 1000
      };
      break;
    case windowWidth<=1024 && windowWidth>768:
        cordenadas ={
          x: 725, z: 1000
        };
        break;
    case windowWidth<=768 && windowWidth>480:
      cordenadas ={
        x: 450, z: 1000
      };
      break;
    case windowWidth<=480 && windowWidth>0:
        cordenadas ={
          x: 330, z: 330
        };
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
            transform: "translateX(0px) translateZ(0px)",
            zIndex: 3,
          }
      case 1: 
          return{
            opacity: .25,
            transform: `translateX(${(cordenadas.x - cordenadas.x *0.05) *-1}px) translateZ(${cordenadas.z * 0.01 * -1}px)`,
            zIndex: 2,
            cursor: 'pointer',
          }
      case -1: 
          return{
            opacity: .25,
            transform: `translateX(${cordenadas.x - cordenadas.x *0.05}px) translateZ(${cordenadas.z * 0.01 * -1}px)`,
            zIndex: 2,
            cursor: 'pointer',
          }
      case 2:
          return{
            opacity:0,
            transform: `translateX(${(cordenadas.x + cordenadas.x *0.25)*-1}px) translateZ(${cordenadas.z * 0.01 * -1}px)`,
            cursor: 'pointer',
          }
      case -2:
        return{
          opacity: 0,
          transform: `translateX(${cordenadas.x + cordenadas.x *0.25}px) translateZ(${cordenadas.z * 0.01 * -1}px)`,    
          cursor: 'pointer',
        }
      case 3:
        return{ 
          opacity:0,
          transform: `translateX(${(cordenadas.x + cordenadas.x *0.25)*-1}px) translateZ(${cordenadas.z * 0.01 * -1}px)`,
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
 * @function Carousel3D
 * @category Sections
 * @desc Componente de carrusel 3D que muestra noticias en una animación 3D interactiva.
 * @param {Object[]} noticias - Un array de objetos de noticias que contiene información sobre cada noticia a mostrar.
 * @param {number} CardInit - Índice de la tarjeta inicial que se muestra en el centro del carrusel.
 * @returns {JSX.Element} Componente de carrusel 3D.
 */
export default React.memo(function Carousel3D({ noticias, CardInit }) {
  // Referencias para el contenedor de elementos y la sección de elementos del carrusel
  const elementContainerRef = useRef(null);
  const elementSectionRef = useRef(null);

  // Estado para almacenar los elementos de noticias
  const [newsElement, setNewsElement] = useState([]);

  // Estado para la tarjeta inicial mostrada en el centro del carrusel
  const [InitCard, setInitCard] = useState(CardInit);

  useEffect(()=>{
    setInitCard(CardInit);
  },[])

  // Carga los datos de noticias en el estado
  useEffect(() => {
    async function asignarDatos() {
      const aux = await Promise.all(
        noticias.map(async (noticia) => {
          return {
            title: noticia.titulo,
            text: noticia.descripcion,
            image: noticia.ruta,
            link: noticia.link,
          };
        })
      );
      setNewsElement(aux);
    }
    asignarDatos();
  }, [noticias.length]);
  
   // Establece la tarjeta actual seleccionada
  function thisCard(index) {
    if (index !== InitCard) {
      setInitCard(index);
    }
  }

  return (
    <section className="Carousel3DSection" ref={elementSectionRef}>
      <div className="Carousel3DTitle">
        <h3 style={{marginTop:'0'}}>Last News</h3>
      </div>
      <div className="WaveWrapper">
        <Wave estilo={"3DTop"}/>
      </div>
      
      <Arrow clickFunction={()=>{thisCard(InitCard-1)}} max={newsElement.length-1} pointing={'l'} element={InitCard} estilo={'Carousel3DArrow'}/>
      <Arrow clickFunction={()=>{thisCard(InitCard+1)}} max={newsElement.length-1} pointing={'r'} element={InitCard} estilo={'Carousel3DArrow'}/>
      <div className="ContainerCarousel" ref={elementContainerRef}>

          {newsElement.map((noticia, index) => (
            <div onClick={() => thisCard(index)} className="Carousel3D" style={setStylePerPosition(index, InitCard)} key={index}>
              <div className="CardSection">
                <div className="CardContainerFondo">
                  <div className="CardImage redondeada">
                    <img src={noticia.image} alt={noticia.title} />
                  </div>
                  <div className="CardText">
                    <p>{noticia.title}</p>
                  </div>
                  <Button text={'Leer más'} estilo={'Carousel3D'} clickFunction={()=>{window.open(noticia.link, '_blank')}}/>
                </div>
              </div>
            </div> 
          ))
        }
      </div>
      <div className="WaveWrapper">
        <Wave estilo={"3DBottom"}/>
      </div>
    </section>
  );
});