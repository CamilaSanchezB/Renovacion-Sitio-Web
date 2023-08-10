import React from 'react'
import '../styles/Footer2.css'
import Title from '../components/Title'
import Button from '../components/Button'
import Wave from '../components/Wave'
import { useNavigate } from "react-router-dom";

/**
 * @function FooterTemplate
 * @desc Componente reutilizable para mostrar un pie de página con un título y un botón.
 * @category Sections
 * @param {string} title - El título que se mostrará en el pie de página.
 * @param {string} btnText - El texto del botón que se mostrará en el pie de página.
 * @returns {JSX.Element} Elemento JSX que muestra el pie de página con título y botón.
 */

function FooterTemplate({title, btnText, redirect, redirectType}) {
    const navigate = useNavigate()

    function handleContactButtonClick() {
      if (redirectType === 'smooth') {
        let contactSection = document.getElementById('Contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          navigate('/');
          setTimeout(() => {
            contactSection = document.getElementById('Contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 500);
        }
      } else if (redirectType === 'href') {
        window.location.href = redirect;
      }
    }
    
  return (
    <div className="Footer2">
      <div className="WaveWrapper">
        <Wave estilo={"BlackTop"}/>
      </div>
      <div className="Footer2Content">
        <Title estilo="Footer2" text={title}/>
        <Button estilo="Welcome" text={btnText} clickFunction={handleContactButtonClick}/>
      </div>
      <div className="WaveWrapper">
        <Wave estilo={"BlackBottom"}/>
      </div>
    </div>
  );
}

export default React.memo(FooterTemplate);
