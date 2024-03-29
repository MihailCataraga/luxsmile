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
                    <p>Sănătatea pacientului și confortul său maxim nu este doar o chestiune a activităților zilnice de rutină ale specialiștilor noștri. Aceasta este o stie de onoare pentru fiecare membru al echipei noastre și o întrebare despre reputația clinicii «Lux Smile». Știm în mod clar faptul că echipamentul dentar modern nu este un lux, ci o necesitate elementară.</p>
                </div>
                <div className='links'>
                    <h3>Navigare pe site</h3>
                    <nav>
                        <Link onClick={scrollToTop} to='/'>Acasă</Link>
                        <Link onClick={scrollToTop} to='/despreNoi'>Despre noi</Link>
                        <Link onClick={scrollToTop} to='/echipa'>Echipă noastră</Link>
                        <Link onClick={scrollToTop} to='/contacte'>Contact</Link>
                        <Link onClick={scrollToTop} to='/politics'>Politica de Confidențialitate</Link>
                    </nav>
                </div>
                <div className='facebook'>
                    <h3>Știri pe Facebook</h3>
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
                    <h3>Contact Information</h3>
                    <div className='contacts'>
                        <p>Telefon:</p>
                        <p className='bigSize'>+373 60 *** ***</p>
                        <p className='bigSize'>+373 22 *** ***</p>
                        <p>Program de lucru:</p>
                        <p className='bigSize'>Luni-Vineri: 9.00 - 19.00</p>
                        <p>Locația noastră:</p>
                        <p className='bigSize'>Str. Ion Creangă 7, Chișinău</p>
                    </div>
                </div>
            </div>
            <div className='security'>
                <div className='copyright'>
                    <FaRegCopyright className='icon' />
                    <p>2024 «LuxSmile»®. Toate drepturile rezervate.</p>
                </div>
                <div className='politics'>
                    <Link onClick={scrollToTop} to='/politics'>Politica de Confidențialitate</Link>
                </div>
            </div>
        </div>
    )
}
