import React from 'react';
import Year from './Year';
import './Year.css'
/**
 * @function Roadmap
 * @desc Componente que representa un roadmap con varios años.
 * @category Components
 * @param {number} cantidad - La cantidad de años en el roadmap.
 * @param {number} anioInicio - El año de inicio del roadmap.
 * @param {string[]} contenido - El contenido asociado a cada año.
 *
 * @returns {JSX.Element} - Roadmap representado como un elemento JSX.
 */
export default function Roadmap({ cantidad, anioInicio, contenido }) {
  const years = [];

  for (let i = 0; i < cantidad; i++) {
    const anio = anioInicio + i;
    years.push(<Year key={i} value={anio} text={contenido[i]} />);
  }

  return <div className='yearsWrap'>{years}</div>;
};

