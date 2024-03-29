import React from 'react';
import Img from '../../assets/img/igienaOrala.png';
import Navbar from '../../components/NavbarRu';
import Footer from '../../components/FooterRu';

export default function IgienaOralaRu() {
  return (
    <div className='service'>
        <Navbar link={'/igienaOrala'} />
        <main>
            <div className='img'>
                <img src={Img} alt='Img' />
            </div>
            <div className='info'>
                <h1>Гигиена полости рта</h1>
                <p>Скейлинг – профилактическая стоматологическая процедура, направленная на удаление зубного камня и зубного налета, образовавшихся на наддесневой поверхности – эмали, соответственно поддесневом – цементе натуральных или искусственных зубов. Наддесневой зубной камень также является наиболее распространенным; сначала он бесцветен, затем приобретает коричневатый оттенок и придает зубам неприглядный вид, одновременно вызывая неприятный запах изо рта и кариес.</p>
                <p>Поддесневой зубной камень более твердый и темный, со временем он увеличивается в объеме и отделяет десну от зуба, создавая благоприятную среду для роста бактерий.</p>
                <p>Зубной налет – это остатки пищи и бактерий, которые образуются на зубах сразу после еды. Это вещество бесцветное и липкое, но если его не удалить щеткой, со временем оно превращается в зубной камень или камень – твердый бесцветный или серый, желтоватый слой.</p>
            </div>
        </main>
        <Footer />
    </div>
  )
}
