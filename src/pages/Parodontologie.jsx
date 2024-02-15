import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Img from '../assets/img/parodontologie.png'

export default function Parodontologie() {
  return (
    <div className='service'>
        <Navbar link={'/parodontologie'} />
        <main>
            <div className='img'>
                <img src={Img} alt='Img' />
            </div>
            <div className='info'>
                <h1>Parodontologie</h1>
                <p>Parodontologia se ocupa cu mentinerea starii de sanatate a gingiei si tesuturilor care sustin dintele in os.</p>
                <p>S-a constatat in ultima perioada aparatia unui numar alarmant de pacienti cu parodontoza, factorul determinant al bolii parodontale fiind igiena dentara precara.</p>
                <p>Evolutia bolii este intretinuta de diversi factori locali si generali favorizanti ca : tartrul, fumatul, anumite traume locale si ocluzale, factori retentivi la nivel dentar (carii netratate, lucrari protetice incorect adaptate), predispozitia ereditara, sarcina, menopauza, bolile sistemice (leucemii, anemii, SIDA), stresul psihoemotional.</p>
                <p>Prima faza a bolii parodontale este gingivita (inflamatia gingivala cu sangerare la perial sau atingere ), urmata in stadii mai avançante de parodontita (afectarea parodontiului cu retractie gingivala, resorbtie osoasa si mobilitate dentara). Tratamentul parodontal este unul de lunga durata, se incepe cu o igienizare riguroasa, se continua cu terapia de mentinere, urmata de terapie chirurgicala si regenerare osoasa daca este cazul. Folosim cu succes in cadrul clinicii laserul la pacientii cu boala parodontala (non chirurgical si minim invaziv si cu efect antibactericid mult mai eficient).</p>
            </div>
        </main>
        <Footer />
    </div>
  )
}
