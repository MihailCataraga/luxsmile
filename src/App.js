import { HashRouter, Route, Routes } from 'react-router-dom';
import Acasa from './pages/Acasa';
import DespreNoi from './pages/DespreNoi';
import Echipa from './pages/Echipa';
import Contacte from './pages/Contacte';
import AcasaRu from './pages/Ru/AcasaRu';
import DespreNoiRu from './pages/Ru/DespreNoiRu';
import Parodontologie from './pages/Parodontologie';
import ParodontologieRu from './pages/Ru/ParodontologieRu';
import IgienaOrala from './pages/IgienaOrala';
import IgienaOralaRu from './pages/Ru/IgienaOralaRu';
import Implantologia from './pages/Implantologia';
import ImplantologiaRu from './pages/Ru/ImplantologiaRu';
import OrtodontiaDentara from './pages/OrtodontiaDentara';
import OrtodontiaDentaraRu from './pages/Ru/OrtodontiaDentaraRu';
import ImagisticaDentara from './pages/ImagisticaDentara';
import ImagisticaDentaraRu from './pages/Ru/ImagisticaDentaraRu';
import StomatologieCopii from './pages/StomatologieCopii';
import StomatologieCopiiRu from './pages/Ru/StomatologieCopiiRu';
import EchipaRu from './pages/Ru/EchipaRu';
import Politics from './pages/Politics';
import PoliticsRu from './pages/Ru/PoliticsRu';
import ContacteRu from './pages/Ru/ContacteRu';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Acasa />} />
          <Route path='/despreNoi' element={<DespreNoi />} />
          <Route path='/igienaOrala' element={<IgienaOrala />} />
          <Route path='/implantologia' element={<Implantologia />} />
          <Route path='/parodontologie' element={<Parodontologie />} />
          <Route path='/ortodontiaDentara' element={<OrtodontiaDentara />} />
          <Route path='/imagisticaDentara' element={<ImagisticaDentara />} />
          <Route path='/stomatologieCopii' element={<StomatologieCopii />} />
          <Route path='/echipa' element={<Echipa />} />
          <Route path='/contacte' element={<Contacte />} />
          <Route path='/politics' element={<Politics />} />
          {/* Ru pages */}
          <Route path='/ru/' element={<AcasaRu />} />
          <Route path='/ru/despreNoi' element={<DespreNoiRu />} />
          <Route path='/ru/igienaOrala' element={<IgienaOralaRu />} />
          <Route path='/ru/implantologia' element={<ImplantologiaRu />} />
          <Route path='/ru/parodontologie' element={<ParodontologieRu />} />
          <Route path='/ru/ortodontiaDentara' element={<OrtodontiaDentaraRu />} />
          <Route path='/ru/imagisticaDentara' element={<ImagisticaDentaraRu />} />
          <Route path='/ru/stomatologieCopii' element={<StomatologieCopiiRu />} />
          <Route path='/ru/echipa' element={<EchipaRu />} />
          <Route path='/ru/contacte' element={<ContacteRu />} />
          <Route path='/ru/politics' element={<PoliticsRu />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
