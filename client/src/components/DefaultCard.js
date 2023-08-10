import React, {useState, } from 'react';
import '../styles/DefaultCards.css'
/**
 * @function DefaultCard
 * @desc Componente de tarjeta predeterminada
 * @category Components
 * @param {string} title - Título de la tarjeta
 * @param {string} text - Texto de la tarjeta
 * @param {string} image - URL de la imagen de la tarjeta
 * @param {string} alt - Texto alternativo para la imagen (opcional)
 * @returns {JSX.Element} Componente de tarjeta predeterminada
 */
export default function DefaultCard({ title, text, image, alt }) {
    return (
      <>
        <div className={"defaultcardSection"}>
          <div className={'cardContainer cardContainerFondo'} style={{ maxWidth: '100%' }}>
            <div className={"defaultcardImage"}>
              <img src={image} alt={alt !== undefined ? alt : title} />
            </div>
            <div className="defaultcardText">
              <p>{title}</p>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  