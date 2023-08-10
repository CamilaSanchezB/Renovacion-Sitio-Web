import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

/**
 * @function CarouselTemplate
 * @category Sections
 * @desc Componente de plantilla para el carrusel con flechas de navegación.
 * @param {Object} props - Propiedades pasadas al componente CarouselTemplate.
 * @param {React.MutableRefObject} props.elementContainerRef - Referencia al contenedor del carrusel.
 * @param {React.MutableRefObject} props.carouselSectionRef - Referencia a la sección del carrusel.
 * @param {Object[]} props.elements - Un array de objetos que contiene la información de cada elemento del carrusel.
 * @param {boolean} props.arrows - Indica si se deben mostrar las flechas de navegación.
 * @param {string} props.estilo - Estilo del carrusel.
 * @param {Function} props.setIndexPadre - Función para actualizar el índice del elemento activo en el componente padre.
 * @returns {JSX.Element} Componente CarouselTemplate.
 */
const CarouselTemplate = ({elementContainerRef, carouselSectionRef, elements, arrows, estilo, setIndexPadre})=>{
const [currentElementIndex, setCurrentElementIndex] = useState(0);
const screenWidth = window.innerWidth;

  /**
   * @function
   * @desc Función para hacer scroll al siguiente o anterior elemento del carrusel.
   * @param {number} delta - Dirección del scroll (-1 para ir al elemento anterior, 1 para ir al siguiente).
   */
function scrollear(delta){
    elementContainerRef.current.scrollTo({
      left: (currentElementIndex + delta) * screenWidth,
      behavior: 'smooth',
    });
  }

  /**
   * @function
   * @desc Manejador para el click en las flechas de navegación.
   * @param {number} delta - Dirección del scroll (-1 para ir al elemento anterior, 1 para ir al siguiente).
   */
  const handleClick = (delta) => {
    scrollear(delta);
  };

  /**
 * @effect
 * @desc Efecto para manejar el scroll y eventos de redimensionamiento del carrusel.
 * @param {number} currentElementIndex - Índice del elemento activo en el carrusel.
 * @param {Object[]} elements - Un array de objetos que contiene la información de cada elemento del carrusel.
 * @param {React.MutableRefObject} elementContainerRef - Referencia al contenedor del carrusel.
 * @param {React.MutableRefObject} carouselSectionRef - Referencia a la sección del carrusel.
 * @param {Function} setIndexPadre - Función para actualizar el índice del elemento activo en el componente padre.
 */

 useEffect(() => {

  /**
   * @function
   * @desc Actualiza el índice del elemento activo según el scroll horizontal del carrusel.
   */
  const handleScroll = () => {
      setCurrentElementIndex(Math.round(elementContainerRef.current.scrollLeft / window.innerWidth ));
      if(setIndexPadre != undefined){
        setIndexPadre(currentElementIndex);
      }
  };

  /**
   * @function
   * @desc Maneja el evento de rueda del ratón para navegar entre los elementos del carrusel.
   * @param {WheelEvent} event - Evento de rueda del ratón.
   */
  const handleWheel = (event) => {
     if (currentElementIndex + Math.sign(event.deltaY) >= 0 && currentElementIndex + Math.sign(event.deltaY) < elements.length) {
      scrollear(Math.sign(event.deltaY));
       event.preventDefault();
     }
  };

   /**
   * @function
   * @desc Ajusta la posición del scroll al redimensionar la ventana.
   */
  const handleWindowResize = () => {
    elementContainerRef.current.scrollTo({
      left: currentElementIndex * window.innerWidth,
      behavior: 'auto',
    });
  };

  // Agrega los event listeners necesarios
  elementContainerRef.current.addEventListener('scroll', handleScroll);
  window.addEventListener('wheel', handleWheel, { passive: false });
  window.addEventListener('resize', handleWindowResize);

  // Opciones para el IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: '60px',
    threshold: 1,
  };

  /**
   * @function
   * @desc Maneja la intersección del carrusel con la ventana para habilitar o deshabilitar el evento de rueda del ratón.
   * @param {IntersectionObserverEntry[]} entries - Entradas de la intersección.
   */
  const handleIntersection = (entries) => {
    const isVisible = entries[0].isIntersecting;
    if (isVisible) {
      window.addEventListener('wheel', handleWheel, { passive: false });
    } else {
      window.removeEventListener('wheel', handleWheel);
    }
  };

  // Observador para el IntersectionObserver
  const observer = new IntersectionObserver(handleIntersection, observerOptions);
  observer.observe(carouselSectionRef.current);

  // Función de limpieza para eliminar los event listeners y el observador
  return () => {
    elementContainerRef.current.removeEventListener('scroll', handleScroll); 
    window.removeEventListener('wheel', handleWheel);
    window.removeEventListener('resize', handleWindowResize);
    observer.unobserve(carouselSectionRef.current);
  };
}, [currentElementIndex, elements.length]);
    return(
        <>{arrows && (
            <div className={'arrowWrapper'+estilo}>
                <button className={'arrow'+estilo} onClick={() => handleClick(-1)}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <p className={'carouselCounter'+estilo}>
                    {currentElementIndex + 1}/{elements.length}
                </p>
                <button className={'arrow'+estilo} onClick={() => handleClick(1)}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        )}
        </>
    )
}
export default React.memo(CarouselTemplate);