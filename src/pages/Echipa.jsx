import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Echipa(props) {
  const backend = props.backend;
  const [employees, setEmployees] = useState([])
  //Get Employees
  const getEmployee = async () => {
    const res = await fetch(`${backend}/angajati`, {
      method: 'GET',
    })
    const data = await res.json()
    // Parcurgeți fiecare angajat și preluați imaginea
    const employeesWithImages = await Promise.all(data.map(async employee => {
      const imgResponse = await fetch(`${backend}/src/database/img/${employee.img}`);
      if (!imgResponse.ok) {
        throw new Error('Nu s-a putut prelua imaginea');
      }
      const blob = await imgResponse.blob();
      const imageUrl = URL.createObjectURL(blob);
      return {
        ...employee,
        img: imageUrl
      };
    }));
    setEmployees(employeesWithImages);
  }
  //Sort Employees
  const admin = employees.filter(em => em.functie === "Administratie")
  const med = employees.filter(em => em.functie === "Medic Stomatolog")
  const teh = employees.filter(em => em.functie === "Tehnician Dentar")
  const asistent = employees.filter(em => em.functie === "Asistent Medical")
  useEffect(() => {
    getEmployee()
  }, [])
  return (
    <div className='echipa'>
      <Navbar link={'/echipa'} />
      <main>
        <h1>COLECTIVUL LUX SMILE</h1>
        <div className='all'>
          <h2>ADMINISTRAȚIA</h2>
          <div className='employee'>
            {admin.map((empl) => {
              return (
                <div key={empl.id}>
                  <img src={empl.img} alt='Img' />
                  <h4>{empl.nume}</h4>
                  <p>{empl.specialitate}</p>
                </div>
              )
            })}
          </div>
          <h2>MEDICII-STOMATOLOGI</h2>
          <div className='employee'>
            {med.map((empl) => {
              return (
                <div key={empl.id}>
                  <img src={empl.img} alt='Img' />
                  <h4>{empl.nume}</h4>
                  <p>{empl.specialitate}</p>
                </div>
              )
            })}
          </div>
          <h2>TEHNICIENI DENTARI</h2>
          <div className='employee'>
            {teh.map((empl) => {
              return (
                <div key={empl.id}>
                  <img src={empl.img} alt='Img' />
                  <h4>{empl.nume}</h4>
                  <p>{empl.specialitate}</p>
                </div>
              )
            })}
          </div>
          <h2>ASISTENȚI MEDICALI</h2>
          <div className='employee'>
            {asistent.map((empl) => {
              return (
                <div key={empl.id}>
                  <img src={empl.img} alt='Img' />
                  <h4>{empl.nume}</h4>
                  <p>{empl.specialitate}</p>
                </div>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
