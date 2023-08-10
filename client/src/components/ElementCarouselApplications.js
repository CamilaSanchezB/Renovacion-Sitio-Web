import React from 'react';

/**
 * @function ElementCarouselApplications
 * @desc Componente de carrusel de elementos de aplicaciones
 * @category Components
 * @param {string} text - Texto del elemento
 * @param {string} image - URL de la imagen del elemento
 * @param {string} title - Título del elemento
 * @returns {JSX.Element} Componente de carrusel de elementos de aplicaciones
 */
export default function ElementCarouselApplications({ text, image, title }) {
   return (
     <div className="elementSectionApplications">
       <div className="elementImageApplications">
         <img src={image} alt={title} />
       </div>
       <div className="elementTextApplications">
         <p className='paragraphApplications'>{text}</p>
         <br />
       </div>
     </div>
   );
 };
 
