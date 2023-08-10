import Welcome2 from '../sections/Welcome2';
import CarouselTechnologySection from '../sections/CarouselTechnologySection';
import ServicesTech from '../sections/ServicesTech';
import Constellation from '../sections/Constellation';
import FooterTemplate from '../sections/FooterTemplate';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import { getContadores} from '../functions/dbFunctionalities';
import React, {useState, useEffect} from 'react';
/**
 * @function Technology
 * @category Pages
 * @desc Componente funcional que representa la sección "Technology" en la página de inicio. Muestra información sobre la tecnología utilizada, incluyendo modelos 3D de los satélites y atributos.
 * @returns {JSX.Element}
 */
export default function Technology() {     
  const [contadores, setContadores] = useState([]);
  useEffect(()=>{
    getContadores().then((data)=>{
      setContadores(data);
    })
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    );
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  },[])
 
  const getCantContadorById = (id) => {
    const contador = contadores.find(item => item.id === id);
    return contador ? contador.cantContador : null;
  };

  const cantSats = getCantContadorById(2);

  return (
    <div className='technologySection'>
      {/* Barra de navegación */}
      <Navbar/>

      {/* Sección de bienvenida */}
      <Welcome2 title={"Low-Cost connectivity now is possible in LATAM"} text={"So far we have launched five satellites in three different missions and we seek innovation in every milestone."} button={"Know more about our technology"} display={"none"} id={"Technology"}/>
      
      {/* Carousel de modelos 3D */}
      <CarouselTechnologySection id="Technology"/>

      {/* Modelo 3D de la tierra*/}
      <Constellation CantSats={cantSats}/>

      {/* Sección de servicios tecnológicos */}
      <ServicesTech/>

      {/* Plantilla de pie de página */}
      <FooterTemplate title={'Are you interested in our services & technology?'} btnText={'Contact Us'} redirectType={'smooth'}/>

      {/* Pie de página */}
      <Footer/>
    </div>
  );
}