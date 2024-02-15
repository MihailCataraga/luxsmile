import React from 'react';
import Img from '../../assets/img/stomatologieCopii.png';
import Navbar from '../../components/NavbarRu';
import Footer from '../../components/FooterRu';

export default function StomatologieCopiiRu() {
  return (
    <div className='service'>
        <Navbar link={'/stomatologieCopii'} />
        <main>
            <div className='img'>
                <img src={Img} alt='Img' />
            </div>
            <div className='info'>
                <h1>Детская стоматология</h1>
                <p>Педодонтия – раздел медицины, занимающийся диагностикой и лечением стоматологических заболеваний у детей. Зубной ряд ребенка формируется еще до рождения. Уже в 4 месяца первыми молочными зубами, которые прорезываются из десен на нижней дуге рта, являются центральные резцы, за которыми следуют верхние резцы. Хотя к 3 годам появляются 20 молочных зубов, порядок их появления варьируется.</p>
                <p>Постоянные зубы появляются примерно в 6 лет, начиная с коренных зубов и резцов в нижней части полости рта. Этот процесс продолжается примерно до 21 года. У взрослых имеется 28 постоянных зубов или до 32, включая зубы мудрости.</p>
            </div>
        </main>
        <Footer />
    </div>
  )
}