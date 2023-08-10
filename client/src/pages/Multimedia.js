import React, {useRef, useEffect} from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import {borrarMultimedia, fetchDataNoticias} from '../functions/dbFunctionalities.js'
import { Divider } from 'primereact/divider';
import NavbarNoticia from '../components/NavbarNoticia.js'
import Opciones from '../components/Opciones'
import { useNavigate } from 'react-router-dom';
import { fetchDataMultimedia } from '../functions/dbFunctionalities.js';
import Desarrollo from '../sections/Desarrollo.js';

/**
 * @function Multimedia
 * @category Pages - CRUD
 * @desc Página de gestión de archivos multimedia
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.multimedia - Array de archivos multimedia
 * @param {Array} props.noticias - Array de noticias
 * @param {string} props.token - Token de autenticación del editor
 * @param {Function} props.setNextHop - Función para establecer el siguiente destino de navegación
 * @param {Function} props.setMultimedia - Función para actualizar el array de archivos multimedia
 * @returns {JSX.Element} Componente de la página de gestión de archivos multimedia
 */
export default function Multimedia({ multimedia, noticias, token, setNextHop, setMultimedia }) {
  const navigate = useNavigate();
  const toastUpload = useRef(null);
  const toastDelete = useRef(null);

  const onUpload = () => {
    toastUpload.current.show({ severity: 'info', summary: 'Success', detail: 'Archivo agregado' });
  };

  /**
   * Elimina un archivo multimedia
   * @param {number} id - ID del archivo multimedia a eliminar
   * @param {string} nombre - Nombre del archivo multimedia a eliminar
   */
  function eliminar(id, nombre) {
    borrarMultimedia(id, nombre, 'multimedia');
    toastDelete.current.show({ severity: 'info', summary: 'Success', detail: 'Archivo eliminado' });
  }
  
  useEffect(() => {
      fetchDataMultimedia().then((data) => {
        setMultimedia(data);
      });
  }, [multimedia]);
  

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
    return (<></>);
  }

  return (
    <div className='bCRUD'>
      <NavbarNoticia />
      <Opciones noticias={noticias} />

      <div className="cardDetail">
        <Toast ref={toastUpload}></Toast>
        <Toast ref={toastDelete}></Toast>
        <FileUpload mode="basic" name="demo[]" url="http://172.15.0.200:8080/multimedia/upload/multimedia" maxFileSize={1000000000} onUpload={onUpload} style={{ border: '0', marginBottom: '1em' }}accept='*' chooseLabel='Agregar archivo' auto />
        <Divider />

        {multimedia.map((archivo) => (
          <div style={{ display: 'grid', gridTemplateColumns: '80% 20%' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '10% 20%', gap: '3%' }}>
              <img style={{ maxWidth: '100%', margin: '1em', borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} src={archivo.ruta} alt={archivo.nombre} />
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', display: 'inline-block', marginTop: '1em' }}>{archivo.nombre}</div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
              <Button icon="pi pi-times" className="p-button-rounded" severity='danger' onClick={() => { eliminar(archivo.id, archivo.nombre) }}></Button>
            </div>
          </div>
        ))}

      </div>
      {/*Multimedia WEB */}
      <Desarrollo />
    </div>
  );
}
