import './App.css';
import ImagenInicio from './components/ImagenInicio';
import Cabecera from './components/Cabecera';
import Preguntas from './components/Preguntas';
import { useState, useEffect } from 'react';
import ListadoPartidas from './components/ListadoPartidas';
import GuardarPartida from './components/GuardarPartida';



function App() {

  const [mostrarPreguntas, setMostrarPreguntas] = useState(false)
 

  return (
    <div className="App">


      {!mostrarPreguntas && <Cabecera TituloPrincipal="SPORT QUIZ" />}


      {!mostrarPreguntas && <ImagenInicio setMostrarPreguntas={setMostrarPreguntas} />}


      {mostrarPreguntas && <Preguntas />}


      {!mostrarPreguntas && <ListadoPartidas />}



    </div>


  );
}

export default App;
