import '../styles/ToggleButton.css'
/**
 * @function ToggleButton
 * @desc Componente que representa un botón de alternancia (toggle button).
 * @category Components
 * @param {string} language - El idioma del botón de alternancia.
 *
 * @returns {JSX.Element} - Botón de alternancia representado como un elemento JSX.
 */
export default function ToggleButton({ language }) {
   return(
      <label className="switch">
         <input type="checkbox"/>
         <span className="slider"></span>
         <span className="toggle-text"></span>
      </label>
   );
}
