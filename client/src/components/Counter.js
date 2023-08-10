import React, { useState, useEffect, useRef } from 'react';
import '../styles/Counter.css';

/**
 * @function Counter
 * @desc Componente de contador reutilizable
 * @category Components
 * @param {number} value - Valor objetivo del contador
 * @param {string} title - Título del contador
 * @param {string} text - Texto adicional del contador
 * @param {string} svg - Datos del SVG a mostrar en el contador
 * @returns {JSX.Element} Componente de contador
 */
export default React.memo(function Counter({ value, title, text, svg }) {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(200);
  const myDivRef = useRef(null);
  const myTextRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [bottomIsVisible, setBottomIsVisible] = useState(false);

  /**
   * @desc Verifica si un elemento es visible en la ventana actual
   * @param {HTMLElement} elemento - Elemento a verificar
   * @returns {boolean} True si el elemento es visible, False de lo contrario
   */
  const isElementVisible = (elemento) => {
    if (!elemento) return false;
    const rect = elemento.getBoundingClientRect();
    return (
      (rect.bottom >= 0 && rect.bottom <= window.innerHeight) ||
      (rect.top >= 0 && rect.top <= window.innerHeight)
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(isElementVisible(myDivRef.current));
      setBottomIsVisible(isElementVisible(myTextRef.current));
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (count < value && isVisible) {
      const timer = setTimeout(() => {
        if (value < 100) {
          setCount((prevCount) => prevCount + 1);
        } else {
          setTime(500);
          setCount((prevCount) => prevCount + 5);
        }
      }, time / (value - count));
      return () => {
        clearTimeout(timer);
      };
    } else if (!isVisible) {
      setCount(0);
    }
  }, [count, value, isVisible]);

  return (
    <div ref={myDivRef} className="cardCounter">
      <div className='number'>
        <p>
          {count}
          {title}
        </p>
      </div>
      <div className='svgTitulo'>
        <div style={{ textAlign: 'center', paddingRight: '1em' }}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path fillRule="evenodd" clipRule="evenodd" d={svg} fill="white"/>
          </svg>
        </div>
        <div className="textCounter">
          <span className="textStyle" ref={myTextRef}>{text}</span>
        </div>
      </div>
    </div>
  );
});
