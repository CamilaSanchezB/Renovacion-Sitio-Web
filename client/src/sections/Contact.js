import Title from '../components/Title.js';
import Form from '../components/Form.js'
import '../styles/Contact.css'
/**
 * @function Contact
 * @desc Componente de la sección de contacto.
 * @category Sections
 * @param id Id del componente
 * @desc Muestra una sección de contacto con un título y un formulario.
 * @returns {JSX.Element} Elemento JSX que contiene la sección de contacto.
 */
export default function Contact({id}) {
  return (
   <div className='contactSection' id={id}>
      {/* Título de la sección de contacto */}
      <Title text=" Are you ready to be part of the " anothertext="IoT future's connectivity?"/>
      {/* Componente de formulario */}
      <Form />
   </div>

  );
}

