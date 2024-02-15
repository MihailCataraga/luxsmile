import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DespreNoiImg from '../assets/img/despreNoi.png'
import Figure from '../assets/img/figure.png'

export default function DespreNoi() {
  return (
    <div className='despreNoi'>
      <Navbar link={'/despreNoi'} />
      <main>
        <div className='left'>
          <img id='big' src={DespreNoiImg} alt='Img' />
          <img id='smoll' src={Figure} alt='Img' />
        </div>
        <div className='right'>
          <h1>Despre noi</h1>
          <p className='first'>Clinica Stomatologica LuxSmile imbina experienta medicilor stomatologi specializati in toate domeniile stomatologiei moderne cu dotarile de ultima generatie ale clinicii. Intregul personal al clinicii are rolul de a respecta dorintele pacientilor intr-un climat de confort si siguranta.</p>
          <p>Clinica este dotata cu unituri dentara de ultima generatie care asigura eficienta tratamentului stomatologic si un confort sporit al pacientului, sistemul de scanare digitala intraorala TRIOS 3SHAPE folosit in tratamentul ortodontic si protetic (suntem printre putinele clinici din Chisinau care au acest aparat ), micromotorul endodontic RECIPROC folosit in tratamentele endodontice, care, printr-o miscare de reciprocitate prepara usor, sigur si rapid canalele radiculare, laserul folosit cu succes in tratamentele parodontale la pacientii cu boala parodontala (non-chirurgical si minim invaziv si cu efect bactericid mult mai eficient). Beneficiem de asemenea de un aparat de radiologie digitala intraorala (folosim cel mai modern sistem de captare a imaginii radiologice Diagora Soredex).</p>
          <p>In conditii de maxima siguranta si in prezenta unui medic specialist ATI efectuam cu succes tratamente stomatologice prin analgosedare la pacientii foarte anxiosi sau la copiii la care colaborarea si tratamentul clasic ar fi dificil de realizat.</p>
          <p>Folosim cele mai noi instrumente si materiale pentru realizarea unor tratamente de calitate.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
