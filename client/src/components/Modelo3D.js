import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Función que renderiza un modelo en un componente 3D y aplica rotación a través del tiempo.
 *
 * @function
 * @desc Función para renderizar un modelo en un componente 3D y aplicar rotación.
 * @param {function} modeloARenderizar Función que retorna el modelo a renderizar
 * @param {number} velocidadARenderizar Velocidad de rotación del modelo
 * @returns {JSX.Element} Componente de modelo 3D con rotación
 */
function ModeloRender({ modeloARenderizar, velocidadARenderizar }) {
  const ref = useRef();
  
  useFrame((state, delta) => (ref.current.rotation.y += delta * velocidadARenderizar));

  return (
    <>
      <mesh ref={ref} scale={5} position={[0, 0, 0]}>
        {modeloARenderizar()}
      </mesh>
    </>
  );
}

/**
 * Componente que muestra un modelo 3D renderizado en un canvas.
 *
 * @function Modelo3D
 * @desc Componente para mostrar un modelo 3D renderizado en un canvas con iluminación.
 * @category Components
 * @param {function} modelo Función que retorna el modelo a renderizar
 * @param {number} luzD Intensidad de la luz direccional
 * @param {number} alturaModelo Altura del componente de renderizado del modelo
 * @param {number} velocidadModelo Velocidad de rotación del modelo
 * @returns {JSX.Element} Componente que muestra el modelo 3D renderizado
 */
function Modelo3D ({ modelo , luzD, alturaModelo, velocidadModelo}) {
  return (
    <Canvas
      camera={{ position: [15, 15, 15], fov: 30 }}
      className='canvasModelo3D'
      style={{ width: 'auto', height: `${alturaModelo}px`}}
    >
      <ambientLight color={'#fff'} intensity={0} position={[15, 15, 15]} />
      <directionalLight color={'#fff'} intensity={luzD} position={[15, 15, 15]} />
      <ModeloRender modeloARenderizar={modelo} velocidadARenderizar={velocidadModelo}/>
    </Canvas>
  );
}

/**
 * @desc Propiedades esperadas para el componente Modelo3D.
 *
 * @typedef {Object} Modelo3DProps
 * @property {function} modelo Función que retorna el modelo a renderizar
 */

/**
 * @desc Componente que muestra un modelo 3D renderizado en un canvas.
 *
 * @function
 * 
 * @param {Modelo3DProps} props Propiedades para el componente Modelo3D
 * @returns {JSX.Element} Componente que muestra el modelo 3D renderizado
 */
const Modelo3DComponent = ({ modelo, luzD, alturaModelo, velocidadModelo }) => (
  <Modelo3D modelo={modelo} luzD={luzD} alturaModelo={alturaModelo} velocidadModelo={velocidadModelo} />
);

Modelo3DComponent.propTypes = {
  modelo: PropTypes.func.isRequired,
  luzD: PropTypes.number.isRequired,
  alturaModelo: PropTypes.number.isRequired,
  velocidadModelo: PropTypes.number.isRequired,
};

export default React.memo(Modelo3DComponent);

