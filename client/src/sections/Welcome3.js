import '../styles/Welcome.css';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

/**
 * @function Welcome3
 * @desc Componente funcional que muestra una sección de bienvenida con una imagen y un botón para seleccionar una industria.
 * @category Sections
 * @returns {JSX.Element}
 */
export default function Welcome3(){
  return(
    <div className="Welcome3">
        <div className='welcomeContainer'>
          <div className='leftColumnWelcome'>
            <div className='paragraphWelcome'>
            <p>Our constellation of low cost satellites provides global connectivity for IoT devices in remote areas.</p>
            </div>
            <Button estilo="Welcome3" text={<>Select your industry <FontAwesomeIcon icon={faArrowRight} style={{marginLeft: '.5em'}}/></>}/>
          </div>
          <div className='rightColumnWelcome'>
            <img className='imgWelcome3' src="https://images.emojiterra.com/google/android-oreo/512px/2b1c.png" alt="" />
          </div>
        </div> 
    </div>
    );
}
