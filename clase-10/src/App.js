import './App.css';
import Navbar from './components/navbar/navbar';
import Audio from './components/audio/audio';
import Video from './components/video/video';
import aud from './assets/audio/src_efecto-de-sonido-golpe.mp3';
import vid from './assets/video/background_video.mp4';

function App() {
  return (
    <div className="App">
      <Navbar nombre="Componente Navbar con React-Bootstrap"/>
      <Audio fuente = {aud}/>
      <Video fuente = {vid}/>
    </div>
  );
}

export default App;
