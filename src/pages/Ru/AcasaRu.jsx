import React from 'react';
import Principala from '../../assets/img/Principala.jpg';
import BunVenit from '../../assets/img/bunVenit.png';
import IconServicii1 from '../../assets/img/iconServicii1.png';
import IconServicii2 from '../../assets/img/iconServicii2.png';
import IconServicii3 from '../../assets/img/iconServicii3.png';
import IconServicii4 from '../../assets/img/iconServicii4.png';
import IconServicii5 from '../../assets/img/iconServicii5.png';
import IconServicii6 from '../../assets/img/iconServicii6.png';
import { Link } from 'react-router-dom';
import Navbar from '../../components/NavbarRu';
import Footer from '../../components/FooterRu';


export default function AcasaRu() {
    const scrollTo = () => {
        const element = document.getElementById('scroll')
        element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <div className='home'>
            <Navbar link={'/'} />
            <div className='main'>
                <img src={Principala} alt='Основное изображение' />
                <div className='consultation'>
                    <h2>ЗАПРОСИТЬ КОНСУЛЬТАЦИЮ.</h2>
                    <button onClick={scrollTo}>ПРИХОДИТЕ НА БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</button>
                </div>
            </div>
            <div className='wellcome'>
                <img src={BunVenit} alt='Приветственное изображение' />
                <h1>ДОБРО ПОЖАЛОВАТЬ! ВЫ ВСЕГО В ОДНОМ ШАГЕ ОТ УЛЫБКИ, О КОТОРОЙ МЕЧТАЛИ.</h1>
            </div>
            <p className='presentation'><span>Стоматология LuxSmile</span> Премиальное место для здоровья и красоты вашей улыбки. Благодаря команде экспертов и передовым технологиям мы предлагаем высококачественное стоматологическое лечение в расслабляющей и дружественной обстановке. От гигиены полости рта до сложных процедур — мы здесь, чтобы позаботиться о вашей улыбке и улучшить ее. Свяжитесь с нами сегодня, чтобы получить здоровую и яркую улыбку!</p>
            <div className='services'>
                <h2>Воспользуйтесь профессионализмом и опытом</h2>
                <div className='serviceBox'>
                    <Link onClick={scrollToTop} to={'/igienaOrala'}>
                        <div className='service'>
                            <img src={IconServicii1} alt='Изображение для сервиса' />
                            <h4>Гигиена полости рта</h4>
                        </div>
                    </Link>
                    <Link onClick={scrollToTop} to={'/implantologia'}>
                        <div className='service'>
                            <img src={IconServicii2} alt='Изображение для сервиса' />
                            <h4>Имплантология</h4>
                        </div>
                    </Link>
                    <Link onClick={scrollToTop} to={'/parodontologie'}>
                        <div className='service'>
                            <img src={IconServicii3} alt='Изображение для сервиса' />
                            <h4>Пародонтология</h4>
                        </div>
                    </Link>
                    <Link onClick={scrollToTop} to={'/ortodontiaDentara'}>
                        <div className='service'>
                            <img src={IconServicii4} alt='Изображение для сервиса' />
                            <h4>Стоматологическая ортодонтия</h4>
                        </div>
                    </Link>
                    <Link onClick={scrollToTop} to={'/imagisticaDentara'}>
                        <div className='service'>
                            <img src={IconServicii5} alt='Изображение для сервиса' />
                            <h4>Стоматологическая визуализация</h4>
                        </div>
                    </Link>
                    <Link onClick={scrollToTop} to={'/stomatologieCopii'}>
                        <div className='service'>
                            <img src={IconServicii6} alt='Изображение для сервиса' />
                            <h4>Детская стоматология</h4>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='appointment' id='scroll'>
                <div className='info'>
                    <p className='first'>Телефон:</p>
                    <p className='bigSize'>+373 60 *** ***</p>
                    <p className='bigSize'>+373 22 *** ***</p>
                    <p>Программа работы:</p>
                    <p className='bigSize'>Понедельник-Пятница: 9.00 - 19.00</p>
                    <p>Наше место нахождения:</p>
                    <p className='bigSize'>ул. Иона Крянгэ 7, Кишинев</p>
                </div>
                <form>
                    <h3>Для планирования</h3>
                    <input type='text' placeholder='Имя и фамилия' />
                    <input type='text' placeholder='Электронная почта' />
                    <input type='text' placeholder='Номер телефона' />
                    <select defaultValue="Selectați serviciul">
                        <option value="Selectați serviciul">Выберите услугу</option>
                        <option value="Igiena orală">Гигиена полости рта</option>
                        <option value="Implantologia">Имплантология</option>
                        <option value="Parodontologie">Пародонтология</option>
                        <option value="Ortodonția dentară">Стоматологическая ортодонтия</option>
                        <option value="Imagistica dentară">Стоматологическая визуализация</option>
                        <option value="Stomatologie copii Inhalosedare și anestezia generala">Детская стоматология</option>
                    </select>
                    <button>Отправить информацию</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}