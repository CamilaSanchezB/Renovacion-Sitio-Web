import '../styles/FollowUs.css'
import Title from '../components/Title'

/**
 * @function FollowUs
 * @desc Componente para mostrar la sección de Follow Us.
 * @category Sections
 * @param {string} id - ID del elemento HTML que contiene la sección.
 * @returns {JSX.Element} Elemento JSX que muestra la sección de Follow Us.
 */
export default function FollowUs({id}) {
  return (
    <section className="FollowUs" id={id}>
    <div  >
      <Title estilo="Welcome" text="Follow us"/>
      <div className='FollowUsContainer'>
        <div className='FollowUsLeft' >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in arcu sagittis, ornare mi non, fermentum magna. Curabitur maximus quam id neque euismod</p>
        </div>
        <div className='FollowUsRight' >
          <img class="FollowUsImg" src="https://images.emojiterra.com/google/android-oreo/512px/2b1c.png" alt=""/>
        </div>
      </div>
    </div>
    </section>
  );
}

