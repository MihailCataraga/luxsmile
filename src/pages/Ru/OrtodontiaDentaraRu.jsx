import React from 'react';
import Img from '../../assets/img/ortodontie.png';
import Navbar from '../../components/NavbarRu';
import Footer from '../../components/FooterRu';

export default function OrtodontiaDentaraRu() {
  return (
    <div className='service'>
        <Navbar link={'/ortodontiaDentara'} />
        <main>
            <div className='img'>
                <img src={Img} alt='Img' />
            </div>
            <div className='info'>
                <h1>Стоматологическая ортодонтия</h1>
                <p>Ортодонтия – относительно молодая отрасль стоматологии, но ее корни уходят в глубокую древность. Развиваясь динамичными темпами, ортодонтия все больше занимает самостоятельное место в сфере стоматологической медицины. Ортодонтия изучает причины возникновения и закономерности развития аномалий прикуса, разрабатывает методы диагностики, методы профилактики и лечения аномалий положения зубов, формы зубной дуги, прикуса. Ортодонтия занимается контролем правильного и гармоничного развития челюстей, нормализует функции зубочелюстной системы, устраняет эстетические проблемы улыбки и лица, оказывая тем самым влияние на развитие организма в целом.</p>
            </div>
        </main>
        <Footer />
    </div>
  )
}