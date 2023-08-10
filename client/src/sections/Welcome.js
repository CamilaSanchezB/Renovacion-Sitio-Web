import '../styles/Welcome.css';
import Title from '../components/Title'
import Button from '../components/Button';
import Typewriter from 'typewriter-effect';
import '../styles/Typewritter.css'

/**
 * @function Welcome
 * @desc Componente funcional que muestra la sección de bienvenida en la página de inicio.
 * @category Sections
 * @returns {JSX.Element}
 */
export default function Welcome(){
  return(
    <div className="Welcome">
        <div className='welcomeContainerLanding'>
          <div className='leftColumnWelcomeLanding'>
            <div className='boxWelcome'>Satellite technology</div>
            <Title text={'We are Innova Space,'} estilo={"Welcome"}/>
            <div>
              <Typewriter
                options={{
                  strings: ['we connect remote areas.', 'we develop small satellites.', 'we design the future.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <Button estilo="Welcome" text="Find out more"/>
          </div>
        </div>
    </div>
    );
}
