import React, {useEffect} from 'react'
import '../styles/Modelo3DSection.css'
import '../styles/Welcome.css'
import Title from '../components/Title';
import MyThreeComponent from '../components/AnimacionMundo'


/**
 * @function Constellation
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
function ConstellationSection({CantSats}) {
    
    return (
        <section className='M3DSSection'>
            <div className='M3DSContainer'>
                <div className='M3DSLeft'>
                    <div className="boxWelcome Tech">Our Mission</div>
                    <Title estilo="3D" text={'Constellation Deployment'} />
                    <p>Our technology milestones steer towards to develop and launch  the first picosatellite constellation in Latin America and provide global satellite communication for IoT devices</p>
                </div>
                <div className='M3DSRight'>
                    <div className='container3D'>
                    <MyThreeComponent cantSats={CantSats}/>
                    </div>  
                </div>
            </div>
        </section>
  );
}
export default React.memo(ConstellationSection);