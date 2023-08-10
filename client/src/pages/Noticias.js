import React, { useEffect } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Noticia from '../components/Noticia';
import { borrarNoticia, fetchDataNoticiasWMultimedia} from "../functions/dbFunctionalities.js";
import NavbarNoticia from '../components/NavbarNoticia.js'
import Opciones from '../components/Opciones'
import { useNavigate } from 'react-router-dom';
/**
 * @function Noticias
 * @category Pages
 * @desc Componente para mostrar y gestionar las noticias por parte del editor
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.noticias - Array de noticias
 * @param {number} props.eliminarPos - Posición de la noticia a eliminar
 * @param {Function} props.setEliminarPos - Función para establecer la posición de la noticia a eliminar
 * @param {string} props.token - Token de autenticación del editor
 * @param {Function} props.setNextHop - Función para establecer el siguiente destino de navegación
 * @param {Function} props.setNoticias - Función para establecer las noticias
 * @returns {JSX.Element} Componente de Noticias
 */
export default React.memo(
  function Noticias({ noticias, eliminarPos, setEliminarPos, token, setNextHop, setNoticias }) {
    const navigate = useNavigate();

    useEffect(() => {
      // Verificar si se ha solicitado eliminar una noticia
      if (eliminarPos !== undefined) {
        borrarNoticia(eliminarPos);
        setEliminarPos(undefined);
      }
    }, [eliminarPos, setEliminarPos]);

    useEffect(() => {
      // Verificar el token de autenticación
      if (!token) {
        let path = window.location.href.split('/');
        let relativePath = "";
        for (let i = 3; i < path.length; i++) {
          relativePath += path[i];
          if (i !== path.length - 1) {
            relativePath += '/';
          }
        }
        setNextHop('/' + relativePath);
        navigate("/Login");
      }
    }, []);

    useEffect(() => {
      // Obtener las noticias junto con la información multimedia
      fetchDataNoticiasWMultimedia().then((data) => {
        setNoticias(data);
      });
    }, [noticias]);

    if (!token) {
      return <></>;
    }

    return (
      <>
        <NavbarNoticia />
        <Opciones noticias={noticias} />
        <div className="container1">
          {noticias.map((noticia, index) => (
            // Por cada elemento dentro de noticias crea un componente Noticia y le envía los respectivos datos
            <Noticia noticia={noticia} key={index} />
          ))}
        </div>
      </>
    );
  }
);

