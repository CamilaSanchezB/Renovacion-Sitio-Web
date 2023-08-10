import '../styles/Title.css'

/**
 * @function Title
 * @desc Componente que representa un título con texto adicional.
 * @category Components
 * @param {string} text - El texto principal del título.
 * @param {string} anothertext - El texto adicional que se muestra junto al título principal.
 * @param {string} estilo - El estilo del título.
 *
 * @returns {JSX.Element} - Título representado como un elemento JSX.
 */
export default function Title({ text, anothertext, estilo }) {
    return (
        <div className={`titleWrapper titleWrapper${estilo}`}>
            <h3 className={`title title${estilo}`}>
                {text}
                <span className='anotherText'>{anothertext}</span>
            </h3>
        </div>
    );
}

