import '../styles/Welcome2.css';
import Title from '../components/Title'
import Button from '../components/Button';
import { getRuta } from '../functions/dbFunctionalities';
import React, { useState, useEffect} from 'react';
import Typewriter from 'typewriter-effect';
import '../styles/Typewritter.css'

/**
 * @function Welcome2
 * @desc Componente funcional que muestra una sección de bienvenida personalizable.
 * @category Sections
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.title - Título principal.
 * @param {string} props.text - Texto a mostrar.
 * @param {string} props.button - Texto del botón.
 * @param {string} props.display - Valor de la propiedad CSS "display" para controlar la visibilidad del Typewriter.
 * @returns {JSX.Element}
 */
function Welcome({title, text, button, display, id}){
const [background, setBackground] = useState('');
  useEffect(() => {
    getRuta('fondoAboutUs.webp').then((data) => {
      setBackground(data);
    });
  },[]);

  const handleButtonClick = () => {
    const someSection = document.getElementById(id);
        someSection.scrollIntoView({ behavior: 'smooth' });
  }

  return(
    <div className="Welcome2" style={{ backgroundImage: `url(${background})` }}>
      <div className='welcomeContainer2'>
        <div className='Welcome2TextFlex'>
          <Title text={title} estilo={"Tech"}/>
          <div style={{display: `${display}`}}>
          <Typewriter
            options={{
              strings: ['we make possible the impossible.', 'we are technology.', 'we innovate the future.', 'we create possibilities.', 'we inspire innovation.'],
              autoStart: true,
              loop: true,
            }}
          />
          </div>
          <p>{text}</p>
        </div>
        <Button estilo="History" text={button} clickFunction={handleButtonClick}/>
      </div>
    </div>
  );
}
export default React.memo(Welcome)