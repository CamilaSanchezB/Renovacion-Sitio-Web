import '../styles/Navbar.css';
import React, {useState, useEffect} from 'react';
/**
 * @function NavbarLink
 * @desc Enlace de la barra de navegación
 * @category Components
 * @param {string} link - URL del enlace
 * @param {string} text - Texto del enlace
 * @returns {JSX.Element} - Elemento JSX del enlace de la barra de navegación
 */
function NavbarLink({ link, text }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    /**
     * @function asignar
     * @desc Asigna la URL formateada al estado `url`
     */
    function asignar() {
      let direccion = window.location.href.split("/");
      let palabra = direccion[direccion.length - 1];
      palabra = palabra.split("#")[0];
      let frase = "";
      for (let letra in palabra) {
        if (parseInt(letra) === 0) {
          frase += palabra[letra];
        } else if (
          palabra[letra].charCodeAt(0) >= 97 &&
          palabra[letra].charCodeAt(0) <= 122
        ) {
          frase += palabra[letra];
        } else {
          frase += " " + palabra[letra].toLowerCase();
        }
      }
      setUrl(frase);
    }

    asignar();
  }, []);

  return (
    <li className="navbar-link">
      <a href={link} className={text === url ? "active" : ""}>
        {text}
      </a>
    </li>
  );
}

export default NavbarLink;
