import React, {useState, useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Noticias from './pages/Noticias.js'
import Home from './pages/Home'
import HomeCrud from './pages/HomeCrud'
import Multimedia from './pages/Multimedia'
import Detail from './pages/Detail';
import Creation from './pages/Creation'
import AboutUs from './pages/AboutUs'
import { getContadores, fetchDataNoticiasWMultimedia, fetchDataMultimedia, getRuta, fetchDataLatestNews, getAnioInicio, getCantAnios,getContenidoRoadmap } from './functions/dbFunctionalities';
import HowItWorks from './pages/HowItWorks';
import Technology from './pages/Technology';
import News from './pages/News';
import EditorRoadmap from './pages/EditorRoadmap';
import Newsletter from './pages/Newsletter'
import LoginPage from './pages/LoginPage'
import Contador from './pages/EditorContador';
import SignUpPage from './pages/SignUpPage';
import SectionMundo from './sections/SectionMundo';


function App() {
  //variable hook use state que guardara las noticias
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  useEffect(() => {
    if(token !== "" && token !== localStorage.getItem('tokenKey')){
      localStorage.setItem('tokenKey', token)
    }
    if(username !== "" && username !== localStorage.getItem('userKey')){
      localStorage.setItem('userKey', username)
    }
  }, [token, username]);
  
  const [nextHop, setNextHop] = useState("/Editor");
  const [noticias, setNoticias] = useState([]);
  const [multimedia, setMultimedia] = useState([]);
  const [eliminarPos, setEliminarPos] = useState(undefined);
  const [latestNews, setLatestNews] = useState([]);
  const [anioInicio, setAnioInicio] = useState(0);
  const [cantAnios, setCantAnios] = useState(0);
  const [contenido, setContenido] = useState([]);
  const [contadores, setContadores] = useState([]);
    //hook useEffect renderiza las noticias y permite actualizar en tiempo real las modificaciones
  const nombresImg = ['image (1).webp', 'image (2).webp', 'image (3).webp', 'image (4).webp'];
  const [imagesMT, setImagesMT] = useState([]);
  const nombresImgR = ['latam100.webp', 'unicorn.webp', 'naves.webp', 'foundationfuture.webp', 'hellotomorrow.webp', 'santander.webp']
  const [imagesR, setImagesR] = useState([])
  useEffect(()=>{
    getContadores().then((data)=>{
      setContadores(data);
    })
    getAnioInicio().then((data)=>{
      setAnioInicio(data);
    });
    getCantAnios().then((data)=>{
      setCantAnios(data);
    });
    getContenidoRoadmap().then((data)=>{
      setContenido(
        data.map((value)=>{
          return (value.contenido)
        })
      );
    });
    async function asignarDatos(){
      let result = await fetchDataNoticiasWMultimedia();
      setNoticias(result);
      let result1 = await fetchDataLatestNews();
      setLatestNews(result1);
      let result2 = await fetchDataMultimedia();
      setMultimedia(result2);
      const promisesMT = nombresImg.map((nombre) => {
        return getRuta(nombre);
      });
      try {
        const data = await Promise.all(promisesMT);
        setImagesMT(data);
      } catch (error) {
        console.error('Error fetching image data:', error);
      }

      const promisesR = nombresImgR.map((nombre) => {
        return getRuta(nombre);
      });
      try {
        const data = await Promise.all(promisesR);
        setImagesR(data);
      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    }
    asignarDatos(); 
    
    },[])
   
    const managmentElements = [
      {title: 'Alejandro Cordero', text:'CEO & Founder', image: imagesMT[0]},
      {title: 'Elyka Abello', text:'CTO', image: imagesMT[1]},
      {title: 'Ignacio Pintos', text:'SMA Manager', image: imagesMT[2]},
      {title: 'Oliver Marcano', text:'Program Manager', image: imagesMT[3]}
    ]
    const recognitionsElements = [
      {title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, totam dolorem.', image: imagesR[0]},
      {title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, totam dolorem.', image: imagesR[1]},
      {title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, totam dolorem.', image: imagesR[2]},
      {title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, totam dolorem.', image: imagesR[3]},
      {title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, totam dolorem.', image: imagesR[4]},
      {title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, totam dolorem.', image: imagesR[5]},
      
    ]
  return (
    <>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home noticias={latestNews} contadores={contadores}/>} />
          <Route path="/AboutUs" element={<AboutUs managmentElements={managmentElements} recognitionsElements={recognitionsElements} anioInicio={anioInicio} cantAnios={cantAnios} contenido={contenido}/>} />
          <Route path="/HowItWorks" element={<HowItWorks />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/News" element={<News latestNews={latestNews}/>} />
          <Route path='/Animacion' element={<SectionMundo />} />
          <Route path='/Login' element={<LoginPage setToken={setToken} nextHop={nextHop} token={token} setUsername={setUsername}/>} />
          <Route path="/Editor" element={<HomeCrud noticias={noticias} token={token} setNextHop={setNextHop} nombreUsuario={username} setNombreUsuario={setUsername}/>} />
          <Route path="/Editor/Registro" element={<SignUpPage username={username} token={token} setNextHop={setNextHop} noticias={noticias}/>}/>
          <Route path="/Editor/Noticias" element={<Noticias setNextHop={setNextHop} token={token} noticias={noticias} setNoticias={setNoticias}  eliminarPos={eliminarPos} setEliminarPos={setEliminarPos}/>} />
          <Route path="/Editor/Noticias/Detail/:id" element={<Detail setNextHop={setNextHop} token={token}  noticias={noticias} multimedia={multimedia} setEliminarPos={setEliminarPos}/>} />
          <Route path="/Editor/Noticias/Crear" element={<Creation setNextHop={setNextHop} token={token} multimedia={multimedia} noticias={noticias}/>} />
          <Route path="/Editor/Multimedia" element={<Multimedia setNextHop={setNextHop} token={token} multimedia={multimedia} noticias={noticias} setMultimedia={setMultimedia}/>} />
          <Route path="/Editor/Roadmap" element={<EditorRoadmap setNextHop={setNextHop}  token={token} noticias={noticias} anioInicio={anioInicio} cantAnios={cantAnios} contenido={contenido} setAnioInicio={setAnioInicio} setCantAnios={setCantAnios} setContenido={setContenido} multimedia={multimedia}/>}/>
          <Route path="/Editor/Newsletter" element={<Newsletter setNextHop={setNextHop} token={token} noticias={noticias}/>} />
          <Route path="/Editor/Contador" element={<Contador setNextHop={setNextHop} token={token} noticias={noticias} contadores={contadores} setContadores={setContadores}/> } />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;