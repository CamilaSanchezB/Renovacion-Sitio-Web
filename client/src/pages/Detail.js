import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from 'primereact/toast';
import { useNavigate } from "react-router-dom";
import { fetchNoticiaById, actualizarNoticia } from "../functions/dbFunctionalities";
import SelectArchivo from '../components/SelectArchivo';
import { Divider } from 'primereact/divider';
import NavbarNoticia from '../components/NavbarNoticia'
import Opciones from '../components/Opciones'
import '../styles/estiloCrud.css'

/**
 * @function Detail
 * @category Pages - CRUD
 * @desc Componente de detalle de noticia
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.noticias - Lista de noticias
 * @param {Array} props.multimedia - Lista de archivos multimedia
 * @param {Function} props.setEliminarPos - Función para establecer la posición de eliminación de una noticia
 * @param {string} props.token - Token de autenticación
 * @param {Function} props.setNextHop - Función para establecer la siguiente ruta
 * @returns {JSX.Element} Componente de detalle de noticia
 */
export default React.memo(
  function Detail({ noticias, multimedia, setEliminarPos, token, setNextHop }) {
    let { id } = useParams();
    const [noticia, setNoticia] = useState();
    const [tituloOriginal, setTituloOriginal] = useState();
    const [textoOriginal, setTextoOriginal] = useState();
    const [multimediaOriginal, setMultimediaOriginal] = useState();
    const [linkOriginal, setLinkOriginal] = useState();
    const [fecha, setFecha] = useState();
    const [flag, setFlag] = useState(false);
    const [multimediaValue, setMultimediaValue] = useState(multimediaOriginal);
    const [redirecting, setRedirecting] = useState(false); // Estado para controlar la animación de redirección
    const toast = useRef(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      // Asignar los datos de la noticia correspondiente al ID
      async function asignarDatos() {
        fetchNoticiaById(id).then(data => {
          setNoticia(data);
          setTituloOriginal(data[0].titulo);
          setTextoOriginal(data[0].descripcion);
          setMultimediaOriginal(data[0].multimediaId);
          setMultimediaValue({ id: data[0].multimediaId, ruta: data[0].ruta, nombre: data[0].nombre });
          setLinkOriginal(data[0].link);
          var dateParts = data[0].fecha.split("-");
          setFecha(new Date(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0, 2)).toLocaleDateString());
        })
      }
      asignarDatos();
    }, [noticias]);
  
    const [cuerpo, setCuerpo] = useState(textoOriginal);
    const [link, setLink] = useState(linkOriginal);
    const [titulo, setTitulo] = useState(tituloOriginal);
    const [tituloValue, setTituloValue] = useState(tituloOriginal);
  
    const show = () => {
      toast.current.show({ severity: 'success', summary: 'Cambios realizados con éxito' });
    };
  
    const footer = (
      <div className="flexResponsive">
        <div className="flexGroup">
          {!flag && (
            <>
              {/* Botones para editar y borrar */}
              <Button
                label="Editar"
                icon="pi pi-pencil"
                style={{ marginRight: "1em" }}
                onClick={() => {
                  setFlag(true);
                }}
              />
              <Button
                label="Borrar"
                icon="pi pi-times"
                severity="danger"
                className="p-button-outlined p-button-secondary"
                onClick={() => eliminarNoticia(id)}
              />
            </>
          )}
          {flag && (
            <>
              {/* Botones para guardar y cancelar la edición */}
              <Button
                label="Guardar"
                icon="pi pi-check"
                style={{ marginRight: "1em" }}
                onClick={() => {
                  guardarNoticia();
                  setFlag(false);
                }}
              />
              <Button
                label="Cancelar"
                icon="pi pi-times"
                severity="danger"
                className="p-button-outlined p-button-secondary"
                onClick={() => setFlag(false)}
              />
            </>
          )}
        </div>
      </div>
    );
  
    /**
     * @desc Guarda los cambios realizados en la noticia
     */
    function guardarNoticia() {
      actualizarNoticia(id, tituloValue, cuerpo, multimediaValue.id, link);
      show();
    }
  
    /**
     * @desc Elimina la noticia
     * @param {string} indice - Índice de la noticia a eliminar
     */
    function eliminarNoticia(indice) {
      show();
      setEliminarPos(indice);
      setRedirecting(true); // Iniciar la animación de redirección
    }
  
    useEffect(() => {
      // Restaurar los valores originales si no se está editando
      if (!flag) {
        setTitulo(tituloOriginal);
        setTituloValue(tituloOriginal);
        setCuerpo(textoOriginal);
        setLink(linkOriginal);
      }
    }, [noticia]);
  
    useEffect(() => {
      // Actualizar el título dependiendo del estado de edición
      if (flag) {
        setTitulo(
          <InputTextarea
            style={{ width: "100%" }}
            autoResize
            rows={1}
            cols={100}
            defaultValue={tituloValue}
            onChange={(e) => {
              setTituloValue(e.target.value);
            }}
          />
        );
      } else {
        setTitulo(tituloOriginal);
      }
    }, [flag]);
  
    useEffect(() => {
      // Redireccionamiento después de la animación de redirección
      if (redirecting) {
        const redirectTimer = setTimeout(() => {
          setRedirecting(false); // Desactivar la animación de redirección después de 500ms
          navigate("/Editor/Noticias"); // Reemplaza "/" con la ruta deseada
        }, 700);
        return () => {
          clearTimeout(redirectTimer);
        };
      }
    }, [redirecting]);
  
    /**
     * @desc Renderiza la información del archivo multimedia
     * @param {Object} option - Opción de archivo multimedia
     * @returns {JSX.Element} Componente de información del archivo multimedia
     */
    function CardMultimedia(option) {
      if (option) {
        return (
          <div style={{ marginTop: '.5em' }}>
            <img alt={option.nombre} src={'../' + option.ruta} className={`mr-2 flag`} style={{ width: '10%' }} />
            <div>{option.nombre}</div>
          </div>
        );
      }
    }
  
    useEffect(() => {
      // Verificar si no hay un token de autenticación
      if (!token) {
        let path = window.location.href.split('/');
        let relativePath = "";
        for (let i = 3; i < path.length; i++) {
          relativePath += path[i] + '/';
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
        <Toast ref={toast} />
        <div style={{ margin: "auto" }}>
          <div className={`cardDetail flex justify-content-center ${redirecting ? "fade-out" : ""}`}>
            <Card title={titulo} footer={footer} subTitle={fecha}>
              {!flag && <>
                {/* Información de la noticia */}
                <small>Descripción</small>
                <p className="m-0">{cuerpo}</p>
                <Divider />
                <small>Multimedia</small>
                {CardMultimedia(multimediaValue)}
                <Divider />
                <small>Link</small>
                <div style={{ marginTop: '.5em' }}>
                  <a className="m-0" href={link}>{link}</a>
                </div>
              </>}
              {flag && (
                <>
                  {/* Campos de edición */}
                  <div style={{ marginBottom: '2em' }}>
                    <small style={{ paddingLeft: '.2em' }}>Descripción</small>
                    <InputTextarea
                      autoResize
                      style={{ width: "100%", marginTop: '0.5em' }}
                      rows={5}
                      cols={100}
                      defaultValue={cuerpo}
                      onChange={(e) => {
                        setCuerpo(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <small style={{ paddingLeft: '.2em' }}>Multimedia</small>
                    <SelectArchivo multimedia={multimedia} value={multimediaValue} cambio={(e) => {
                      setMultimediaValue(e.target.value);
                    }} />
                  </div>
                  <div style={{ marginTop: '2em' }}>
                    <small style={{ paddingLeft: '.2em' }}>Link</small>
                    <InputTextarea
                      autoResize
                      style={{ width: "100%", marginTop: '0.5em' }}
                      rows={5}
                      cols={100}
                      defaultValue={link}
                      onChange={(e) => {
                        setLink(e.target.value);
                      }}
                    />
                  </div>
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
    );
  }
)

