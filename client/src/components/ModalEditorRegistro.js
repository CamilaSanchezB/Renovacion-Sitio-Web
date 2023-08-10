import React, {useState, useEffect} from 'react';
import { Dialog } from 'primereact/dialog';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from "primereact/checkbox";
import {InputNumber} from 'primereact/inputnumber';
import {InputMask} from 'primereact/inputmask';
import { Button } from 'primereact/button';
import PropTypes from 'prop-types';
/**
 * @function ModalEditorRegistro
 * @desc Modal de edición
 * @category Components
 * @param {string} title - Título del modal
 * @param {object} value - Valor actual de los campos del modal
 * @param {function} setValue - Función para actualizar el valor de los campos del modal
 * @param {boolean} externalVisible - Indica si el modal es visible externamente
 * @param {function} setVisible - Función para cambiar la visibilidad del modal
 * @param {function} procesarCambio - Función para procesar el cambio realizado en el modal
 * @param {number} element - Indicador de tipo de elemento
 * @param {function} setEmail - Función para actualizar el valor del campo de email
 * @param {string} email - Valor actual del campo de email
 * @returns {JSX.Element} - Elemento de modal de edición
 */
const ModalEditor = ({ title, value, setValue, externalVisible, setVisible, procesarCambio, element, setEmail, email }) => {
  const hideDialog = () => {
    setVisible(false);
  };
  const [checkedSuper, setCheckedSuper] = useState(false);
  const [errorForm, setErrorForm] = useState("");

  /**
   * Valida los campos del formulario y realiza el procesamiento correspondiente
   */
  function validar() {
    if (value.usuario !== "" && value.usuario.length > 4) {
      if (/.+@.+\.[A-Za-z]+$/.test(email)) {
        if (value.contrasena !== "" && value.contrasena.length >= 8) {
          setErrorForm("");
          setVisible(false);
          procesarCambio(value, element);
        } else setErrorForm('Contraseña no válida');
      } else setErrorForm('Email no válido');
    } else setErrorForm('Usuario no válido');
  }

  return (
    <div>
      <Dialog
        header={title}
        visible={externalVisible}
        onHide={hideDialog}
        className={'modalYears'}
      >
        <span className="p-float-label" style={{ marginTop: '2em' }}>
          <InputText id="username" value={value.usuario} onChange={(e) => setValue({ id: value.id, usuario: e.target.value, contrasena: value.contrasena, accessToken: value.accessToken, superUsuario: value.superUsuario })} style={{ width: '100%' }} />
          <label htmlFor="username">Nombre de usuario</label>
        </span>
        <small><label className="ml-2">Mínimo 5 caracteres</label></small>

        <span className="p-float-label" style={{ marginTop: '2em' }}>
          <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%' }} />
          <label htmlFor="email">Email</label>
        </span>
        <small><label className="ml-2">Se enviarán los datos de inicio de sesión a esta dirección</label></small>

        <span className="p-float-label" style={{ marginTop: '2em' }}>
          <InputText id="contrasena" value={value.contrasena} onChange={(e) => setValue({ id: value.id, usuario: value.usuario, contrasena: e.target.value, accessToken: value.accessToken, superUsuario: value.superUsuario })} style={{ width: '100%' }} />
          <label htmlFor="contrasena">Contraseña</label>
        </span>
        <small><label className="ml-2">Mínimo 8 caracteres</label></small>

        <div className="flex align-items-center" style={{ marginTop: '2em', marginBottom: '1em' }}>
          <Checkbox inputId="superUsuario" value={checkedSuper} onChange={() => { setCheckedSuper(!checkedSuper); if (!checkedSuper) { setValue({ id: value.id, usuario: value.usuario, contrasena: value.contrasena, accessToken: value.accessToken, superUsuario: 1 }) } else setValue({ id: value.id, usuario: value.usuario, contrasena: value.contrasena, accessToken: value.accessToken, superUsuario: 0 }) }} checked={checkedSuper} />
          <label htmlFor="superUsuario" className="ml-2" style={{ marginLeft: '0.5em' }}>Puede añadir, editar y borrar usuarios</label>
        </div>

        <span>
          <small style={{ color: 'red' }}>{errorForm}</small>
        </span>

        <Button
          className='buttonRoadmap'
          icon="pi pi-check"
          severity='success'
          onClick={() => {
            validar();
          }}
          style={{ width: '15%', marginTop: '2em', float: 'right' }}
        />
      </Dialog>
    </div>
  );
};

ModalEditor.propTypes = {
  value: PropTypes.any.isRequired
};

export default React.memo(ModalEditor);
