import React, { useEffect, useState } from 'react';
import NavbarNoticia from '../components/NavbarNoticia'
import Opciones from '../components/Opciones'
import '../styles/estiloCrud.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { getSuscriptores } from '../functions/dbFunctionalities';
import { useNavigate } from 'react-router-dom';

/**
 * @function Newsletter
 * @category Pages
 * @desc Componente para la gestión de suscriptores del newsletter por parte del editor
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.noticias - Array de noticias
 * @param {string} props.token - Token de autenticación del editor
 * @param {Function} props.setNextHop - Función para establecer el siguiente destino de navegación
 * @returns {JSX.Element} Componente de Newsletter
 */
const Newsletter = ({ noticias, token, setNextHop }) => {
    const navigate = useNavigate();
    const [suscriptores, setSuscriptores] = useState([]);
  
    useEffect(() => {
      async function setData() {
        // Obtener los suscriptores
        getSuscriptores().then((data) => {
          setSuscriptores(data.map((suscriptor) => {
            return suscriptor.emailSus;
          }));
        });
      }
      setData();
    }, []);
  
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
  
    if (!token) {
      return <></>;
    }
  
    return (
      <div className="bCRUD">
        <NavbarNoticia />
        <Opciones noticias={noticias} />
        <table className="roadmapTable tablaNewsletter">
          <thead>
            <tr>
              <th colSpan={2}>Email suscriptores</th>
            </tr>
          </thead>
          <tbody>
            {suscriptores.map((suscriptor, index) => (
              <tr key={index}>
                <td>{suscriptor}</td>
                <td>
                  <a href={'mailto:' + suscriptor}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
export default React.memo(Newsletter);