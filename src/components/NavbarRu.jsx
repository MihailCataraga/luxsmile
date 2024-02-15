import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaTooth, FaChevronDown } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Ro from '../assets/img/ro.jpg';
import Ru from '../assets/img/ru.jpg';

export default function Navbar(props) {
    const [openLanguages, setOpenLanguages] = useState(false);
    const [service, setService] = useState(false);
    const [serviceMini, setServiceMini] = useState(false);
    const [flag, setFlag] = useState(false);
    const [miniMenu, setMiniMenu] = useState(false);
    const [acasa, setAcasa] = useState('');
    const [despreNoi, setDespreNoi] = useState('');
    const [echipa, setEchipa] = useState('');
    const [contacte, setContacte] = useState('');
    const [serviceColor, setServiceColor] = useState('')
    const href = window.location.href;
    const width = window.innerWidth;
    const hash = window.location.hash;
    window.addEventListener('scroll', function () {
        var navbar = document.getElementById('navbar');
        if (window.scrollY > 80) {
            navbar.classList.add('visible');
        } else {
            navbar.classList.remove('visible');
        }
    });
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    useEffect(() => {
        if(hash === '#/ru/') {
            setAcasa('active')
        } else if(hash === '#/ru/despreNoi') {
            setDespreNoi('active')
        } else if(hash === '#/ru/echipa') {
            setEchipa('active')
        } else if(hash === '#/ru/contacte') {
            setContacte('active')
        }
        
        if(href.includes('/ru/')) {
            setFlag(true)
        } else {
            setFlag(false)
        }

        if(href.includes('igienaOrala')){
            setServiceColor('blue')
        } else if(href.includes('implantologia')){
            setServiceColor('blue')            
        } else if(href.includes('parodontologie')){
            setServiceColor('blue')
        } else if(href.includes('ortodontiaDentara')){
            setServiceColor('blue')
        } else if(href.includes('imagisticaDentara')){
            setServiceColor('blue')
        } else if(href.includes('stomatologieCopii')){
            setServiceColor('blue')
        }

        const handleGlobalClickLanguage = (event) => {
            if(openLanguages && !event.target.closest('.languages')) {
                setOpenLanguages(false);
            }
        };
        const handleGlobalClickService = (event) => {
            if(service && !event.target.closest('.servicesBox')) {
                setService(false);
            }
        };
        const handleGlobalClickMiniMenu = (event) => {
            if(miniMenu && !event.target.closest('.icon')) {
                setMiniMenu(false);
            }
            if(serviceMini && !event.target.closest('.servicesBoxMini')) {
                setServiceMini(false);
            }
        };
        document.addEventListener('click', handleGlobalClickLanguage);
        document.addEventListener('click', handleGlobalClickService);
        document.addEventListener('click', handleGlobalClickMiniMenu);
        return () => {
            document.removeEventListener('click', handleGlobalClickLanguage);
            document.removeEventListener('click', handleGlobalClickService);
            document.removeEventListener('click', handleGlobalClickMiniMenu);
        };
    }, [openLanguages, service, href, miniMenu, serviceMini, hash]);
  return (
    <div className='navbar' id='navbar'>
        <NavLink onClick={scrollToTop} to='/ru/'>
            <div className='logo'>
                <FaTooth className='logoIcon'/>
                <h2>LuxSmail</h2>
            </div>
        </NavLink>
        {width > 650 ?
            <div className='navLinks'>
                <nav>
                    <Link onClick={scrollToTop} className={`${acasa}`} to='/ru/'>Дом</Link>
                    <Link onClick={scrollToTop} className={`${despreNoi}`} to='/ru/despreNoi'>О нас</Link>
                    <div className={`servicesBox ${serviceColor}`} onClick={() => {setService(true)}}>
                        Услуги 
                        {<FaChevronDown className='icon' />}
                        {service && <div className='services'>
                            <nav>
                                <NavLink onClick={scrollToTop} to='/ru/igienaOrala'>Гигиена полости рта</NavLink>
                                <NavLink onClick={scrollToTop} to='/ru/implantologia'>Имплантология</NavLink>
                                <NavLink onClick={scrollToTop} to='/ru/parodontologie'>Пародонтология</NavLink>
                                <NavLink onClick={scrollToTop} to='/ru/ortodontiaDentara'>Стоматологическая ортодонтия</NavLink>
                                <NavLink onClick={scrollToTop} to='/ru/imagisticaDentara'>Стоматологическая визуализация</NavLink>
                                <NavLink onClick={scrollToTop} to='/ru/stomatologieCopii'>Детская стоматология</NavLink>
                            </nav>
                        </div>}
                    </div>
                    <Link onClick={scrollToTop} className={`${echipa}`} to='/ru/echipa'>Команда</Link>
                    <Link onClick={scrollToTop} className={`${contacte}`} to='/ru/contacte'>Контакты</Link>
                    <div className='languages' onClick={() => {setOpenLanguages(!openLanguages)}}>
                        {flag ? 
                            <img src={Ru} alt='Language Flag' /> :
                            <img src={Ro} alt='Language Flag' />
                        }
                        {openLanguages && <div className='allLanguages '>
                            <Link onClick={scrollToTop} to={props.link} >
                                    <img src={Ro} alt='Language Flag' />
                            </Link>
                            <Link onClick={scrollToTop} to={'/ru' + props.link}>
                                    <img src={Ru} alt='Language Flag' />
                            </Link>
                        </div>}
                    </div>
                </nav>
            </div> :
            <div className='miniMenuBox' onClick={() => setMiniMenu(!miniMenu)}>
                {
                    miniMenu ? 
                    <>
                        <IoMdClose className='icon' />
                        <div className='allLanguages '>
                            <Link onClick={scrollToTop} to={props.link} >
                                    <img src={Ro} alt='Language Flag' />
                            </Link>
                            <Link onClick={scrollToTop} to={'/ru' + props.link}>
                                    <img src={Ru} alt='Language Flag' />
                            </Link>
                        </div>
                        <div className='miniMenu'>
                            <nav>
                                <Link onClick={scrollToTop} className={`${acasa}`} to='/ru/'>Дом</Link>
                                <Link onClick={scrollToTop} className={`${despreNoi}`} to='/ru/despreNoi'>О нас</Link>
                                <div className={`servicesBox ${serviceColor}`} onClick={(e) => {e.stopPropagation(); setServiceMini(!serviceMini)}}>
                                    Услуги 
                                    {serviceMini && <div className='services'>
                                        <nav>
                                            <NavLink onClick={scrollToTop} to='/ru/igienaOrala'>Гигиена полости рта</NavLink>
                                            <NavLink onClick={scrollToTop} to='/ru/implantologia'>Имплантология</NavLink>
                                            <NavLink onClick={scrollToTop} to='/ru/parodontologie'>Пародонтология</NavLink>
                                            <NavLink onClick={scrollToTop} to='/ru/ortodontiaDentara'>Стоматологическая ортодонтия</NavLink>
                                            <NavLink onClick={scrollToTop} to='/ru/imagisticaDentara'>Стоматологическая визуализация</NavLink>
                                            <NavLink onClick={scrollToTop} to='/ru/stomatologieCopii'>Детская стоматология</NavLink>
                                        </nav>
                                    </div>}
                                </div>
                                <Link onClick={scrollToTop} className={`${echipa}`} to='/ru/echipa'>Команда</Link>
                                <Link onClick={scrollToTop} className={`${contacte}`} to='/ru/contacte'>Контакты</Link>
                            </nav>
                            
                        </div>
                    </> :
                    <IoMdMenu className='icon' />
                }
            </div>
        }
    </div>
  )
}
