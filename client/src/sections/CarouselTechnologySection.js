import React, { useState, useEffect } from 'react';
import '../styles/Modelo3DSection.css';
import '../styles/Welcome.css';
import Title from '../components/Title';
import CarouselTechnology from '../components/CarouselTechnology';
import data from '../sections/data';

/**
 * @function CarouselTechnologySection
 * @category Sections
 * @desc Componente para mostrar una sección de satelites con atributos en formato de carrusel.
 * @param {string} props.id - ID del componente.
 * @returns {JSX.Element} Componente CarouselNoticia.
 */

function CarouselTechnologySection({id}) {
  const [atributes, setAtributes] = useState([]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [changedDataIndex, setChangedDataIndex] = useState(-1);

  const atributesTitle = [
    'Platform',
    'Weight',
    'Size closed',
    'Size deployed',
    'Mission`s Name',
    'Launched',
    'Spacecraft'
  ];

  useEffect(() => {
    setAtributes(data);
  }, []);

  const handleSlideChange = (index) => {
    if (index !== activeSlideIndex) {
      setChangedDataIndex(index);
      setTimeout(() => {
        setChangedDataIndex(-1);
      }, 300);
    }
    setActiveSlideIndex(index);
  };

  return (
    <section className='M3DSSection' id={id}>
      <div className='M3DSContainer'>
        <div className={`M3DSLeft ${changedDataIndex === activeSlideIndex ? 'animacion-cambio-datos' : ''}`}>
          <div className="boxWelcome Tech">Satellites</div>
          <Title estilo={`3D ${changedDataIndex === activeSlideIndex ? 'animacion-cambio-datos' : ''}`} text={atributes[activeSlideIndex]?.title} />
          <ul className='M3DSul'>
            {atributesTitle.map((title, index) => (
              <li className={`M3DSli ${changedDataIndex === activeSlideIndex ? 'animacion-cambio-datos' : ''}`} key={index}>
                <b>{title}: </b>
                <span>{atributes[activeSlideIndex]?.description[index]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='M3DSRight'>
          <CarouselTechnology activeSlide={activeSlideIndex} slides={data} onSlideChange={handleSlideChange} />
        </div>
      </div>
    </section>
  );
}

export default React.memo(CarouselTechnologySection);
