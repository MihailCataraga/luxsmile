import { HashRouter, Route, Routes } from 'react-router-dom';
import Acasa from './pages/Acasa';
import DespreNoi from './pages/DespreNoi';
import Servicii from './pages/Servicii';
import Echipa from './pages/Echipa';
import Contacte from './pages/Contacte';
import AcasaRu from './pages/Ru/AcasaRu';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Acasa />} />
          <Route path='/despreNoi' element={<DespreNoi />} />
          <Route path='/servicii' element={<Servicii />} />
          <Route path='/echipa' element={<Echipa />} />
          <Route path='/contacte' element={<Contacte />} />
          {/* Ru pages */}
          <Route path='/ru/' element={<AcasaRu />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
