import '../styles/Mundo.css';
import Animate from '../components/AnimacionMundo'
import React from 'react';

/**
 * @function SectionMundo
 * @desc Componente funcional para mostrar la sección "Mundo" con un fondo y animaciones.
 * @category Sections
 * @returns {JSX.Element}
 */
export default React.memo(
  function SectionMundo() {
    return (
      <div className='Background'>
        <div className='mundoContent'>
          <div>aca va un box</div>
          <div>aca va title</div>
          <div>aca va un p</div>
        </div>
        <div className='mundoModel'>
          <Animate/>
        </div>
      </div>
    );
  }  
)