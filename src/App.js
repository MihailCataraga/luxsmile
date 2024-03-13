import React, { Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';
// import Acasa from './pages/Acasa';
const Acasa = React.lazy(() => import('./pages/Acasa'))
const DespreNoi = React.lazy(() => import('./pages/DespreNoi'))
const Echipa = React.lazy(() => import('./pages/Echipa'))
const Contacte = React.lazy(() => import('./pages/Contacte'))
const AcasaRu = React.lazy(() => import('./pages/Ru/AcasaRu'))
const DespreNoiRu = React.lazy(() => import('./pages/Ru/DespreNoiRu'))
const Parodontologie = React.lazy(() => import('./pages/Parodontologie'))
const ParodontologieRu = React.lazy(() => import('./pages/Ru/ParodontologieRu'))
const IgienaOrala = React.lazy(() => import('./pages/IgienaOrala'))
const IgienaOralaRu = React.lazy(() => import('./pages/Ru/IgienaOralaRu'))
const Implantologia = React.lazy(() => import('./pages/Implantologia'))
const ImplantologiaRu = React.lazy(() => import('./pages/Ru/ImplantologiaRu'))
const OrtodontiaDentara = React.lazy(() => import('./pages/OrtodontiaDentara'))
const OrtodontiaDentaraRu = React.lazy(() => import('./pages/Ru/OrtodontiaDentaraRu'))
const ImagisticaDentara = React.lazy(() => import('./pages/ImagisticaDentara'))
const ImagisticaDentaraRu = React.lazy(() => import('./pages/Ru/ImagisticaDentaraRu'))
const StomatologieCopii = React.lazy(() => import('./pages/StomatologieCopii'))
const StomatologieCopiiRu = React.lazy(() => import('./pages/Ru/StomatologieCopiiRu'))
const EchipaRu = React.lazy(() => import('./pages/Ru/EchipaRu'))
const Politics = React.lazy(() => import('./pages/Politics'))
const PoliticsRu = React.lazy(() => import('./pages/Ru/PoliticsRu'))
const ContacteRu = React.lazy(() => import('./pages/Ru/ContacteRu'))
const Admin = React.lazy(() => import('./pages/Admin'))
const Login = React.lazy(() => import('./pages/Login'))
// import DespreNoi from './pages/DespreNoi';
// import Echipa from './pages/Echipa';
// import Contacte from './pages/Contacte';
// import AcasaRu from './pages/Ru/AcasaRu';
// import DespreNoiRu from './pages/Ru/DespreNoiRu';
// import Parodontologie from './pages/Parodontologie';
// import ParodontologieRu from './pages/Ru/ParodontologieRu';
// import IgienaOrala from './pages/IgienaOrala';
// import IgienaOralaRu from './pages/Ru/IgienaOralaRu';
// import Implantologia from './pages/Implantologia';
// import ImplantologiaRu from './pages/Ru/ImplantologiaRu';
// import OrtodontiaDentara from './pages/OrtodontiaDentara';
// import OrtodontiaDentaraRu from './pages/Ru/OrtodontiaDentaraRu';
// import ImagisticaDentara from './pages/ImagisticaDentara';
// import ImagisticaDentaraRu from './pages/Ru/ImagisticaDentaraRu';
// import StomatologieCopii from './pages/StomatologieCopii';
// import StomatologieCopiiRu from './pages/Ru/StomatologieCopiiRu';
// import EchipaRu from './pages/Ru/EchipaRu';
// import Politics from './pages/Politics';
// import PoliticsRu from './pages/Ru/PoliticsRu';
// import ContacteRu from './pages/Ru/ContacteRu';
// import Admin from './pages/Admin';
// import Login from './pages/Login';

function App() {
  const backend = 'http://localhost:8080'
  return (
    <div className="App">
      <HashRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<Acasa backend={backend} />} />
            <Route path='/despreNoi' element={<DespreNoi />} />
            <Route path='/igienaOrala' element={<IgienaOrala />} />
            <Route path='/implantologia' element={<Implantologia />} />
            <Route path='/parodontologie' element={<Parodontologie />} />
            <Route path='/ortodontiaDentara' element={<OrtodontiaDentara />} />
            <Route path='/imagisticaDentara' element={<ImagisticaDentara />} />
            <Route path='/stomatologieCopii' element={<StomatologieCopii />} />
            <Route path='/echipa' element={<Echipa backend={backend} />} />
            <Route path='/contacte' element={<Contacte />} />
            <Route path='/politics' element={<Politics />} />
            {/* Ru pages */}
            <Route path='/ru/' element={<AcasaRu backend={backend} />} />
            <Route path='/ru/despreNoi' element={<DespreNoiRu />} />
            <Route path='/ru/igienaOrala' element={<IgienaOralaRu />} />
            <Route path='/ru/implantologia' element={<ImplantologiaRu />} />
            <Route path='/ru/parodontologie' element={<ParodontologieRu />} />
            <Route path='/ru/ortodontiaDentara' element={<OrtodontiaDentaraRu />} />
            <Route path='/ru/imagisticaDentara' element={<ImagisticaDentaraRu />} />
            <Route path='/ru/stomatologieCopii' element={<StomatologieCopiiRu />} />
            <Route path='/ru/echipa' element={<EchipaRu backend={backend} />} />
            <Route path='/ru/contacte' element={<ContacteRu />} />
            <Route path='/ru/politics' element={<PoliticsRu />} />
            {/* Admin */}
            <Route path='/login' element={<Login backend={backend} />} />
            <Route path='/admin' element={<Admin backend={backend} />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
