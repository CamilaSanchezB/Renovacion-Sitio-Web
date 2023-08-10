import '../styles/Wave.css'
/**
 * @function Wave
 * @desc Componente que representa una onda estilizada.
 * @category Components
 * @param {string} estilo - El estilo de la onda.
 *
 * @returns {JSX.Element} - Onda representada como un elemento JSX.
 */
export default function Wave({ estilo }) {
    return (
        <div className={`wave wave${estilo}`}/>
    );
}
