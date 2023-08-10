import React, { useState, useEffect, useRef } from 'react';
import ElementNewsDetail from '../components/ElementNewsDetail';
import CarouselTemplate from './CarouselTemplate';
import '../styles/CarouselNewsDetail.css';

/**
 * @function CarouselNewsDetail
 * @category Sections
 * @desc Componente para mostrar una sección de noticias en formato de carrusel.
 * @param {Object} props - Propiedades pasadas al componente CarouselNewsDetail.
 * @param {Object[]} props.noticias - Un array de objetos que contiene la información de cada noticia.
 * @returns {JSX.Element} Componente CarouselNewsDetail.
 */
export default function CarouselNewsDetail({noticias}){
    const elementContainerRef = useRef(null);
    const elementNewsDetailRef = useRef(null);
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
        <section className='carouselSectionNewsDetail' ref={elementNewsDetailRef}>
           <div className='containerCarouselNewsD'>
          <div className="elementContainerNewsDetail" ref={elementContainerRef}>
            {elementsNoticia.map((element, index) => (
              <ElementNewsDetail key={index} title={element.title} text={element.text} image={element.image} link={element.link} />
            ))}
          </div>
          </div>
          {/* Aquí se utiliza el componente CarouselTemplate para mostrar el carrusel */}
          <CarouselTemplate elementContainerRef = {elementContainerRef} carouselSectionRef ={elementNewsDetailRef} elements={elementsNoticia} arrows={true} estilo={'NewsDetail'}/>
        </section>
      );
}