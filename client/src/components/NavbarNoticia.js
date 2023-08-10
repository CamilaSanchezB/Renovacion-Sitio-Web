import React, {useEffect, useState, useRef} from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
import "primeicons/primeicons.css";
import { Button } from 'primereact/button';
import {Link} from "react-router-dom";
import {Menubar} from "primereact/menubar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faRocket, faUser, faCheck, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import{InputText} from "primereact/inputtext";
import { Sidebar } from 'primereact/sidebar';
import '../styles/estiloCrud.css'
import { isSuper, actualizarUsuarios, actualizarContrasena } from '../functions/dbFunctionalities';
import {Password} from "primereact/password";
import { Toast } from 'primereact/toast';
/**
 * @function NavbarNoticia
 * @desc Barra de navegación para las noticias
 * @category Components
 * @param {string} usuario - Nombre de usuario
 * @param {function} setUsuario - Función para actualizar el nombre de usuario
 * @returns {JSX.Element} - Elemento JSX de la barra de navegación de noticias
 */
function NavbarNoticia({ usuario, setUsuario }) {
  const toast = useRef(null);
  const [url, setUrl] = useState();
  const [visible, setVisible] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const [esSuper, setEsSuper] = useState(0);
  const [edicion, setEdicion] = useState(false);
  const [valueUsuario, setValueUsuario] = useState(usuario);
  const [cambioContrasena, setCambioContrasena] = useState(false);
  const [contrasenaVieja, setContrasenaVieja] = useState("");
  const [contrasenaNueva, setContrasenaNueva] = useState("");
  const [contrasenaNuevaCheck, setContrasenaNuevaCheck] = useState("");
  const [textoError, setTextoError] = useState("");

  useEffect(() => {
    /**
     * @function asignar
     * @desc Asigna la URL formateada al estado `url`
     */
    function asignar() {
      let direccion = window.location.href.split("/");
      let palabra;
      if (direccion[direccion.length - 2] === "Detail") {
        palabra = "Detalle";
      } else {
        palabra = direccion[direccion.length - 1];
      }
      if (palabra === "Editor") {
        palabra = "";
      }
      setUrl(palabra);
    }

    asignar();
  }, []);

  /**
   * @function showSuccess
   * @desc Muestra un mensaje de éxito
   */
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Cambios guardados con éxito.",
      life: 3000,
    });
  };

  /**
   * @function showError
   * @desc Muestra un mensaje de error
   * @param {string} detalle - Detalle del error
   */
  const showError = (detalle) => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: detalle,
      life: 3000,
    });
  };

  /**
   * @function chequeoUsuario
   * @desc Realiza la verificación y actualización de los cambios en el nombre de usuario
   */
  function chequeoUsuario() {
    setEdicion(!edicion);
    if (edicion && valueUsuario.length > 3) {
      try {
        actualizarUsuarios(usuario, valueUsuario).then((data) => {
          setUsuario(data);
          showSuccess();
        });
      } catch (e) {
        showError(e.message);
      }
    }
  }

  useEffect(() => {
    if (usuario) {
      isSuper(usuario).then((data) => {
        setEsSuper(data);
      });
      function actualizar() {
        setUsuario(usuario);
      }
      actualizar();
    }
  }, [usuario, esSuper]);

  useEffect(() => {
    if (contrasenaNuevaCheck !== contrasenaNueva) {
      setTextoError("Las contraseñas no son iguales.");
    } else {
      setTextoError("");
    }
  }, [contrasenaNuevaCheck, contrasenaNueva]);

  /**
   * @function chequeoContrasena
   * @desc Realiza la verificación y actualización de los cambios en la contraseña
   */
  function chequeoContrasena() {
    setCambioContrasena(!cambioContrasena);
    if (textoError === "" && contrasenaVieja !== "" && contrasenaNueva.length >= 8) {
      actualizarContrasena(usuario, contrasenaVieja, contrasenaNueva).then((data) => {
        if (data.error) {
          showError(data.error);
          setCambioContrasena(true);
        } else {
          showSuccess();
          setContrasenaNueva("");
          setContrasenaVieja("");
          setContrasenaNuevaCheck("");
        }
      });
    }
  }

  const start = (
    <Link to={"/Editor"}>
      <Button
        label={
          <>
            <FontAwesomeIcon icon={faRocket} style={{ fontSize: "1.5rem" }} />
            <span> INNOVA SPACE </span>
          </>
        }
        text
        style={{ fontSize: "1.5rem", color: "white" }}
      />
    </Link>
  );

  let end;
  if (url !== "") {
    end = <span className="navbarEditor">{url}</span>;
  } else {
    end = (
      <span className="navbarEditor">
        <FontAwesomeIcon
          icon={faUser}
          onClick={() => setVisible(true)}
          className="sideUser"
          bounce={mouseOver}
          onMouseOver={() => {
            setMouseOver(true);
          }}
          onMouseOut={() => {
            setMouseOver(false);
          }}
        />
      </span>
    );
  }
  return (
    <div style={{ width: "100%", marginTop: 0, marginBottom: "2em" }}>
      <Toast ref={toast} />
      {usuario && (
        <Sidebar
          visible={visible}
          onHide={() => {
            setVisible(false);
            setContrasenaNueva("");
            setContrasenaVieja("");
            setContrasenaNuevaCheck("");
            setCambioContrasena(false);
          }}
          className="sideUser"
        >
          <h4 style={{ marginBottom: 0 }}>Nombre de usuario:</h4>
          <h2 style={{ marginTop: "0.5em" }}>
            {!edicion ? (
              usuario
            ) : (
              <InputText defaultValue={usuario} onChange={(e) => setValueUsuario(e.target.value)} />
            )}
            <span
              style={{ fontSize: "20px", float: "right", marginRight: "1em" }}
              onClick={() => {
                chequeoUsuario();
              }}
              className="iconPencil"
            >
              <FontAwesomeIcon icon={!edicion ? faPencil : faCheck} />
            </span>
          </h2>
          {cambioContrasena && (
            <>
              <span className="p-float-label" style={{ marginBottom: "2em", marginTop: "1.5em" }}>
                <Password inputId="contrasenaViejaId" value={contrasenaVieja} onChange={(e) => setContrasenaVieja(e.target.value)} toggleMask feedback={false} />
                <label htmlFor="contrasenaViejaId">Contraseña actual</label>
              </span>
              <span className="p-float-label">
                <Password inputId="contrasenaNuevaId" value={contrasenaNueva} onChange={(e) => setContrasenaNueva(e.target.value)} toggleMask />
                <label htmlFor="contrasenaNuevaId">Nueva contraseña</label>
              </span>
              <small>
                <label className="ml-2">Mínimo 8 caracteres</label>
              </small>
              <span className="p-float-label" style={{ marginBottom: "1em", marginTop: "1.5em" }}>
                <Password inputId="contrasenaNuevaCheckId" value={contrasenaNuevaCheck} onChange={(e) => setContrasenaNuevaCheck(e.target.value)} toggleMask feedback={false} />
                <label htmlFor="contrasenaNuevaCheckId">Repita la nueva contraseña</label>
              </span>
              <small style={{ color: "red" }}>{textoError}</small>
            </>
          )}
          <Button
            text
            label="Cambiar contraseña"
            onClick={() => {
              chequeoContrasena();
            }}
            className="textBEspecial"
            style={{ marginTop: textoError ? "2em" : "0" }}
          />
          <p style={{ color: esSuper ? "green" : "red" }}>{esSuper ? "P" : "No p"}uede crear, editar y borrar usuarios</p>
          <Button
            text
            label={
              <>
                Cerrar sesión <FontAwesomeIcon icon={faRightFromBracket} />
              </>
            }
            onClick={() => {
              localStorage.clear();
              window.location.replace("/Login");
            }}
            className="textBEspecial"
            style={{ float: "right", marginTop: "3em" }}
          />
        </Sidebar>
      )}
      <Menubar
        start={start}
        end={end}
        model={null}
        submenuIcon={null}
        className="borrarA"
        style={{ backgroundColor: "#1e40af", borderRadius: "0px 0px 30px 30px", padding: "15px" }}
      />
    </div>
  );
}

export default React.memo(NavbarNoticia);
