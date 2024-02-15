import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Politics() {
  return (
    <div className='politics'>
        <Navbar link={'/politics'} />
        <main>
            <h1>Politica de Confidențialitate</h1>
            <ol>
                <li>Colectarea informațiilor</li>
                <p>Colectăm informații prin intermediul formularelor pe care le completați pe site-ul nostru, atunci când accesați contul Dvs, completați chestionarele propuse, participați la promoții. Informațiile personale cuprind următoarele date: numele și prenumele Dvs, adresa e-mail, numărul de telefon, domiciliul, date menționate în chestionar privind starea sănătății. În plus, identificăm în mod automat computerul și browser-ul Dvs, precum și adresa paginii solicitate.</p>
                <li>Utilizarea informațiilor</li>
                <p>Informațiile pe care le obținem de la Dvs pot fi utilizate pentru:</p>
                <ul>
                    <li>A vă oferi servicii corespunzătoare necesităților Dvs individuale</li>
                    <li>A îmbunătăți site-ul</li>
                    <li>A îmbunătăți sistemul de monitorizare a utilizatorilor</li>
                    <li>A vă contacta telefonic sau prin email</li>
                    <li>A organiza promoții, concursuri sau studii</li>
                </ul>
                <li>Protecția datelor cu caracter personal</li>
                <p>Suntem unicii utilizatori care au acces la informația colectată pe site-ul nostru. Datele dvs personale nu vor fi vândute sau transmise prin orice cale persoanelor terțe.</p>
                <li>Divulgarea informațiilor persoanelor terțe</li>
                <p>Noi nu vindem, nu facem schimb și nu transmitem datele cu caracter personal companiilor terțe. Suntem dispuși să dezvăluim informații cu scopul prevenirii crimelor sau pentru a participa în investigații, în caz de suspecții de fraude, acțiuni care atentează la siguranță și integritatea fizică, încălcări sau în alte cazuri prevăzute de lege.</p>
                <li>Protecția informațiilor</li>
                <p>Utilizăm diverse metode de securizare pentru a asigura integritatea și siguranța datelor Dvs personale. Site-ul utilizează un protocol sigur de transmitere a datelor. Doar colaboratorii care au anumite sarcini de prelucrare a informațiilor au acces la datele Dvs personale. Fișierele de tip cookies sent utilize în scopul îmbunătățirii accesului la site și monitorizării vizitelor repetate. În plus, acestea permit identificarea celor mai solicitate cerințe. Fișierele de tip cookies nu transmit niciun tip de informații confidențiale.</p>
                <li>Dezabonarea</li>
                <p>În cazul în care doriți să vă dezabonați de la newsletter, instrucțiunile detaliate sunt prezentate în cadrul fiecărui email.</p>
                <li>Acceptul</li>
                <p>Utilizând serviciile site-ului nostru, în mod automat acceptați politica noastră de confidențialitate.</p>
            </ol>
        </main>
        <Footer />
    </div>
  )
}
