import Title from '../components/Title';
import { useEffect, useState } from 'react';
import { getRuta } from '../functions/dbFunctionalities';
/**
 * @function Investors
 * @desc Componente funcional para la sección de inversores.
 * @category Sections
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.id - Identificador único del componente.
 * @returns {JSX.Element}
 */
export default function Investors({id}) {
  const [img, setImg] = useState();
  const [img1, setImg1] = useState();
  useEffect(()=>{
    getRuta('image 20.webp').then((data)=>{
      setImg(data);
    });
    getRuta('image 21.webp').then((data)=>{
      setImg1(data);
    });
  },[]);
  return (
    <div id={id}>
      <Title estilo="title left investors" text="Investors"/>
      <div style={{margin: '5% 10% 10% 10%'}}>
        <div className='cardGridInvestors'>
          {/* Primera tarjeta de inversor */}
          <div className='cardInvestors'>
            <img src={img} />
          </div>
          {/* Segunda tarjeta de inversor */}
          <div className='cardInvestors' >
            <img src={img1} />
            
          </div>
        </div>
      </div>
    </div>
  );
};
