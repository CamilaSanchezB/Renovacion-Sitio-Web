import React, {useRef, useState, useEffect}from 'react';
import '../styles/SectionTemplate.css';
import DefaultCard from '../components/DefaultCard';
import Title from '../components/Title';
import {getRuta} from '../functions/dbFunctionalities'
import Wave from '../components/Wave';
/**
 * @function ManagmentTeam
 * @category Sections
 * @param {Object} props - Propiedades del componente.
 * @param {Object[]} props.elements - Elementos del equipo directivo a mostrar.
 * @param {string} props.title - Título de la sección.
 * @param {boolean} props.margen - Indica si se debe aplicar un margen superior adicional.
 * @param {string} props.id - ID del componente.
 * @param {string} props.titleDivision - Título de la división del equipo directivo.
 * @returns {JSX.Element}
 */
export default React.memo(
  function ManagmentTeam({elements, title, margen, id, titleDivision,}){
    const elementContainerRef = useRef(null);
    return (
      <section className={!margen ? 'sectiontemplateSection' : 'sectiontemplateSection margenMedianoSuperior'} style={{
        background: 'var(--colorgradienteiii, conic-gradient(from -57deg at 68.89% 46.00%, #070A0F 0deg, #1F1D82 120.00000357627869deg, #1DB7E6 240.00000715255737deg, #070A0F 310.8970355987549deg))'
      }}>
        <div style={{backdropFilter: 'blur(25px)', width: '100%', height: '100%', paddingBottom: '2em'}}>
          <div className='sectiontemplateWrap'>
            <Title text={title} estilo={'Team divisionTop'}/>
            <Title text={titleDivision} estilo={'Team division'}/>
            <div className={!margen ? 'margenMedianoSuperior':''} id={id}>
              <div className="sectiontemplateContainer" ref={elementContainerRef} > 
                {elements.map((element, index) => (
                  <DefaultCard
                    key={index}
                    title={element.title}
                    text={element.text}
                    image={element.image}
                  />
                ))}
              </div>
            </div>  
          </div>
          <div className='waveWrapper teamWave'>
            <Wave estilo="BlackBottom"/>
          </div>
        </div>
      </section>
    );
  }
);
