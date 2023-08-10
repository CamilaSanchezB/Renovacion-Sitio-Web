import Input from './Input';
import Button from './Button';
import Flags from './Flags';
import React, { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { enviarMailContacto } from '../functions/dbFunctionalities';

/**
 * @function Form
 * @param {string} id Id del componente
 * @desc Formulario de contacto
 * @category Components
 * @returns {JSX.Element} Componente de formulario de contacto
 */
export default function Form({id}) {
  const toast = useRef(null);
  const [nationality, setNationality] = useState(null);

  /**
   * @desc Valida si una dirección de correo electrónico es válida
   * @param {string} email - Dirección de correo electrónico a validar
   * @returns {boolean} true si la dirección de correo electrónico es válida, de lo contrario false
   */
  function isValidEmail(email) {
    const atIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");

    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
  }

  /**
   * @desc Maneja el cambio en la selección del dropdown de nacionalidad
   * @param {object} value - Valor seleccionado en el dropdown
   */
  const handleDropdownChange = (value) => {
    setNationality(value);
  };

  /**
   * @desc Muestra una notificación de error de correo electrónico
   * @param {string} errorData - Datos del error de correo electrónico
   */
  const showEmail = (errorData) => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: errorData,
      life: 3000,
    });
  };

  /**
   * @desc Muestra una notificación de error general
   */
  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Algo salió mal :(",
      life: 3000,
    });
  };

  /**
   * @desc Muestra una notificación de éxito
   */
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "¡Felicidades!",
      detail: "El email se envió correctamente",
      life: 3000,
    });
  };

  const firstNameRef = useRef(null);
  const surnameRef = useRef(null);
  const emailRef = useRef(null);
  const emailConfirmationRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: firstNameRef.current.value,
      surname: surnameRef.current.value,
      email: emailRef.current.value,
      emailConfirmation: emailConfirmationRef.current.value,
      nationality: nationality.name,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };

    console.log(formData);

    if (isValidEmail(emailRef.current.value)) {
      if (emailRef.current.value === emailConfirmationRef.current.value) {
        async function envioDatos(formData) {
          enviarMailContacto(formData).then((data) => {
            if (data.status === 200) {
              showSuccess();
              // Restablece los campos del formulario
              firstNameRef.current.value = "";
              surnameRef.current.value = "";
              emailRef.current.value = "";
              emailConfirmationRef.current.value = "";
              nationality.name = "";
              subjectRef.current.value = "";
              messageRef.current.value = "";
            } else {
              showError();
            }
          });
        }
        envioDatos(formData);
      } else {
        showEmail("Los e-mails no coinciden");
      }
    } else {
      showEmail("El e-mail no es válido");
    }
  };

  return (
    <form onSubmit={handleSubmit} id={id}>
      <div className="form">
        <div className="gridInput ">
          <Input
            type="text"
            name="firstName"
            inputRef={firstNameRef}
            placeholder="Name"
          />
          <Input
            type="text"
            name="surname"
            inputRef={surnameRef}
            placeholder="Surname"
          />
          <Input
            type="text"
            name="email"
            inputRef={emailRef}
            placeholder="E-mail"
          />
          <Input
            type="text"
            name="emailConfirmation"
            inputRef={emailConfirmationRef}
            placeholder="Repeat e-mail"
          />
          <Flags onDropdownChange={handleDropdownChange} />
          <Input
            type="text"
            name="subject"
            inputRef={subjectRef}
            placeholder="Subject"
          />
        </div>
        <textarea
          className="textarea"
          name="message"
          ref={messageRef}
          placeholder="Message"
          required
        />
        <Toast ref={toast} />

        <Button estilo="FormHome" text="Send message" type="submit" />
      </div>
    </form>
  );
}
