import '../styles/Button.css'
/**
 * @function Button
 * @desc Componente de botón reutilizable
 * @category Components
 * @param {string} text - Texto del botón
 * @param {string} estilo - Estilo del botón (clase CSS adicional)
 * @param {function} clickFunction - Función de clic del botón
 * @param {string} type - Tipo de botón (por defecto, 'button')
 * @returns {JSX.Element} Componente de botón
 */
export default function Button({ text, estilo, clickFunction, type }) {
    return (
      <div className={`buttonWrapper buttonWrapper${estilo}`}>
        <button className={`button button${estilo}`} onClick={clickFunction} type={type}>
          {text}
        </button>
      </div>
    );
  }
  

