import React, {useEffect, useState, useRef} from 'react';
import '../styles/estiloCrud.css'
import '../styles/estiloCrud.css'
import { getEditores, isSuper, encriptar, crearUsuario, actualizarPermisos, borrarEditor, getSuscriptores } from '../functions/dbFunctionalities';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { faCircleXmark, faPencil, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavbarNoticia from '../components/NavbarNoticia';
import { Button } from 'primereact/button';
import ModalEditor from '../components/ModalEditorRegistro';
import Opciones from '../components/Opciones';

/**
 * @function SignUpPage
 * @category Pages - CRUD
 * @desc Página de registro de usuarios
 * @param {Object} props - Propiedades del componente
 * @param {string} props.token - Token de autenticación del editor
 * @param {Function} props.setNextHop - Función para establecer el siguiente destino de navegación
 * @param {string} props.username - Nombre de usuario del editor
 * @param {Array} props.noticias - Array de noticias
 * @returns {JSX.Element} Componente de la página de registro de usuarios
 */
export default function SignUpPage({ token, setNextHop, username, noticias }) {
  const navigate = useNavigate();
  const [editores, setEditores] = useState([]);
  const [value, setValue] = useState({ id: 0, usuario: "", contrasena: "", accessToken: "", superUsuario: 0 });
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [element, setElement] = useState(1);
  const [email, setEmail] = useState("");
  const [esSuper, setEsSuper] = useState(0);
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

    // Verificar si el usuario actual tiene permisos de superusuario
    
    isSuper(username).then((data) => {
      console.log('signup:' + username);
      setEsSuper(data);
    });

  }, []);

  useEffect(() => {
    // Obtener los editores
    getEditores().then((data) => {
      setEditores(data);
    });
  }, [editores]);

  if (!token) {
    return (<></>);
  }

  function show() {
    toast.current.show({ severity: 'success', summary: 'Cambios guardados con éxito', life: 1500 });
  }

  function showError(textoError) {
    toast.current.show({ severity: 'error', summary: 'Error', detail: textoError, life: 2000 });
  }

  async function procesarCambio() {
    let pass = await encriptar(value.contrasena);
    await crearUsuario(value.usuario, pass.textoEncriptado, value.superUsuario, email).then((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        show();
      }
    });
    setEmail("");
  }

  async function darPermiso(id, superUsuario) {
    if (superUsuario === 1) await actualizarPermisos(id, 0);
    else await actualizarPermisos(id, 1);
  }

  async function eliminarUsuario(id) {
    if (editores.length > 1) {
      await borrarEditor(id);
    } else {
      showError('No puede eliminar al único usuario.');
    }
  }

  return (
    <div>
      <NavbarNoticia />
      <Opciones noticias={noticias} />

      {esSuper === 1 ? (
        <>
          <Button onClick={() => { setValue({ id: 0, usuario: "", contrasena: "", accessToken: "", superUsuario: 0 }); setElement(1); setTitle('Nuevo usuario'); setVisible(true); }} severity='secondary' label={<><FontAwesomeIcon icon={faPlus} style={{ marginRight: '1em' }} /> Crear usuario</>} style={{ marginLeft: '20%', marginBottom: '1em' }} />

          <table className='roadmapTable tablaNewsletter'>
            <thead>
              <tr>
                <th>Nombre editor</th>
                <th>¿Puede crear, editar y borrar usuarios?</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              {editores.map((suscriptor, index) => (
                <tr key={index}>
                <td style={{ textAlign: 'center' }}>{suscriptor.usuario}</td>
                <td style={{ textAlign: 'center' }}>{suscriptor.superUsuario === 1 ? 'Sí' : 'No'}</td>
                <td style={{ textAlign: 'center' }}>
                  <FontAwesomeIcon icon={faCircleXmark} className="iconPencil" onClick={() => { eliminarUsuario(suscriptor.id) }} style={{ marginRight: '1em', color: '#bd0202' }} />
                  <FontAwesomeIcon className="iconPencil" style={{ color: '#165b1f' }} icon={faPencil} onClick={() => { darPermiso(suscriptor.id, suscriptor.superUsuario) }} />
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <h1 style={{ color: 'white', textAlign: 'center' }}>No tiene permiso para acceder a esta sección.</h1>
          <h3 style={{ color: 'white', textAlign: 'center' }}>Consulte con el administrador.</h3>
        </>
      )}

      <Toast ref={toast} />
      <ModalEditor title={title} value={value} setValue={setValue} externalVisible={visible} setVisible={setVisible} procesarCambio={procesarCambio} element={element} setEmail={setEmail} email={email} />
    </div>
  );
}
