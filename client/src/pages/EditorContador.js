import React, {useEffect, useState, useRef} from 'react';
import NavbarNoticia from '../components/NavbarNoticia'
import Opciones from '../components/Opciones'
import '../styles/estiloCrud.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { Toast } from 'primereact/toast';
import ModalEditor from '../components/ModalEditorContador';
import { useNavigate } from 'react-router-dom';
import { editarContenidoContadores, editarCantidadContadores, getContadores, eliminarContador } from '../functions/dbFunctionalities';

/**
 * @function Contador
 * @category Pages - CRUD
 * @desc Componente para la edición de contadores por parte del editor
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.noticias - Array de noticias
 * @param {string} props.token - Token de autenticación del editor
 * @param {Function} props.setNextHop - Función para establecer el siguiente destino de navegación
 * @param {Array} props.contadores - Array de contadores
 * @param {Function} props.setContadores - Función para establecer los contadores
 * @returns {JSX.Element} Componente de Contador
 */

export default React.memo(function Contador({ noticias, token, setNextHop, contadores, setContadores }) {
    const navigate = useNavigate();
    const [value, setValue] = useState({ id: 0, cantidad: 0, texto: "", moneda: "" });
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [element, setElement] = useState(1);
    const toast = useRef(null);
  
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
      async function setDatos() {
        // Obtener los contadores
        getContadores().then((data) => {
          setContadores(data);
        });
      }
      setDatos();
    }, [contadores]);
  
    /**
     * @function show
     * @desc Muestra el mensaje de éxito al guardar los cambios
     */
    const show = () => {
      toast.current.show({ severity: 'success', summary: 'Cambios guardados con éxito' });
    };
  
    if (!token) {
      return <></>;
    }
  
    /**
     * @function procesarCambio
     * @desc Procesa el cambio realizado en los contadores
     */
    function procesarCambio() {
      if (element !== 2) {
        // Editar la cantidad de contadores
        editarCantidadContadores(value.cantidad);
      } else {
        // Editar el contenido de un contador específico
        editarContenidoContadores(value.id, value.cantidad, value.moneda, value.texto);
      }
    }
  
    return (
      <div className="bCRUD">
        <NavbarNoticia />
        <Opciones noticias={noticias} />
        <div className="roadmapContainer">
          <span>
            <b>Contadores</b>
            <h3>
              {contadores.length}
              <FontAwesomeIcon
                icon={faPencil}
                className="iconPencil"
                onClick={() => {
                  setTitle('Contadores');
                  setValue({ cantidad: contadores.length, texto: "", moneda: "" });
                  setElement(1);
                  setVisible(true);
                }}
              />
            </h3>
          </span>
        </div>
  
        <div className="tableWrapper">
          <table className="roadmapTable">
            <thead>
              <tr>
                <th>Valor de contador</th>
                <th>Texto</th>
                <th style={{ width: '20%' }}>Editar</th>
              </tr>
            </thead>
            <tbody>
              {contadores.map((contador, index) => (
                <tr key={index}>
                  <td>
                    <b>
                      {contador.cantContador} {contador.moneda}
                    </b>
                  </td>
                  <td>{contador.textoContador}</td>
                  <td style={{ width: '20%' }}>
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      className="iconPencil"
                      onClick={() => {
                        eliminarContador(contador.id);
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faPencil}
                      className="iconPencil"
                      onClick={() => {
                        setTitle('Editar contador');
                        setValue({
                          id: contador.id,
                          cantidad: contador.cantContador,
                          texto: contador.textoContador,
                          moneda: contador.moneda
                        });
                        setElement(2);
                        setVisible(true);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Toast ref={toast} />
          <ModalEditor
            title={title}
            value={value}
            setValue={setValue}
            externalVisible={visible}
            setVisible={setVisible}
            show={show}
            procesarCambio={procesarCambio}
            element={element}
          />
        </div>
      </div>
    );
  });