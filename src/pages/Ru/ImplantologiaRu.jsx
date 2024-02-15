import React from 'react'
import Img from '../../assets/img/implantologie.png';
import Navbar from '../../components/NavbarRu';
import Footer from '../../components/FooterRu';

export default function ImplantologiaRu() {
  return (
    <div className='service'>
        <Navbar link={'/implantologia'} />
        <main>
            <div className='img'>
                <img src={Img} alt='Img' />
            </div>
            <div className='info'>
                <h1>Имплантология</h1>
                <p>Зубной имплантат – самый современный метод замены утраченного или безнадежно поврежденного зуба. Эта процедура выполняется хирургическим путем, при этом зубной имплантат устанавливается в кость.</p>
                <p>Вмешательство совершенно атравматично и безболезненно, оно похоже на обычное удаление зуба (все делается под местной анестезией). После операции по установке дентального имплантата в кость следует период его заживления и биоинтеграции, период, который варьируется в пределах 3-6 месяцев. Затем происходит повторное открытие имплантата, установка протезного абатмента, а затем коронковая реставрация (керамическая коронка на имплантате).</p>
                <p>Полностью восстановленный зуб состоит из трех частей: зубного имплантата, протезного абатмента и коронки на имплантате.</p>
            </div>
        </main>
        <Footer />
    </div>
  )
}
