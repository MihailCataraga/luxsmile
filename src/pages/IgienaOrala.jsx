import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Img from '../assets/img/igienaOrala.png';

export default function IgienaOrala() {
  return (
    <div className='service'>
        <Navbar link={'/igienaOrala'} />
        <main>
            <div className='img'>
                <img src={Img} alt='Img' />
            </div>
            <div className='info'>
                <h1>Igiena Orala</h1>
                <p>Detartrajul este o procedură stomatologică profilactică prin care se îndepărtează tartrul și placa dentară formate pe suprafața supragingivală – smalț, respectiv subgingivală – cement al dinților naturali sau artificiali. Tartrul dentar supragingival este și cel mai întâlnit; acesta este la început incolor, apoi capătă o nuanță maronie și dă un aspect inestetic danturii, totodată producând halena și cariile.</p>
                <p>Tartrul subgingival este mai dur și mai închis la culoare, iar în timp își mărește volumul și desprinde gingia de pe dinte, producând un mediu prielnic dezvoltării bacteriilor.</p>
                <p>Placa bacteriană reprezintă reziduurile alimentare și bacteriile ce se formează pe dinte imediat după masă. Aceasta substanță este incoloră și lipicioasă, însă dacă nu este îndepărtată prin periaj, în timp, se transformă în tartru sau piatră – un strat dur incolor sau de culoare cenușie, gălbuie.</p>
            </div>
        </main>
        <Footer />
    </div>
  )
}
