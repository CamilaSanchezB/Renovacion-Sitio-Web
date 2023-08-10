import React, {useEffect, useState, useRef} from 'react';
import '../styles/estiloCrud.css'
import '../styles/Login.css'
import PropTypes from 'prop-types';
import { autenticar, encriptar } from '../functions/dbFunctionalities';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';

/**
 * @function LoginPage
 * @category Pages - CRUD
 * @desc Página de inicio de sesión
 * @param {Object} props - Propiedades del componente
 * @param {Function} props.setToken - Función para establecer el token de autenticación
 * @param {string} props.nextHop - Destino de navegación después de iniciar sesión
 * @param {string} props.token - Token de autenticación actual
 * @param {Function} props.setUsername - Función para establecer el nombre de usuario
 * @returns {JSX.Element} Componente de la página de inicio de sesión
 */
export default function LoginPage({ setToken, nextHop, token, setUsername }) {
  
  const navigate = useNavigate();
  const toast = useRef(null);
  const [nombreUsuario, setNombreUsuario] = useState();
  const [password, setPassword] = useState();

  /**
   * Muestra un mensaje de error
   * @param {string} content - Contenido del mensaje de error
   */
  const showError = (content) => {
    toast.current.show({ severity: 'error', summary: 'Error', detail: content, life: 3000 });
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const contrasena = await encriptar(password);
    await autenticar(nombreUsuario, contrasena.textoEncriptado).then((token) => {
      if (token.error) {
        showError(token.error);
      } else {
        setUsername(token.user);
        setToken(token.token);
      }
    })
  }
  useEffect(()=>{
    if(localStorage.getItem('tokenKey') !== "" && localStorage.getItem('tokenKey') !== undefined){
      setToken(localStorage.getItem('tokenKey'));
    }
    if(localStorage.getItem('userKey') !== "" && localStorage.getItem('userKey') !== undefined){
      setUsername(localStorage.getItem('userKey'));
    }
  },[]);
 /* useEffect(()=>{
    if(localStorage.getItem('tokenKey') !== ""){
      navigate(nextHop);
    }
  },[])*/
  useEffect(() => {
    // Verificar si hay un token de autenticación
    
    if (token) {
      
      navigate(nextHop);
    }
  }, [token]);

  return (
    <div className="wrapperLogin">
      <Toast ref={toast} />
      <div className="flip-card__front">
        <div className="titleLogin">Inicia sesión</div>
        <form className="flip-card__form" onSubmit={handleSubmit}>
          <input
            className="flip-card__input"
            name="user"
            placeholder="Usuario"
            type="text"
            required
            onChange={e => setNombreUsuario(e.target.value)}
          />
          <input
            className="flip-card__input"
            name="password"
            placeholder="Contraseña"
            type="password"
            required
            onChange={e => setPassword(e.target.value)}
          />
          <button className="flip-card__btn" type='submit'>Siguiente</button>
        </form>
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired
}
