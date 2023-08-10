import '../styles/Connectivity.css'
import '../styles/Welcome.css'
import Title from '../components/Title'
import Card from '../components/Card'
import { getRuta } from '../functions/dbFunctionalities'
import React, {useEffect, useState} from 'react'

/**
 * @function ServicesTech
 * @desc Componente funcional que muestra la sección "ServicesTech" con información sobre los servicios técnicos.
 * @category Sections
 * @returns {JSX.Element}
 */
export default function ServicesTech(){
    const [iotIcon, setIotIcon] = useState('iot.png');
    const [consultingIcon, setConsultingIcon] = useState('consulting.png');
    const [designIcon, setDesignIcon] = useState('design.png');
    const [aerospaceIcon, setAerospaceIcon] = useState('aerospace.png');
    
  useEffect(() => {
    getRuta('iot.webp').then((data) => {
        setIotIcon(data);
    });
    getRuta('consulting.webp').then((data) => {
      setConsultingIcon(data);
    });
    getRuta('design.webp').then((data) => {
      setDesignIcon(data);
    });
    getRuta('aerospace.webp').then((data) => {
        setAerospaceIcon(data);
      });
  },[]);
    return(
        <section style={{paddingBottom: '10%', paddingTop: '7%'}}>
            <div style={{marginLeft: '10%'}}>
                <div className='boxWelcome Tech'>R + D Team</div>
                <Title  text={'Our services'} estilo={'title left Tech'}/>
            </div>
            <div className="cardGridConnectivity Tech" estilo="Connectivity">
            <Card estilo="Connectivity Tech" src={iotIcon} title={<>IoT <span style={{display: 'block'}}>Solutions</span></>} />
            <Card estilo="Connectivity Tech" src={consultingIcon} title={<>Consulting <span style={{display: 'block'}}>Services</span></>} />
            <Card estilo="Connectivity Tech" src={designIcon} title={<>Design & <span style={{display: 'block'}}>Develop</span></>}/>
            <Card estilo="Connectivity Tech" src={aerospaceIcon} title={<>Aerospace <span style={{display: 'block'}}>Training</span></>}/>
            </div>
        </section>
    )
}