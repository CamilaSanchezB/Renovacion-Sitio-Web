import React, { useState, useEffect, useRef } from 'react';
import DefaultCard from '../components/DefaultCard';
import Title from '../components/Title';
import '../styles/CarouselNoticia.css';

/**
 * @function CarouselNoticia
 * @category Sections
 * @desc Componente para mostrar una sección de noticias en formato de carrusel.
 * @param {Object} props - Propiedades pasadas al componente CarouselNoticia.
 * @param {Object[]} props.noticias - Un array de objetos que contiene la información de cada noticia.
 * @param {string} props.titleStyle - Estilo del título de la sección de noticias.
 * @param {string} props.id - ID del componente.
 * @returns {JSX.Element} Componente CarouselNoticia.
 */
export default React.memo(
  function CarouselNoticia({noticias, titleStyle, id}){

    const elementContainerRef = useRef(null);
    const elementSectionRef = useRef(null);
    const [elementsNoticia, setElementsNoticia] = useState([]);
    /**
     * @desc Función para cargar los datos de las noticias y actualizar el estado del componente.
     */
    useEffect(() => {
      async function asignarDatos() {
        const aux = await Promise.all(
          noticias.map(async (noticia) => {
            return { title: noticia.titulo, text: noticia.descripcion, image: noticia.ruta, link: noticia.link};
          })
        );
        setElementsNoticia(aux);
      }
      asignarDatos();
    }, [noticias.length]);
    return (
      <section id={id} className='carouselSectionNoticia'>
        <Title text={'Last news'} estilo={titleStyle}/>
        <div className="carouselAppNoticia" ref={elementSectionRef}>
          <div className="elementContainerNoticia" ref={elementContainerRef}  >
            {elementsNoticia.map((element, index) => (
              <DefaultCard
                key={index}
                title={element.title}
                text={element.text}
                image={element.image}
                fondo={true}
                click={element.link}
              />
            ))
            }
            
          </div>
          
        </div>
      </section> 
    );
  }
)