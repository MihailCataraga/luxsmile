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
    const href = window.location.href;
    const width = window.innerWidth;
    useEffect(() => {
        if(href.includes('/ru/')) {
            setFlag(true)
        } else {
            setFlag(false)
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
    }, [openLanguages, service, href, miniMenu, serviceMini]);
  return (
    <div className='navbar'>
        <NavLink to='/ru/'>
            <div className='logo'>
                <FaTooth className='logoIcon'/>
                <h2>LuxSmail</h2>
            </div>
        </NavLink>
        {width > 650 ?
            <div className='navLinks'>
                <nav>
                    <NavLink to='/ru/'>Дом</NavLink>
                    <NavLink to='/ru/despreNoi'>О нас</NavLink>
                    <div className='servicesBox' onClick={() => {setService(true)}}>
                        Услуги 
                        {<FaChevronDown className='icon' />}
                        {service && <div className='services'>
                            <nav>
                                <NavLink to='/ru/igienaOrala'>Гигиена полости рта</NavLink>
                                <NavLink to='/ru/implantologia'>Имплантология</NavLink>
                                <NavLink to='/ru/parodantologie'>Пародонтология</NavLink>
                                <NavLink to='/ru/ortodontiaDentara'>Стоматологическая ортодонтия</NavLink>
                                <NavLink to='/ru/imagisticaDentara'>Стоматологическая визуализация</NavLink>
                                <NavLink to='/ru/stomatologieCopii'>Детская стоматология</NavLink>
                            </nav>
                        </div>}
                    </div>
                    <NavLink to='/ru/echipa'>Команда</NavLink>
                    <NavLink to='/ru/contacte'>Контакты</NavLink>
                    <div className='languages' onClick={() => {setOpenLanguages(!openLanguages)}}>
                        {flag ? 
                            <img src={Ru} alt='Language Flag' /> :
                            <img src={Ro} alt='Language Flag' />
                        }
                        {openLanguages && <div className='allLanguages '>
                            <Link to={props.link} >
                                    <img src={Ro} alt='Language Flag' />
                            </Link>
                            <Link to={'/ru' + props.link}>
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
                            <Link to={props.link} >
                                    <img src={Ro} alt='Language Flag' />
                            </Link>
                            <Link to={'/ru' + props.link}>
                                    <img src={Ru} alt='Language Flag' />
                            </Link>
                        </div>
                        <div className='miniMenu'>
                            <nav>
                                <NavLink to='/ru/'>Дом</NavLink>
                                <NavLink to='/ru/despreNoi'>О нас</NavLink>
                                <div className='servicesBoxMini' onClick={(e) => {e.stopPropagation(); setServiceMini(!serviceMini)}}>
                                    Услуги 
                                    {serviceMini && <div className='services'>
                                        <nav>
                                            <NavLink to='/ru/igienaOrala'>Гигиена полости рта</NavLink>
                                            <NavLink to='/ru/implantologia'>Имплантология</NavLink>
                                            <NavLink to='/ru/parodantologie'>Пародонтология</NavLink>
                                            <NavLink to='/ru/ortodontiaDentara'>Стоматологическая ортодонтия</NavLink>
                                            <NavLink to='/ru/imagisticaDentara'>Стоматологическая визуализация</NavLink>
                                            <NavLink to='/ru/stomatologieCopii'>Детская стоматология</NavLink>
                                        </nav>
                                    </div>}
                                </div>
                                <NavLink to='/ru/echipa'>Команда</NavLink>
                                <NavLink to='/ru/contacte'>Контакты</NavLink>
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
