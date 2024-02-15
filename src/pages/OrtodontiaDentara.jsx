import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Img from '../assets/img/ortodontie.png';

export default function OrtodontiaDentara() {
  return (
    <div className='service'>
        <Navbar link={'/ortodontiaDentara'} />
        <main>
            <div className='img'>
                <img src={Img} alt='Img' />
            </div>
            <div className='info'>
                <h1>Ortodontie dentară</h1>
                <p>Ortodonția – este un compartiment relativ tânăr al stomatologiei, însă rădăcinile sale se trag din timpurile străvechi. Dezvoltându-se într-un ritm dinamic ortodonția din ce în ce mai mult ocupă un loc de sine stătător în domeniul medicinii stomatologice. Ortodonția studiază cauzele apariției și modelele de dezvoltare a malocluziilor, elaborează metode de diagnostică, metode de prevenție și tratament ale anomaliilor poziției dinților, formei arcadei dentare, ocluziei. Ortodonția se ocupă cu monitorizarea dezvoltării corecte și armonioase ale maxilarelor, normalizează funcțiile sistemului dentar, înlătură problemele estetice ale zâmbetului și feței, astfel având influență asupra dezvoltării organismului în întregime.</p>
            </div>
        </main>
        <Footer />
    </div>
  )
}
