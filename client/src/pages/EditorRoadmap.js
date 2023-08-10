import React, {useEffect, useState, useRef} from 'react';
import NavbarNoticia from '../components/NavbarNoticia'
import Opciones from '../components/Opciones'
import '../styles/estiloCrud.css'
import { editarAnioInicio, editarCantAnios, editarContenido, getAnioInicio, getCantAnios, getContenidoRoadmap, getImgByAnio } from '../functions/dbFunctionalities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { Toast } from 'primereact/toast';
import ModalEditor from '../components/ModalEditorRoadmap';
import { useNavigate } from 'react-router-dom';

/**
 * @function EditorRoadmap
 * @category Pages - CRUD
 * @desc Componente para la edición del roadmap por parte del editor
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.noticias - Array de noticias
 * @param {integer} props.anioInicio - Año de inicio del roadmap
 * @param {integer} props.cantAnios - Cantidad de años a mostrar en el roadmap
 * @param {Array} props.contenido - Array de contenido del roadmap
 * @param {string} props.token - Token de autenticación del editor
 * @param {Function} props.setNextHop - Función para establecer el siguiente destino de navegación
 * @param {Function} props.setAnioInicio - Función para establecer el año de inicio del roadmap
 * @param {Function} props.setCantAnios - Función para establecer la cantidad de años del roadmap
 * @param {Function} props.setContenido - Función para establecer el contenido del roadmap
 * @param {Array} props.multimedia - Array de multimedia
 * @returns {JSX.Element} Componente de EditorRoadmap
 */
const EditorRoadmap = ({ noticias, anioInicio, cantAnios, contenido, token, setNextHop, setAnioInicio, setCantAnios, setContenido, multimedia }) => {
    const toast = useRef(null);
    const navigate = useNavigate();
    const [element, setElement] = useState(2);
    const [anio, setAnio] = useState(anioInicio);
    const [title, setTitle] = useState('');
    const show = () => {
      toast.current.show({ severity: 'success', summary: 'Cambios guardados con éxito' });
    };
    const [value, setValue] = useState();
    const [visible, setVisible] = useState(false);
    const [anios, setAnios] = useState([]);
    const [images, setImages] = useState([]);
    const openDialog = () => {
      setVisible(true);
    };
  console.log(multimedia)
    useEffect(() => {
      // Obtener el año de inicio del roadmap
      getAnioInicio().then((data) => {
        setAnioInicio(data);
      });
      // Obtener la cantidad de años a mostrar en el roadmap
      getCantAnios().then((data) => {
        setCantAnios(data);
      });
      // Obtener el contenido del roadmap
      getContenidoRoadmap().then((data) => {
        setContenido(data.map((value) => value.contenido));
      });
      async function asignarDatos() {
        let array = [];
        for (let i = anioInicio; i < anioInicio + cantAnios; i++) {
          array.push(i);
        }
        setAnios(array);
        const promises = array.map((anio) => getImgByAnio(anio));
        try {
          // Obtener las imágenes correspondientes a cada año
          const data = await Promise.all(promises);
          setImages(data);
        } catch (error) {
          console.error('Error fetching image data:', error);
        }
      }
      asignarDatos();
    }, [anioInicio, cantAnios, contenido, multimedia]);
  
    /**
     * @function procesarCambio
     * @desc Procesa el cambio realizado en el roadmap
     * @param {string} valor - Valor del cambio realizado
     * @param {integer} element - Elemento del roadmap que se está modificando
     * @param {integer} anio - Año correspondiente al elemento modificado
     * @param {string} img - Ruta de la imagen correspondiente al elemento modificado
     */
    function procesarCambio(valor, element, anio, img) {
      if (element === 0) {
        // Editar el año de inicio del roadmap
        editarAnioInicio(valor, anioInicio, cantAnios, '');
      } else if (element === 1) {
        // Editar la cantidad de años a mostrar en el roadmap
        editarCantAnios(cantAnios, valor);
      } else if (element === 2) {
        // Editar el contenido de un año específico en el roadmap
        editarContenido(anio, valor, img);
      }
    }
  
    useEffect(() => {
      if (!token) {
        let path = window.location.href.split('/');
        let relativePath = '';
        for (let i = 3; i < path.length; i++) {
          relativePath += path[i];
          if (i !== path.length - 1) {
            relativePath += '/';
          }
        }
        // Establecer el siguiente destino de navegación
        setNextHop('/' + relativePath);
        // Redirigir al componente de inicio de sesión
        navigate('/Login');
      }
    }, []);
  
    if (!token) {
      return <></>;
    }
  
    return (
      <div className="bCRUD">
        <NavbarNoticia />
        <Opciones noticias={noticias} />
        <div className="roadmapContainer">
          <span>
            <b>Año de inicio:</b>
            <h3>
              {anioInicio}
              <FontAwesomeIcon
                icon={faPencil}
                className="iconPencil"
                onClick={() => {
                  setElement(0);
                  setValue(anioInicio);
                  setTitle('Año Inicio');
                  openDialog();
                }}
              />
            </h3>
          </span>
          <span>
            <b>Años a mostrar:</b>
            <h3>
              {cantAnios}
              <FontAwesomeIcon
                icon={faPencil}
                className="iconPencil"
                onClick={() => {
                  setElement(1);
                  setValue(cantAnios);
                  setTitle('Cantidad de años');
                  openDialog();
                }}
              />
            </h3>
          </span>
          <span>
            <b>Año final:</b>
            <h3>{anioInicio + cantAnios - 1}</h3>
          </span>
        </div>
        <div className="tableWrapper">
          <table className="roadmapTable">
            <thead>
              <tr>
                <th>Año</th>
                <th style={{ width: '80px' }}>Imagen</th>
                <th>Texto</th>
                <th style={{ width: '20%' }}>Editar</th>
              </tr>
            </thead>
            <tbody>
              {anios.map((element, index) => (
                <tr key={index}>
                  <td>
                    <b>{element}</b>
                  </td>
                  <td>
                    <img src={images[element - anioInicio]} width="80px" />
                  </td>
                  <td>{contenido[index]}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faPencil}
                      className="iconPencil"
                      onClick={() => {
                        setElement(2);
                        setValue(contenido[index]);
                        setAnio(element);
                        setTitle('Texto ' + element);
                        setVisible(true);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Toast ref={toast} />
        <ModalEditor
          multimedia={multimedia}
          title={title}
          value={value}
          setValue={setValue}
          externalVisible={visible}
          setVisible={setVisible}
          show={show}
          procesarCambio={procesarCambio}
          element={element}
          anio={anio}
        />
      </div>
    );
  };


export default React.memo(EditorRoadmap);