import Title from '../components/Title';
import Card from '../components/Card';
import { getRuta } from '../functions/dbFunctionalities';
import React, { useState, useEffect} from 'react';
import Typewriter from 'typewriter-effect';
import '../styles/Typewritter.css'
import '../styles/Applications.css';

/**
 * @function Applications
 * @category Sections
 * @desc Componente que muestra las diversas aplicaciones de la solución.
 * @returns {JSX.Element} Componente de aplicaciones.
 */
export default React.memo(
  function Applications(){
    const [ImgMining, setImgMining] = useState('');
    const [ImgDefense, setImgDefense] = useState('');
    const [ImgEnviromental, setImgEnviromental] = useState('');
    const [ImgAgriculture, setImgAgriculture] = useState('');
    const [ImgLivestock, setImgLivestock] = useState('');
    const [ImgMaritime, setImgMaritime] = useState('');
    const [ImgLogistics, setImgLogistics] = useState('');

    useEffect(() => {
      // Carga las imágenes de las aplicaciones utilizando las funciones getRuta()
      getRuta('mining.webp').then((data) => {
        setImgMining(data);
      });
      getRuta('defense.webp').then((data) => {
        setImgDefense(data);
      });
      getRuta('enviromental.webp').then((data) => {
        setImgEnviromental(data);
      });
      getRuta('agriculture.webp').then((data) => {
        setImgAgriculture(data);
      });
      getRuta('livestock.webp').then((data) => {
        setImgLivestock(data);
      });
      getRuta('maritime1.webp').then((data) => {
        setImgMaritime(data);
      });
      getRuta('logistics.webp').then((data) => {
        setImgLogistics(data);
      });
    }, []);
    return(
        <div className="Applications">
          <div className='textApplications'>
          <Title text="Our solution has multiple applications: " estilo={'Aplications'}/>
            <Typewriter
              options={{
                strings: ['Minning', 'Defense', 'Enviromental', 'Agriculture', 'Livestock', 'Maritime', 'Logistics'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
            <div className='cardGridApplications'>
                <Card text="MINING" src={ImgMining}  estilo={'Applications item1'}/>
                <Card text="DEFENSE" src={ImgDefense}  estilo={'Applications item2'}/>
                <Card text="ENVIROMENTAL" src={ImgEnviromental}  estilo={'Applications item3'}/>
                <Card text="AGRICULTURE" src={ImgAgriculture}  estilo={'Applications item4'}/>
                <Card text="LIVESTOCK" src={ImgLivestock}  estilo={'Applications item5'}/>
                <Card text="MARITIME" src={ImgMaritime}  estilo={'Applications item6'}/>
                <Card text="LOGISTICS" src={ImgLogistics}  estilo={'Applications item7'}/>
            </div>
        </div>
    );
}
)
