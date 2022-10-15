import './App.css';
import Navbar from './components/navbar/navbar';
import Audio from './components/audio/audio';
import Video from './components/video/video';

function App() {
  return (
    <div className="App">
      <Navbar nombre="Componente Navbar con React-Bootstrap"/>
      <Audio fuente="/assets/audio/src_efecto-de-sonido-golpe.mp3"/>
      <Video />
    </div>
  );
}

export default App;
