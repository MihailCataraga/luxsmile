import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Echipa() {
  return (
    <div className='echipa'>
      <Navbar link={'/echipa'} />
        <main>
          Echipa (datele trebuie preluate din backend)
        </main>
      <Footer />
    </div>
  )
}
