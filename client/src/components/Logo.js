import "../styles/Logo.css"
import {getRuta} from '../functions/dbFunctionalities.js'
import React, {useEffect, useState} from "react";

/**
 * @function Logo
 * @desc Componente de logotipo
 * @category Components
 * @param {string} size - Tamaño del logotipo
 * @returns {JSX.Element} - Elemento de imagen del logotipo
 */
export default React.memo(function Logo({ size }) {
  const [logo, setLogo] = useState("");

  // Carga el logotipo al montar el componente
  useEffect(() => {
    getRuta('logo.webp').then(data => {
      setLogo(data);
    });
  }, []);

  // Renderiza el elemento de imagen del logotipo con la ruta cargada
  return (
    <img src={logo} className={size} alt="" />
  );
});
