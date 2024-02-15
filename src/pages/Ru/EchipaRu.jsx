import React from 'react'
import Navbar from '../../components/NavbarRu'
import Footer from '../../components/FooterRu'


export default function EchipaRu() {
  return (
    <div className='echipa'>
    <Navbar link={'/echipa'} />
      <main>
        Команда (данные должны быть получены из серверной части)
      </main>
    <Footer />
    </div>
  )
}