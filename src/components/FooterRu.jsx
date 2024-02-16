import React from 'react';
import { FaRegCopyright } from "react-icons/fa6";
import { FaTooth } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <div className='footer'>
            <div className='sections'>
                <div className='info'>
                    <div className='logo'>
                        <FaTooth className='icon' />
                        <h3>LuxSmile</h3>
                    </div>
                    <p>Здоровье и максимальный комфорт пациента – это не только вопрос повседневной деятельности наших специалистов. Это честь для каждого члена нашей команды и вопрос репутации клиники «Люкс Смайл». Мы четко знаем, что современное стоматологическое оборудование – это не роскошь, а предмет первой необходимости.</p>
                </div>
                <div className='links'>
                    <h3>Навигация по сайту</h3>
                    <nav>
                        <Link onClick={scrollToTop} to='/ru/'>Дом</Link>
                        <Link onClick={scrollToTop} to='/ru/despreNoi'>О нас</Link>
                        <Link onClick={scrollToTop} to='/ru/echipa'>Наша команда</Link>
                        <Link onClick={scrollToTop} to='/ru/contacte'>Контакт</Link>
                        <Link onClick={scrollToTop} to='/ru/politics'>Политика конфиденциальности</Link>
                    </nav>
                </div>
                <div className='facebook'>
                    <h3>Новости на Facebook</h3>
                    <div className='allContent'>
                        <div className='facebookContent'>
                            <iframe
                                title='1'
                                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FDentus.Dentino.Moldova%2Fposts%2Fpfbid0k5pDTcvAwSoFjXZcbdiBLXQHb19Fgr8wKLg4i7x2Q39dURGTmcuZSk7BDxHgRMiol&width=300&show_text=true&appId=1489636718203885&height=419"
                                width="300"
                                height="419"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                            </iframe>
                            <iframe
                                title='2'
                                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02mTD7HjiAS2qwfJ81ErKHYLSdUE2Sr4YCDzd9ruR2ore9peeNczEJgifU8xAw7CRtl%26id%3D100049358985370&width=300&show_text=true&appId=1489636718203885&height=643"
                                width="300"
                                height="628"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                            </iframe>
                        </div>
                    </div>
                </div>
                <div className='contactsBox'>
                    <h3>Контактная информация</h3>
                    <div className='contacts'>
                        <p>Телефон:</p>
                        <p className='bigSize'>+373 60 *** ***</p>
                        <p className='bigSize'>+373 22 *** ***</p>
                        <p>Программа работы:</p>
                        <p className='bigSize'>Понедельник-Пятница: 9.00 - 19.00</p>
                        <p>Наше место нахождения:</p>
                        <p className='bigSize'>ул. Иона Крянгэ 7, Кишинев</p>
                    </div>
                </div>
            </div>
            <div className='security'>
                <div className='copyright'>
                    <FaRegCopyright className='icon' />
                    <p>2024 «LixSmile»®. Все права защищены.</p>
                </div>
                <div className='politics'>
                    <Link onClick={scrollToTop} to='/ru/politics'>Политика конфиденциальности</Link>
                </div>
            </div>
        </div>
    )
}
