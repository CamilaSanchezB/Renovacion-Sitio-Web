import '../styles/Input.css'
/**
 * @function Input
 * @desc Campo de entrada del formulario
 * @category Components
 * @param {Object} props - Propiedades del componente
 * @param {string} props.placeholder - Texto de marcador de posición del campo de entrada
 * @param {string} props.type - Tipo de campo de entrada (por ejemplo, "text", "email", "password", etc.)
 * @param {string} props.name - Nombre del campo de entrada
 * @param {Object} props.inputRef - Referencia al campo de entrada
 * @returns {JSX.Element} Componente de campo de entrada del formulario
 */
export default function Input({ placeholder, type, name, inputRef }) {
    return (
      <div className="inputWrapper">
        <input
          className="input"
          type={type}
          name={name}
          ref={inputRef}
          required
          style={{ outline: "none" }}
        />
        <label>{placeholder}</label>
      </div>
    );
  }
  
