import React, { useState } from 'react';
import Button from './Button.js';

/**
 * @function ElementNewsDetail
 * @desc Componente de detalle de noticias en elemento
 * @category Components
 * @param {string} title - Título de la noticia
 * @param {string} text - Texto de la noticia
 * @param {string} image - URL de la imagen de la noticia
 * @param {string} link - Enlace de la noticia completa
 * @returns {JSX.Element} Componente de detalle de noticias en elemento
 */
export default function ElementNewsDetail({ title, text, image, link }) {
  const [showEntireText, setShowEntireText] = useState(false);

  /**
   * @desc Cambia la visibilidad del texto completo
   */
  const toggleTextVisibility = () => {
    setShowEntireText(!showEntireText);
  };

  /**
   * @desc Renderiza el texto truncado o completo según la visibilidad actual
   * @returns {string} Texto truncado o completo
   */
  const renderText = () => {
    if (showEntireText || text.length <= 100) {
      return text;
    }
    return text.slice(0, 100) + '...';
  };

  return (
    <div className="elementSectionNewsDetail">
      <div className="elementImageNewsDetail">
        <div className="imageOverlay"></div>
        <img src={image} alt={text} />
        <div className="elementTextNewsDetail">
          <h1>{title}</h1>
          <p className="paragraph">
            {renderText()}
            {text.length > 100 && (
              <a className="showMore" onClick={toggleTextVisibility}>
                {showEntireText ? ' Mostrar menos' : ' Mostrar más'}
              </a>
            )}
          </p>
        </div>

        <Button
          text="Read more"
          estilo="NewsDetail"
          clickFunction={() => {
            window.open(link, '_blank');
          }}
        />
      </div>
    </div>
  );
};
