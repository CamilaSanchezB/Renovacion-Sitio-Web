import React, {useEffect, useRef, useState}from 'react';
import '../styles/SectionTemplate.css';
import Title from '../components/Title';
import Button from '../components/Button'
import { getRuta } from '../functions/dbFunctionalities';

/**
 * @function Partners
 * @desc Componente funcional para mostrar la sección de Recognitions con círculos e imágenes.
 * @category Sections
 * @returns {JSX.Element}
 */
export default React.memo(
    function Recognitions({elements, title, margen, id, titleDivision,}){
        const [img, setImg] = useState();
        const [img1, setImg1] = useState();
        useEffect(()=>{
            getRuta('imgGrid1.webp').then((data)=>{
                setImg(data);
            });
            getRuta('imgGrid2.webp').then((data)=>{
                setImg1(data);
            });
        },[]);
      return (
        <section className={'sectiontemplateSection'} >
          <div className='sectiontemplateWrap'>
            <Title text={title} estilo={'Team left divisionTop'}/>
            <Title text={titleDivision} estilo={'Team left division'}/>
            <div className='RecognitionsCircles' id={id}>
                {elements.map((element, index) => (
                    <img key={index} src={element.image} width={'170px'} height={'170px'}/>
                ))}
            </div>
            <div className='containerCardsRecognitions'>
                <div className='cardRecognitions'>
                    <img src={img1} />
                    <div className='cardRecognitionsRight'>
                        <p className='RecognitionsText'>
                            Via Satellite highlights a group of startups in the smallsat arena in early funding rounds or pre-funding that may not receive much media attention.
                        </p>
                        <Button text={'Read More +'} estilo={'Recognitions'}/>
                    </div>
                </div>
                <div className='cardRecognitions'>
                    <img src={img} />
                    <div className='cardRecognitionsRight'>
                        <p className='RecognitionsText'>
                            We were one of the 7 Argentine startups selected to participate in the "Unicorns of Tomorrow" activity, within the framework of EXPO DUBAI 2020
                        </p>
                        <Button text={'Read More +'} estilo={'Recognitions'}/>
                    </div>
                </div>
            </div>
          </div>
        </section>
      );
    }
);
