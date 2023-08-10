import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Wave from '../components/Wave';
import '../styles/LastMission.css'

/**
 * @function LastMission
 * @desc Componente funcional para mostrar la última misión.
 * @category Sections
 * @param {Object} props - Propiedades del componente.
 * @param {Object[]} props.info - Información de la última misión.
 * @param {string} props.info.title - Título de la última misión.
 * @param {string} props.info.Weigth - Peso de la última misión.
 * @param {string} props.info.Size - Tamaño de la última misión.
 * @param {string} props.info.Sats - Sats de la ùltima misiòn.
 * @param {string} props.info.paragraph - Párrafo de descripción de la última misión.
 * @param {string} props.info.image - Ruta de la imagen de la última misión.
 * @returns {JSX.Element}
 */
export default function LastMission ({ info }) {
    return (
        <div className='elementContainer'>
            <div className="WaveWrapper">
                <Wave estilo={"BlackTop"}/>
            </div>
            <div className="elementSection">
                <div className="elementText">
                <h1 className='elementTitle'>{info[0].title}</h1>
                <div className="cardGridCarouselHome" estilo="CarouselHome">
                    <Card estilo="CarouselHome" title={'WEIGHT'} text={info[0].Weigth}/>
                    <Card estilo="CarouselHome" title={'SIZE'} text={info[0].Size}/>
                    <Card estilo="CarouselHome" title={'SATS'} text={info[0].Sats}/>
                </div>
                <p className='paragraphCarousel'>
                    {info[0].paragraph}
                </p>
                <Button estilo="Welcome" text="Find out more"/>
                </div>
                <div className="elementImage">
                    <img src={info[0].image} alt={info[0].title} />
                </div>
            </div>
            <div className="WaveWrapper">
                <Wave estilo={"BlackBottom"}/>
            </div>
        </div>
    );
};