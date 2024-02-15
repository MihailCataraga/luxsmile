import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Img from '../assets/img/implantologie.png';

export default function Implantologia() {
  return (
    <div className='service'>
        <Navbar link={'/implantologia'} />
        <main>
            <div className='img'>
                <img src={Img} alt='Img' />
            </div>
            <div className='info'>
                <h1>Implantologie</h1>
                <p>Un implant dentar este cea mai moderna metoda de a inlocui un dinte pierdut sau afectat irecuperabil. Aceasta procedura se face chirurgical, iar plasarea implantului dentar se face in os.</p>
                <p>Interventia este total atraumatica si nedureroasa, este asemanatoare unei banale extractii dentare (totul se realizeaza sub anestezie locala). Dupa manopera de inserare a unui implant dentar in os urmeaza o perioada de vindecare si biointegrare a acestuia, perioada care variaza intre 3-6 luni. Are loc apoi redescoperirea implantului, plasarea unui bont protetic si apoi refacerea coronara (coroana ceramica pe implant).</p>
                <p>Un dinte restaurat complet consta din trei parti: implant dentar, bont protetic si coroana pe implant.</p>
            </div>
        </main>
        <Footer />
    </div>
  )
}
