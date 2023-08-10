import '../styles/Solution.css'
import Title from "../components/Title";

/**
 * @function Solution
 * @desc Componente funcional que muestra la sección de "Nuestra Solución".
 * @category Sections
 * @returns {JSX.Element}
 */
export default function Solution() {
  return (
    <div className="Solution">
        <Title estilo="title left" text="Our Solution"/>
        <div className="solutionImageWrapper">
            <img className="solutionImage" src="https://cdn.icon-icons.com/icons2/2568/PNG/512/images_picture_icon_153719.png" alt=""/>
        </div>
    </div>
  );
}
