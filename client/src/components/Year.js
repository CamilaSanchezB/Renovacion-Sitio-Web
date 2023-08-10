import React from 'react';
import '../styles/Year.css';

/**
 * @function Year
 * @desc Componente que representa un año y su texto asociado.
 * @category Components
 * @param {number} value - El valor del año.
 * @param {string} text - El texto asociado al año.
 *
 * @returns {JSX.Element} - Año y texto representados como elementos JSX.
 */
export default function Year({ value, text }) {
  return (
      <div>
          <p className="year">{value}</p>
          <p className="textStyle">{text}</p>
      </div>
  );
}

