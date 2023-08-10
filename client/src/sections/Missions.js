import React from 'react';
import ReactPlayer from 'react-player'
import '../styles/Missions.css'
import Title from "../components/Title";
import Button from "../components/Button"

/**
 * @function Missions
 * @desc Componente funcional para mostrar las misiones de la empresa.
 * @category Sections
 * @param {Object} props - Propiedades del componente.
 * @param {function} props.link - Función para manejar el evento de clic en los botones de misión.
 * @returns {JSX.Element}
 */
export default function Missions({link}) { 

  return (
    <div className="Missions">
        <Title estilo="Investors" text="Our missions"/>
        <div className="MissionsVideoWrapper">
            <ReactPlayer 
            className="MissionsVideo" 
            url="https://youtu.be/2J6s5HJwFn0" 
            width="1000px"
            height="563px"
            playing/>
            <Button  estilo="MissionsA" text="MDQubeSAT-1" clickFunction={()=>{link("MissionsA")}}/>
            <Button  estilo="MissionsB"text="MDQSAT 1 A & B" clickFunction={()=>{link("MissionsB")}}/>
        </div>
    </div>
  );
}
