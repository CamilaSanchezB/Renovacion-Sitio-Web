import React, { useEffect, useState } from 'react';

/**
 * @function ProgressBar
 * @desc Componente que muestra una barra de progreso.
 * @category Components
 * @param {number} currentIndex - El índice actual en la secuencia de elementos.
 * @param {number} totalElements - El número total de elementos en la secuencia.
 * @returns {JSX.Element} - Elemento JSX que representa la barra de progreso.
 */
const ProgressBar = ({ currentIndex, totalElements }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    /**
     * @function calculateProgressWidth
     * @desc Calcula el ancho de la barra de progreso.
     */
    const calculateProgressWidth = () => {
      const width = ((currentIndex + 1) / totalElements) * 100;
      setProgressWidth(width);
    };

    calculateProgressWidth();
  }, [currentIndex, totalElements]);

  return (
    <div className="progress-bar">
      <div
        className="progress"
        style={{ width: `${progressWidth}%`, height: '3px', background: 'red' }}
      ></div>
    </div>
  );
};


export default ProgressBar;
