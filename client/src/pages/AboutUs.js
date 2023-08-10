import React, {useEffect} from 'react';
import ManagmentTeam from '../sections/ManagmentTeam';
import Welcome2 from '../sections/Welcome2';
import History from '../sections/History';
import Partners from '../sections/Partners';
import Investors from '../sections/Investors';
import FooterTemplate from '../sections/FooterTemplate';
import Navbar from '../components/Navbar';
import Recognitions from '../sections/Recognitions';
import Footer from '../sections/Footer';
/**
 * 
 * @function AboutUs
 * @desc Componente funcional que representa la página "About Us". Muestra información sobre el equipo directivo, reconocimientos, socios, inversores y pie de página.
 * @category Pages
 * @param {Object[]} managmentElements - Lista de elementos del equipo directivo.
 * @param {Object[]} recognitionsElements - Lista de elementos de reconocimientos e innovación.
 * @param {number} anioInicio - Año de inicio de la historia de la empresa.
 * @param {number} cantAnios - Cantidad de años a mostrar en la sección de historia.
 * @param {string[]} contenido - Contenido de los años para la sección de historia.
 * @returns {JSX.Element}
 */
export default function AboutUs({ managmentElements, recognitionsElements, anioInicio, cantAnios, contenido }) {
  /**
   * Función useEffect para hacer scroll a la sección correspondiente al cargar la página.
   */
  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div>
      {/* Barra de navegación */}
      <Navbar />

      {/* Sección de bienvenida */}
      <Welcome2
        title={"We are Innova Space,"}
        text={"We are a LATAM interdisciplinar team that designs and develops the future of IoT connectivity"}
        button={"Know more about our history"}
        id={"History"}
      />

      {/* Sección de historia */}
      <History id={"History"} cantidad={cantAnios} anioInicio={anioInicio} contenido={contenido} />

      {/* Sección del equipo directivo */}
      <ManagmentTeam id={"Team"} elements={managmentElements} title={'We are an interdisciplinary'} titleDivision={'team from LATAM'} margen={true} />

      {/* Sección de reconocimientos e innovación */}
      <Recognitions elements={recognitionsElements} title={'Innova Space recognitions'} titleDivision={'& innovation contests'} id={"Recognitions"} />

      {/* Sección de socios */}
      <Partners id={"Partners"} />

      {/* Sección de inversores */}
      <Investors id={"Investors"} />

      {/* Sección del pie de página */}
      <FooterTemplate title={'Are you ready to join the adventure of global connectivity?'} btnText={'Download Deck'} />
      
      {/* Pie de página */}
      <Footer />
    </div>
  );
}


