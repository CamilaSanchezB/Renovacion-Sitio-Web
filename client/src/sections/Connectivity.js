import "../styles/Connectivity.css"
import React, { useState, useEffect} from 'react';
import { getRuta } from '../functions/dbFunctionalities';
import Title from "../components/Title"
import Card from "../components/Card";
import Wave from '../components/Wave';
import CarouselWorks from './CarouselWorks'
import  '../styles/Wave.css';

/**
 * @function Connectivity
 * @category Sections
 * @desc Componente de la sección de conectividad.
 * @returns {JSX.Element}
 */
const Connectivity = () => {
  const [works, setworks] = useState('');
  const [background, setBackground] = useState('');
  const [RocketIcon, setRocketIcon] = useState('');
  const [TargetIcon, setTargetIcon] = useState('');
  const [LazurriIcon, setLazurriIcon] = useState('');

  /**
   * @effect
   * @desc Carga las imágenes necesarias utilizando la función `getRuta`.
   */
  useEffect(() => {
    getRuta('works.webp').then((data) => {
      setworks(data);
    });
    getRuta('fondo.webp').then((data) => {
      setBackground(data);
    });
    getRuta('rocketIcon.webp').then((data) => {
      setRocketIcon(data);
    });
    getRuta('targetIcon.webp').then((data) => {
      setTargetIcon(data);
    });
    getRuta('LazurriIcon.webp').then((data) => {
      setLazurriIcon(data);
    });
  },[]);
  
  return (
    <div className="backgroundConnectivity" style={{ backgroundImage: `url(${background})` }}>
      <div className="WaveWrapper">
        <Wave estilo="FondoBottom"/>
      </div>
      <div className="Connectivity">
        <div className='containerConnectivity'>
            <Title estilo="Connectivity" text="We take global connectivity, " anothertext="to the next level" />
        </div>
        <div className='containerConnectivity'>
          <p className="connectivityParagraph" >Innova Space provides low-bandwith sattelite connectivity using small satellites in low orbit. IoT devices are connected thanks to our low cost global coverage constellation service, providing:</p>
        </div>
        <div className="cardGridConnectivity" estilo="Connectivity">
          <Card estilo="Connectivity" src={LazurriIcon} title="ACCESIBILITY" text="We offer you access to the most economical turnkey space, drastically lowering satellite costs."/>
          <Card estilo="Connectivity" src={RocketIcon} title="INNOVATION" text="Our R+D team designs and delops a disruptive platform that enables continue innovation."/>
          <Card estilo="Connectivity" src={TargetIcon} title="EFFECTIVENESS" text="Innova Space provides a highly secure, bi-directional connection to any IOT device on Earth."/>
        </div>
      </div>
      <div className="Works">
        <Title text="How it works? " anothertext="It is simple." estilo="Works left m10" />
        <div className="worksWrapper">
          <CarouselWorks CardInit={0}/>
        </div>
      </div>
    </div>
  );
}
export default React.memo(Connectivity);
