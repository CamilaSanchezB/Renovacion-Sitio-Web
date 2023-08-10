import React, { useState, useEffect, useRef } from 'react';
import '../styles/AnimacionMundo.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import modelPathEarth from '../models/earth.glb';
import modelPathSat from '../models/satelite.glb';

/**
 * @function AnimacionMundo
 * @desc Componente de Three.js para visualizar modelos 3D
 * @category Components
 * @returns {JSX.Element} Componente de visualización 3D
 */

const AnimacionMundo = ({cantSat}) => {
  let cantSats= 5;
  
  const mountRef = useRef(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);
     
  useEffect(() => {
    // Declaración de variables utilizadas en el código
    let earthScene;
    let sateliteModel;
    const satelites = [];
    let axis2, axis3, axis4;

    const toRadian = (value) => {
      return value * Math.PI / 180;
    };

    // Crea un satélite clonando un modelo existente o creando una esfera si no hay modelo cargado
    function crearSatelite() {
      if (sateliteModel) {
        const satelite = sateliteModel.clone(); // Clona el modelo de satélite cargado
        satelite.scale.set(0.012, 0.012, 0.012); // Escala el satélite clonado
        return satelite;
      } else {
        const sateliteGeometry = new THREE.SphereGeometry(0.01, 8, 8); // Tamaño más pequeño para la esfera
        const sateliteMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const satelite = new THREE.Mesh(sateliteGeometry, sateliteMaterial);
        return satelite;
      }
    }

    // Configuración de Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(57.5, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 2.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const sphere1 = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), new THREE.MeshToonMaterial({ color: 0x02489e }));
    sphere1.position.set(0, 0, 0);

    const sphere2 = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 16), new THREE.MeshToonMaterial({ color: 0x433b46 }));
    sphere2.position.set(0, 0, 0);

    const sphere3 = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 16), new THREE.MeshToonMaterial({ color: 0x433b46 }));
    sphere3.position.set(0, 0, 0);

    const sphere4 = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 16), new THREE.MeshToonMaterial({ color: 0x433b46 }));
    sphere4.position.set(0, 0, 0);

    const light2 = new THREE.AmbientLight(0xffffff, 0.75);

    /* const controls = new OrbitControls(camera, renderer.domElement); */
    /* controls.update(); */

    const earthLoader = new GLTFLoader();
    const sateliteLoader = new GLTFLoader();

    Promise.all([
      new Promise((resolve, reject) => {
        earthLoader.load(modelPathEarth, function (gltf) {
          earthScene = gltf.scene;
          scene.add(earthScene);
          resolve();
        }, undefined, function (error) {
          reject(error);
          console.error(error);
        });
      }),
      new Promise((resolve, reject) => {
        sateliteLoader.load(modelPathSat, function (gltf) {
          sateliteModel = gltf.scene;
          setModelsLoaded(true);
          resolve();
        }, undefined, function (error) {
          reject(error);
          console.error(error);
        });
      })
    ]).then(() => {
      // Todos los modelos están cargados
      scene.add(sphere2, sphere3, sphere4, light2);
      crearNodos(cantSats);
      earthScene.rotation.y += toRadian(15);
      earthScene.rotation.z -= toRadian(5);
      earthScene.rotation.x -= toRadian(4);
      animate();
      renderer.render(scene, camera);
    }).catch((error) => {
      console.error('Error loading models:', error);
    });

    // Calcula la cantidad de satélites por cada nodo y posiciona los nodos
    function crearNodos(count) {
      var satelitesPorEsfera = Math.floor(count / 3);
      var remainder = count % 3;

      var longitud2 = -70;
      var longitud3 = -90;
      var longitud4 = 60;

      agregarSatelites(satelitesPorEsfera, 0, toRadian(longitud2), sphere2);
      axis2 = new THREE.Vector3(Math.sin(toRadian(longitud2)), 0, -Math.cos(toRadian(longitud2)));
      axis2.normalize();

      agregarSatelites(satelitesPorEsfera, 10, toRadian(longitud3), sphere3);
      axis3 = new THREE.Vector3(Math.sin(toRadian(longitud3)), 0, -Math.cos(toRadian(longitud3)));
      axis3.normalize();

      agregarSatelites(satelitesPorEsfera + remainder, 20, toRadian(longitud4), sphere4);
      axis4 = new THREE.Vector3(Math.sin(toRadian(longitud4)), 0, -Math.cos(toRadian(longitud4)));
      axis4.normalize();
    }

    // Agrega los satélites a sus respectivos nodos
    function agregarSatelites(count, angleLatitud, angleLongitud, esferaNodo) {
      var radius = 1.2; // Radio de los nodos

      for (let i = 0; i < count; i++) {
        const satelite = crearSatelite();
        satelites.push(satelite);
        esferaNodo.add(satelite);
        posicionSatelite(satelite, radius, (2 * Math.PI * i) / count + angleLatitud, angleLongitud);

        // Calcular la dirección hacia la Tierra desde el satélite
        const directionToEarth = new THREE.Vector3().subVectors(sphere1.position, satelite.position);
        // Alinear el satélite para que su cara inferior mire hacia la Tierra
        satelite.lookAt(satelite.position.clone().add(directionToEarth));
        // Rotar el satélite 180 grados alrededor del eje Y para ajustar la orientación
        satelite.rotation.y += Math.PI;
      }
    }

    // Setea y actualiza la posición del satélite
    function posicionSatelite(satelite, radius, angleLatitud, angleLongitud) {
      satelite.position.x = sphere1.position.x + radius * Math.cos(angleLongitud) * Math.cos(angleLatitud);
      satelite.position.y = sphere1.position.y + radius * Math.sin(angleLatitud);
      satelite.position.z = sphere1.position.z + radius * Math.sin(angleLongitud) * Math.cos(angleLatitud);
    }

    // Animación principal
    function animate() {
      requestAnimationFrame(animate);
      
      earthScene.rotation.y += toRadian(0.075);
      sphere2.rotateOnAxis(axis2, toRadian(-0.4));
      sphere3.rotateOnAxis(axis3, toRadian(-0.4));
      sphere4.rotateOnAxis(axis4, toRadian(-0.4));

      renderer.render(scene, camera);

      return;
    }
  }, []); // El arreglo de dependencias vacío asegura que el efecto se ejecute solo una vez

  return <div ref={mountRef} className='CanvasContainer'/>;
};

export default AnimacionMundo;