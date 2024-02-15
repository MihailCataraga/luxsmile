import React from 'react';
import Navbar from '../components/Navbar';
import Principala from '../assets/img/Principala.jpg';
import BunVenit from '../assets/img/bunVenit.png';
import IconServicii1 from '../assets/img/iconServicii1.png';
import IconServicii2 from '../assets/img/iconServicii2.png';
import IconServicii3 from '../assets/img/iconServicii3.png';
import IconServicii4 from '../assets/img/iconServicii4.png';
import IconServicii5 from '../assets/img/iconServicii5.png';
import IconServicii6 from '../assets/img/iconServicii6.png';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


export default function Acasa() {
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
                <img src={Principala} alt='Imaginea principala' />
                <div className='consultation'>
                    <h2>SOLICITĂ O CONSULTAȚIE.</h2>
                    <button onClick={scrollTo}>VINO LA O CONSULTAȚIE GRATUITĂ</button>
                </div>
            </div>
            <div className='wellcome'>
                <img src={BunVenit} alt='Imagine de bun venit' />
                <h1>BINE AI VENIT! EȘTI DOAR LA UN PAS DE ZÂMBETUL LA CARE AI VISAT.</h1>
            </div>
            <p className='presentation'><span>Stomatologia LuxSmile</span> O destinație premium pentru sănătatea și frumusețea zâmbetului dumneavoastră. Cu echipă expertă și tehnologie avansată, oferim tratamente stomatologice de înaltă calitate într-un mediu relaxant și prietenos. De la igienizare dentară la proceduri complexe, suntem aici pentru a vă îngriji și a vă îmbunătăți zâmbetul. Contactați-ne astăzi pentru un zâmbet sănătos și strălucitor!</p>
            <div className='services'>
                <h2>Beneficiați de profesionalism și experiență</h2>
                <div className='serviceBox'>
                    <Link onClick={scrollToTop} to={'/igienaOrala'}>
                        <div className='service'>
                            <img src={IconServicii1} alt='Imagine pentru serviciu' />
                            <h4>Igiena orală</h4>
                        </div>
                    </Link>
                    <Link onClick={scrollToTop} to={'/implantologia'}>
                        <div className='service'>
                            <img src={IconServicii2} alt='Imagine pentru serviciu' />
                            <h4>Implantologia</h4>
                        </div>
                    </Link>
                    <Link onClick={scrollToTop} to={'/parodontologie'}>
                        <div className='service'>
                            <img src={IconServicii3} alt='Imagine pentru serviciu' />
                            <h4>Parodontologie</h4>
                        </div>
                    </Link>
                    <Link onClick={scrollToTop} to={'/ortodontiaDentara'}>
                        <div className='service'>
                            <img src={IconServicii4} alt='Imagine pentru serviciu' />
                            <h4>Ortodonția dentară</h4>
                        </div>
                    </Link>
                    <Link onClick={scrollToTop} to={'/imagisticaDentara'}>
                        <div className='service'>
                            <img src={IconServicii5} alt='Imagine pentru serviciu' />
                            <h4>Imagistica dentară</h4>
                        </div>
                    </Link>
                    <Link onClick={scrollToTop} to={'/stomatologieCopii'}>
                        <div className='service'>
                            <img src={IconServicii6} alt='Imagine pentru serviciu' />
                            <h4>Stomatologie copii</h4>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='appointment' id='scroll'>
                <div className='info'>
                    <p className='first'>Telefon:</p>
                    <p className='bigSize'>+373 60 *** ***</p>
                    <p className='bigSize'>+373 22 *** ***</p>
                    <p>Program de lucru:</p>
                    <p className='bigSize'>Luni-Vineri: 9.00 - 19.00</p>
                    <p>Locația noastră:</p>
                    <p className='bigSize'>Str. Ion Creangă 7, Chișinău</p>
                </div>
                <form>
                    <h3> Pentru programare</h3>
                    <input type='text' placeholder='Numele și prenumele' />
                    <input type='text' placeholder='Email-ul' />
                    <input type='text' placeholder='Numar de telefon' />
                    <select defaultValue="Selectați serviciul">
                        <option value="Selectați serviciul">Selectați serviciul</option>
                        <option value="Igiena orală">Igiena orală</option>
                        <option value="Implantologia">Implantologia</option>
                        <option value="Parodontologie">Parodontologie</option>
                        <option value="Ortodonția dentară">Ortodonția dentară</option>
                        <option value="Imagistica dentară">Imagistica dentară</option>
                        <option value="Stomatologie copii">Stomatologie copii</option>
                    </select>
                    <button>Trimite Informațiile</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}
