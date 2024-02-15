import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Img from '../assets/img/stomatologieCopii.png';

export default function StomatologieCopii() {
  return (
    <div className='service'>
        <Navbar link={'/stomatologieCopii'} />
        <main>
            <div className='img'>
                <img src={Img} alt='Img' />
            </div>
            <div className='info'>
                <h1>Stomatologie copii</h1>
                <p>Pedodonția este ramura medicală care se ocupă cu diagnosticul și tratamentul afecțiunilor stomatologice la copii. Dentiția copilului se formează încă dinaintea nașterii. Cel mai devreme la 4 luni, primii dinți de lapte care erup prin gingiile pe arcada inferioară a gurii, sunt incisivii centrali urmați îndeaproape de incisivii din partea superioară a cavității bucale. Deși cei 20 de dinți de lapte apar până la vârsta de 3 ani, ordinea în care ei apar variază.</p>
                <p>Dinții permanenți apar în jurul vârstei de 6 ani, începând cu molarii și incisivii din partea inferioară a cavității bucale. Acest proces continuă până în jurul vârstei de 21 de ani. Adulții au 28 de dinți permanenți sau pot ajunge până la 32 incluzând măseaua de minte.</p>
            </div>
        </main>
        <Footer />
    </div>
  )
}