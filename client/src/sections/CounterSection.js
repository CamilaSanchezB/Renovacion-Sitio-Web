import Counter from '../components/Counter'
import '../styles/Counter.css';
/**
 * @function CounterSection
 * @desc Componente de la sección de contadores.
 * @category Sections
 * @param {Object[]} contadores - Un array de objetos que contiene los datos para los contadores.
 * @param {string} contadores.svg - URL del ícono SVG para el contador.
 * @param {number} contadores.cantContador - Valor numérico del contador.
 * @param {string} contadores.moneda - Moneda asociada al contador (opcional).
 * @param {string} contadores.textoContador - Texto asociado al contador.
 * @returns {JSX.Element} Elemento JSX que muestra una sección con contadores.
 */
export default function CounterSection({contadores}){
   return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className="counterWrap">
            
            {contadores.map((contador, index)=>
            <Counter
            key={index}
            svg={contador.svg} 
            value={contador.cantContador < 10000 ? contador.cantContador : contador.cantContador/1000} 
            title={contador.cantContador > 10000 ? '.000': ''} 
            text={contador.moneda !== null ? contador.moneda + ' ' + contador.textoContador : contador.textoContador}/>
            )}  
         </div>
        </div>
   );
}