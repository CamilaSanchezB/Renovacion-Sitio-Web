import React, { useState, useEffect } from 'react';
import { faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getRuta } from '../functions/dbFunctionalities';
import "../styles/Footer.css";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

/**
 * @function Footer
 * @desc Componente para mostrar el pie de página (Footer).
 * @category Sections
 * @returns {JSX.Element} Elemento JSX que muestra el pie de página.
 */
const Footer = () => {
  const [backgroundFooter, setBackgroundFooter] = useState('');
  useEffect(() => {
    /**
     * Obtiene la ruta de la imagen para el fondo del footer y actualiza el estado.
     * @function
     */
    getRuta('footer.webp').then((data) => {
      setBackgroundFooter(data);
    });
  }, []);
  

  const navigate = useNavigate()
  let contactSection = document.getElementById('Contact');

  function handleContactButtonClick() {
      navigate('/')
      setTimeout(() => {
        contactSection = document.getElementById('Contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }, 500);
     
    }

  return (
    <section className="wrapFooter" style={{ background: `linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.8)), url(${backgroundFooter})` }}>
      <hr className="divisor" />
      <div className="containerFooter">
        <div className="flexFooter">
          <div className="flexFooterItemLeft">
            <Logo size="medium" />
          </div>
          <div className="flexFooterRightItems">
            <a href="/" alt="" className="linkFooter">
              Home
            </a>
            <a href="/AboutUs" alt="" className="linkFooter">
              About us
            </a>
            <a href="#" alt="" className="linkFooter" onClick={handleContactButtonClick}>
              Contact
            </a>
          </div>
        </div>
        <div className="socialmedia flexRowEnd">
          <div className="socialmediaLinkWrapper">
           <div className="socialmediaInnerLinkWrapper">
           <a href="https://www.linkedin.com/company/innovaspacearg/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
           </div>
          </div>
          <div className="socialmediaLinkWrapper">
            <div className="socialmediaInnerLinkWrapper">
            <a href="https://twitter.com/innova_space">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            </div>
            
          </div>
          <div className="socialmediaLinkWrapper">
            <div className="socialmediaInnerLinkWrapper">
            <a href="https://www.instagram.com/innovaspace/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default React.memo(Footer);
