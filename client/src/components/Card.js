import "../styles/Card.css"

/**
 * @function Card
 * @desc Componente de tarjeta reutilizable
 * @category Components
 * @param {string} title - Título de la tarjeta
 * @param {string} text - Texto de la tarjeta
 * @param {string} src - URL de la imagen de la tarjeta
 * @param {string} alt - Texto alternativo de la imagen
 * @param {string} estilo - Estilo de la tarjeta (clase CSS adicional)
 * @returns {JSX.Element} Componente de tarjeta
 */
export default function Card({ title, text, src, alt, estilo }) {
  return (
    <div className={`cardWrapper cardWrapper${estilo}`}>
      <div className={`card card${estilo}`}>
        <div className={`cardTitle cardTitle${estilo}`}>
          {title}
        </div>
        <div className={`cardText cardText${estilo}`}>
          {text}
        </div>
        <div className={`cardImgWrapper cardImgWrapper${estilo}`}>
          <img className={`cardImg cardImg${estilo}`} src={src} alt={alt} />
        </div>
      </div>
    </div>
  );
}
