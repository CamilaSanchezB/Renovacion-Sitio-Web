import '../styles/History.css';
import Title from '../components/Title';
import { getRoadmap, getRuta } from '../functions/dbFunctionalities';
import { useEffect, useState } from 'react';
import Year from '../components/Year';
import '../styles/Year.css'
import Slider from '../sections/Slider';

/**
 * @function History
 * @desc Componente funcional para la sección de historia.
 * @category Sections
 * @param {Object} props - Propiedades del componente.
 * @param {number} props.cantidad - Cantidad de años de historia a mostrar.
 * @param {number} props.anioInicio - Año de inicio para generar los años de historia.
 * @param {Array} props.contenido - Array de contenido de texto correspondiente a cada año de historia.
 * @param {string} props.id - Identificador único del componente.
 * @returns {JSX.Element}
 */
export default function History({ cantidad, anioInicio, contenido, id}) {
  const [background, setBackground] = useState('');
  const years = [];
  for (let i = 0; i < cantidad; i++) {
    const anio = anioInicio + i;
    years.push(<Year key={i} value={anio} text={contenido[i]}/>);
  }

  useEffect(()=>{
    getRuta('fondo.webp').then((data)=>{
      setBackground(data);//
    });
  },[]);
  const [dataSlider, setDataSlider] = useState([]);
  useEffect(() => {
    getRoadmap().then((data) => {
      setDataSlider((prevDataSlider) => {
        return data.map((datita) => {
          if (datita.id === 1) {
            return { ...prevDataSlider, id: datita.id, bgColor: "transparent", title: datita.title, image: datita.image, description: datita.description };
          } else {
            return { ...prevDataSlider, id: datita.id, bgColor: "#FFFFFF90", title: datita.title, image: datita.image, description: datita.description };
          }
        });
      });
    });
  },[]); 
  return (
    <div className="History" id={id} style={{ backgroundImage: `url(${background})` }}>
      <div>
        <Title text="How did it started? " anothertext="Know our history" estilo="SectionHistory" />
      </div>
      <Slider data={dataSlider} activeSlide={1}/>
    </div>
    
  );
}

