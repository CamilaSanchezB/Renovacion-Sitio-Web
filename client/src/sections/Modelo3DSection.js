import React from 'react'
import '../styles/Modelo3DSection.css'
import '../styles/Welcome.css'
import Title from '../components/Title';
import Modelo3D from "../components/Modelo3D"

/**
 * @function Modelo3DSection
 * @desc Componente funcional para mostrar una sección con un modelo 3D y sus atributos.
 * @category Sections
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.titulo - Título de la sección.
 * @param {string[]} props.atributosTitle - Array con los títulos de los atributos.
 * @param {string[]} props.atributos - Array con los valores de los atributos.
 * @param {string} props.modelo - URL del modelo 3D a mostrar.
 * @param {boolean} props.modeloInicio - Estado para iniciar la visualización del modelo.
 * @returns {JSX.Element}
 */
function Modelo3DSection({titulo, atributosTitle ,atributos, modelo, modeloInicio, id}) {

    return (
        <section className='M3DSSection' id={id}>
            <div className='M3DSContainer'>
                <div className='M3DSLeft'>
                    <div className="boxWelcome Tech">Satellites</div>
                    <Title estilo="3D" text={titulo} />
                    <ul className='M3DSul'>
                        {atributosTitle.map((title, index) => (
                            <li className='M3DSli' key={index}>
                            <b>{title}: </b>
                            <span>{atributos[index]}</span>
                            </li> 
                        ))}
                    </ul>
                </div>
                <div className='M3DSRight'>
                    <div className='container3D'>
                        <Modelo3D modelo={modelo} luzD={7}/>
                    </div>  
                </div>
            </div>
        </section>
  );
}
export default React.memo(Modelo3DSection);