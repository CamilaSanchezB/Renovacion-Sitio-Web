import React, {useEffect, useState} from 'react';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";
import '../styles/estiloCrud.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faArrowUp19, faCalendar} from '@fortawesome/free-solid-svg-icons'
import NavbarNoticia from '../components/NavbarNoticia'
import Opciones from '../components/Opciones'

/**
 * @function HomeCrud
 * @category Pages - CRUD
 * @desc Componente principal de la aplicación de edición
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.noticias - Lista de noticias
 * @param {string} props.token - Token de autenticación
 * @param {string} props.nombreUsuario - Nombre del usuario
 * @param {Function} props.setNombreUsuario - Función para establecer el nombre del usuario
 * @returns {JSX.Element} Componente principal de la aplicación de edición
 */
const HomeCrud = ({ noticias, token, nombreUsuario, setNombreUsuario }) => {
    // Verificar si no hay un token de autenticación
    if (!token) {
      window.location.replace('/Login');
      return (<></>);
    }
  
    return (
      <>
        <div className='bCRUD'>
          <NavbarNoticia noticias={noticias} usuario={nombreUsuario} setUsuario={setNombreUsuario} />
          <Opciones noticias={noticias} />
          <div className='containerHome'>
            {/* Contador */}
            <Panel
              header={<><FontAwesomeIcon icon={faArrowUp19} /><span> Contador </span></>}
              pt={{
                header: { style: { backgroundColor: 'var(--surface-900)', color: 'var(--primary-color-text)' } },
                title: { className: 'text-white' },
                toggler: { className: 'text-white hover:bg-primary-reverse' }
              }}
              style={{ width: '100%' }}
            >
              <p className="m-0">
                Almacena la cantidad de satélites que se mostrarán en el display
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Link to={"/Editor/Contador"}>
                  <Button severity='secondary' text size='small' label={<><i className="pi pi-chevron-right" ></i></>} />
                </Link>
              </div>
            </Panel>
  
            {/* Noticias */}
            <Panel
              header={<><FontAwesomeIcon icon={faNewspaper} /><span> Noticias </span></>}
              pt={{
                header: { style: { backgroundColor: 'var(--surface-900)', color: 'var(--primary-color-text)' } },
                title: { className: 'text-white' },
                toggler: { className: 'text-white hover:bg-primary-reverse' }
              }}
              style={{ width: '100%' }}
            >
              <p className="m-0">
                Contiene todas las noticias de la página. Se pueden agregar, editar y borrar.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Link to={"/Editor/Noticias"}>
                  <Button severity='secondary' text size='small' label={<><i className="pi pi-chevron-right" ></i></>} />
                </Link>
              </div>
            </Panel>
  
            {/* Multimedia */}
            <Panel
              header={<><i className={"pi pi-images"} /><span> Multimedia </span></>}
              pt={{
                header: { style: { backgroundColor: 'var(--surface-900)', color: 'var(--primary-color-text)' } },
                title: { className: 'text-white' },
                toggler: { className: 'text-white hover:bg-primary-reverse' }
              }}
              style={{ width: '100%' }}
            >
              <p className="m-0">
                Guarda todos los archivos multimedia de la página.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Link to={"/Editor/Multimedia"}>
                  <Button severity='secondary' text size='small' label={<><i className="pi pi-chevron-right" ></i></>} />
                </Link>
              </div>
            </Panel>
  
            {/* Roadmap */}
            <Panel
              header={<><FontAwesomeIcon icon={faCalendar} /><span> Roadmap </span></>}
              pt={{
                header: { style: { backgroundColor: 'var(--surface-900)', color: 'var(--primary-color-text)' } },
                title: { className: 'text-white' },
                toggler: { className: 'text-white hover:bg-primary-reverse' }
              }}
              style={{ width: '100%' }}
            >
              <p className="m-0">
                Permite acceder y editar los valores del roadmap.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Link to={"/Editor/Roadmap"}>
                  <Button severity='secondary' text size='small' label={<><i className="pi pi-chevron-right" ></i></>} />
                </Link>
              </div>
            </Panel>
  
            {/* Newsletter */}
            <Panel
              header={<><i className={"pi pi-envelope"} /><span> Newsletter </span></>}
              pt={{
                header: { style: { backgroundColor: 'var(--surface-900)', color: 'var(--primary-color-text)' } },
                title: { className: 'text-white' },
                toggler: { className: 'text-white hover:bg-primary-reverse' }
              }}
              style={{ width: '100%' }}
            >
              <p className="m-0">
                Permite acceder a los correos suscritos al newsletter.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Link to={"/Editor/Newsletter"}>
                  <Button severity='secondary' text size='small' label={<><i className="pi pi-chevron-right" ></i></>} />
                </Link>
              </div>
            </Panel>
  
            {/* Usuarios */}
            <Panel
              header={<><i className={"pi pi-user"} /><span> Usuarios </span></>}
              pt={{
                header: { style: { backgroundColor: 'var(--surface-900)', color: 'var(--primary-color-text)' } },
                title: { className: 'text-white' },
                toggler: { className: 'text-white hover:bg-primary-reverse' }
              }}
              style={{ width: '100%' }}
            >
              <p className="m-0">
                Permite gestionar los usuarios editores.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Link to={"/Editor/Registro"}>
                  <Button severity='secondary' text size='small' label={<><i className="pi pi-chevron-right" ></i></>} />
                </Link>
              </div>
            </Panel>
          </div>
        </div>
      </>
    );
  }
  
  export default React.memo(HomeCrud);
  