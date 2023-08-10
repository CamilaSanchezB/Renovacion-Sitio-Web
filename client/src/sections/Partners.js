import { useState, useEffect} from 'react';
import { getRuta } from '../functions/dbFunctionalities';
import Title from '../components/Title';
import Wave from '../components/Wave';
import '../styles/Partners.css'

/**
 * @function 
 * @desc Componente funcional para mostrar la sección de Partners con imágenes de socios.
 * @category Sections
 * @returns {JSX.Element}
 */
export default function Partners() {
  const partners = ['Partner1.webp', 'Partner2.webp', 'Partner3.webp', 'Partner4.webp'];
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function asignarDatos(){
      const promises = partners.map((nombre) => {
        return getRuta(nombre);
      });
      try {
        const data = await Promise.all(promises);
        setImages(data);
      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    }
    asignarDatos();
  }, []);
  return (
    <div className="Partners">
      <div className="WaveWrapper">
        <Wave estilo={"Bottom"}/>
      </div>
      <div className='PartnersContent'>
        <div className='PartnersHead'>
          <Title estilo={"Partners"} text="Partners"/>
        </div>
        <div className='PartnersBody'>
          {images.map((element, index) => (
            <div key={index}>
              <img src={element}/>
            </div>
          ))}
        </div>
      </div>
      <div className="WaveWrapper">
        <Wave estilo={"Top"}/>
      </div>
    </div>
  );
}