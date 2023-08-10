
import React, {useEffect} from 'react';
import Navbar from '../components/Navbar';
import Carousel3D from '../sections/Carousel3D';
import FooterTemplate from '../sections/FooterTemplate';
import Footer from '../sections/Footer';
import SocialMedia from '../sections/SocialMedia';
/**
 * @function News
 * @category Pages
 * @desc Componente funcional que representa la sección de noticias. Muestra las últimas noticias en un carrusel 3D y proporciona enlaces a las redes sociales.
 * @param {object[]} latestNews - Array de objetos que contiene las últimas noticias.
 * @returns {JSX.Element}
 */
export default function News({ latestNews }) {
  // Scroll hacia la sección actual en la carga de la página
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

      {/* Carrusel 3D para las últimas noticias */}
      <Carousel3D noticias={latestNews} CardInit={2} />

      {/* Sección de redes sociales */}
      <SocialMedia />

      {/* Plantilla de pie de página con enlace a redes sociales */}
      <FooterTemplate title={'Follow us in social media and keep updated about us'} btnText={'Follow us in Linkedin'} redirect={'https://www.linkedin.com/company/innovaspacearg/'}/>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}
