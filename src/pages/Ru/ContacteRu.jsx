import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { GiClockwork } from "react-icons/gi";
import { FaPhone } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp , FaViber } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Navbar from '../../components/NavbarRu';
import Footer from '../../components/FooterRu';

export default function ContacteRu() {


  const whatsApp = () => {
    const phone = '+37369775035';
    var whatsAppUrl = 'https://wa.me/' + phone
    window.open(whatsAppUrl)
  }

  const viber = () => {
    const phone = '+37368193004';
    var viberUrl = 'viber://add?number=' + phone
    window.open(viberUrl)
  }

  const facebook = () => {
    var facbookUrl = 'https://www.facebook.com/'
    window.open(facbookUrl)
  }

  const instagram = () => {
    var instagramUrl = 'https://www.instagram.com/'
    window.open(instagramUrl)
  }
  return (
    <div className='contacte'>
      <Navbar link={'/contacte'} />
      <main>
        <h1>Местоположение и контакты</h1>
        <div className='contacts'>
          <div className='contact'>
            <FaLocationDot className='icon' />
            <h3>Наш адрес</h3>
            <div className='info'>
              <p>улица Иона Крянгэ 7,</p>
              <p>Кишинев Молдова</p>
              <p>Стоматологическая клиника</p>
              <p>«ЛюксСмайл»</p>
            </div>
            
          </div>
          <div className='contact'>
            <GiClockwork className='icon' />
            <h3>Программа работы</h3>
            <div className='info'>
              <p>Пн - Пт: 9:00 - 19:00</p>
              <p>Сб: 9:00 - 14:00</p>
              <p>Вс: свободный день</p>
            </div>
            
          </div>
          <div className='contact'>
            <FaPhone className='icon' />
            <h3>Горячая линия</h3>
            <div className='btns'>
              <p>+373 60 *** ***</p>
              <div className='btn'>
                <button className='whatsapp' onClick={whatsApp}><FaWhatsapp className='icon' />WhatsApp</button>
                <button className='viber' onClick={viber}><FaViber className='icon' />Viber</button>
              </div>
            </div>
          </div>
          <div className='contact'>
            <TfiEmail className='icon' />
            <h3>Электронная почта и социальные сети</h3>
            <div className='btns'>
              <div className='email'>
                <MdOutlineMarkEmailRead className='icon' />
                <p>info@luxsmile.md</p>
              </div>
              <div className='btn'>
                <button className='facebook' onClick={facebook}><FaFacebook className='icon' />Facebook</button>
                <button className='instagram' onClick={instagram}><FaInstagram className='icon' />Instagram</button>
              </div>
            </div>
          </div>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.1926712502714!2d28.80841298767208!3d47.03644996829891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97dbf6f305e5d%3A0xfd5bcf47c79ec7c0!2zU3RyYWRhIElvbiBDcmVhbmfEgyA3LCBDaGnImWluxIN1LCDQnNC-0LvQtNC-0LLQsA!5e0!3m2!1sru!2s!4v1708094932304!5m2!1sru!2s" 
          width="100%" 
          height="500" 
          style={{border: 0}} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </main>
      <Footer />
    </div>
  )
}
