import React, { useEffect, useState } from 'react';
import { FaTooth, FaChevronLeft, FaChevronRight, FaTrashAlt } from 'react-icons/fa';
import { IoMdSettings } from "react-icons/io";

export default function Admin() {
    const jwToken = localStorage.getItem('jwToken')
    const [employees, setEmployees] = useState([])
    const [settings, setSettings] = useState(false)
    const [addNewEmployee, setAddNewEmployee] = useState(false)
    const [previewImageUrl, setPreviewImageUrl] = useState(null);
    const [message, setMessage] = useState(false)
    //????????????????????????????????????????????????
    const [numOfPage, setNumOfPage] = useState(1)
    const numMaxOfPages = Math.ceil(employees.length / 10)
    const numOfEmployeesPerPage = 10
    const [infoEmployee, setInfoEmployee] = useState({})
    const [edit, setEdit] = useState(false)
    const [id, setId] = useState(null)
    const [newData, setNewData] = useState({
        id: '',
        nume: '',
        functie: '',
        specialitate: '',
        img: null
    });
    //Logout
    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem("jwToken")
        localStorage.removeItem("data")
        window.location.href = 'http://localhost:3000/luxsmile#/login'
    }

    // Get Employees by function
    const getEmployees = async (functie) => {
        if (jwToken) {
            try {
                const response = await fetch(`http://localhost:8080/angajati/${functie}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ jwToken })
                });
                const data = await response.json();
                if (data.message === 'jwToken este invalid') {
                    window.location.href = 'http://localhost:3000/luxsmile#/login';
                    return;
                }
                // Parcurgeți fiecare angajat și preluați imaginea
                const employeesWithImages = await Promise.all(data.results.map(async employee => {
                    const imgResponse = await fetch(`http://localhost:8080/src/database/img/${employee.img}`);
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
            } catch (error) {
                console.error('Eroare la trimiterea tokenului la server:', error);
            }
        } else {
            console.log('Nu există token în localStorage.');
            window.location.href = 'http://localhost:3000/luxsmile#/login';
        }
    }

    // Get all Employees
    const getAllEmployees = async () => {
        if (jwToken) {
            try {
                const response = await fetch(`http://localhost:8080/angajati`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ jwToken })
                });
                const data = await response.json();
                if (data.message === 'jwToken este invalid') {
                    window.location.href = 'http://localhost:3000/luxsmile#/login';
                    return;
                }
                // Parcurgeți fiecare angajat și preluați imaginea
                const employeesWithImages = await Promise.all(data.map(async employee => {
                    const imgResponse = await fetch(`http://localhost:8080/src/database/img/${employee.img}`);
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
            } catch (error) {
                console.error('Eroare la trimiterea tokenului la server:', error);
            }
        } else {
            console.log('Nu există token în localStorage.');
            window.location.href = 'http://localhost:3000/luxsmile#/login';
        }
    }

    useEffect(() => {
        const data = localStorage.getItem('data')
        if (data === 'all') {
            getAllEmployees()
        } else if (data === 'Administratie') {
            getEmployees('Administratie')
        } else if (data === 'Medic Stomatolog') {
            getEmployees('Medic Stomatolog')
        } else if (data === 'Tehnician Dentar') {
            getEmployees('Tehnician Dentar')
        } else if (data === 'Asistent Medical') {
            getEmployees('Asistent Medical')
        }
        setNumOfPage(localStorage.getItem('page'))
    }, [])

    // numOfPage minus
    const getBack = () => {
        if (Number(numOfPage) > 1) {
            setNumOfPage(Number(numOfPage) - 1)
            localStorage.setItem('page', (Number(numOfPage) - 1));
        }

    }
    // numOfPage plus
    const getNext = () => {
        if (Number(numOfPage) < numMaxOfPages) {
            setNumOfPage(Number(numOfPage) + 1)
            localStorage.setItem('page', (Number(numOfPage) + 1));
        }

    }
    const tenNewEmployees = employees.slice((numOfPage - 1) * numOfEmployeesPerPage, numOfPage * numOfEmployeesPerPage,)

    const getEmployeesByPages = (param, param2) => {
        param(param2);
        localStorage.setItem('page', 1);
    }
    const numOfPageFromInput = (event) => {
        const num = event.target.value
        setNumOfPage(num)
        localStorage.setItem('page', num)

    }

    //Settings
    const openOneEmployee = (id) => {
        const oneEmployee = tenNewEmployees.find(emp => emp.id === id)
        setInfoEmployee(oneEmployee)
        setNewData({ id: oneEmployee.id, nume: oneEmployee.nume, functie: oneEmployee.functie, specialitate: oneEmployee.specialitate })
        setId(id)
        setSettings(true)
    }
    //Edit datas
    const handleChangeData = (event) => {
        const { name, value } = event.target;
        setNewData({
            ...newData,
            [name]: value
        });
    };

    // Edit a employee
    const editEmployee = async () => {
        if (jwToken) {
            try {
                const response = await fetch(`http://localhost:8080/angajati/edit/${newData.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ jwToken, newData: { nume: newData.nume, specialitate: newData.specialitate, functie: newData.functie } })
                });
                const data = await response.json();
                if (data.message === 'jwToken este invalid') {
                    window.location.href = 'http://localhost:3000/luxsmile#/login';
                    return;
                }
                window.location.reload()
            } catch (error) {
                console.error('Eroare la trimiterea tokenului la server:', error);
            }
        } else {
            console.log('Nu există token în localStorage.');
            window.location.href = 'http://localhost:3000/luxsmile#/login';
        }
    }

    // Delete a employee
    const deleteEmployee = async (id) => {
        console.log(id)
        try {
            const response = await fetch(`http://localhost:8080/angajati/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({jwToken})
            })
            .then(res => res.json())
            .then(data => console.log(data))
            window.location.reload()
            if (!response.ok) {
                throw new Error('Eroare la ștergere');
            }

            const data = await response.json();
        } catch (error) {
            console.error('Eroare la ștergere:', error);
        }
    }
    // Add a new Employee Photo
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (e) => {
          const imageUrl = e.target.result;
          setPreviewImageUrl(imageUrl);
          setNewData({img: imageUrl})
        };
    
        reader.readAsDataURL(file);
    };

    //Send a new Employee
    const sendNewEmployee = async() => {
        var text = 'Adaugati: '
        if(newData.img === null) {
            text = text + 'imagine; '
        }
        if(newData.nume === '') {
            text = text + 'nume; '
        }
        if(newData.functie === '') {
            text = text + 'functie; '
        }
        if(newData.specialitate === '') {
            text = text + 'specialitate; '
        }
        if(text === 'Adaugati: ') {
            setMessage(false)
            if (jwToken) {
                try {
                    const fileInput = document.getElementById('newImg');
                    const file = fileInput.files[0]
                    const newName = newData.specialitate + ' ' + newData.nume + '_' + newData.functie + '.jpg';
                    const newFile = new File([file], newName, { type: "image/jpg" });
                    const formData = new FormData();
                    
                    formData.append('img', newFile, newFile.newName)
                    const response = await fetch(`http://localhost:8080/angajatNou`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ jwToken, nume: newData.nume, functie: newData.functie, specialitate: newData.specialitate })
                    });
                    const data = await response.json();
                    if (data.message === 'jwToken este invalid') {
                        window.location.href = 'http://localhost:3000/luxsmile#/login';
                        return;
                    }
                    const img = await fetch(`http://localhost:8080/upload`, {
                        method: 'POST',
                        body: formData
                    });
                    const imgResponse = await img.json();
                    console.log(imgResponse)
                    if(imgResponse.message === 'Imagine încărcată cu succes') {
                        setMessage('A fost creat un angajat nou')
                        setTimeout(() => {
                            document.location.reload()
                        }, 2000)
                    }
                } catch (error) {
                    console.error('Eroare la trimiterea tokenului la server:', error);
                }
            } else {
                console.log('Nu există token în localStorage.');
                window.location.href = 'http://localhost:3000/luxsmile#/login';
            }
        } else {
            setMessage(text)
        }
    }
    return (
        <div className='admin'>
            <header className='logo'>
                <div className='boxLogo'>
                    <FaTooth className='icon' />
                    <h1>LuxSmile</h1>
                </div>
                <button onClick={handleLogout}>Log out</button>
            </header>
            <main>
                <div className='tools'>
                    <button className='tool' onClick={() => setAddNewEmployee(true)}>Adauga un angajat nou</button>
                    <button className='tool' onClick={() => { getEmployeesByPages(getAllEmployees); setNumOfPage(1); localStorage.setItem("data", "all") }}>Personal</button>
                    <button className='subcategory' onClick={() => { getEmployeesByPages(getEmployees, 'Administratie'); setNumOfPage(1); localStorage.setItem("data", "Administratie") }}>Administrație</button>
                    <button className='subcategory' onClick={() => { getEmployeesByPages(getEmployees, 'Medic Stomatolog'); setNumOfPage(1); localStorage.setItem("data", "Medic Stomatolog") }}>Medicii Stomatologi</button>
                    <button className='subcategory' onClick={() => { getEmployeesByPages(getEmployees, 'Tehnician Dentar'); setNumOfPage(1); localStorage.setItem("data", "Tehnician Dentar") }}>Tehnicieni Dentari</button>
                    <button className='subcategory' onClick={() => { getEmployeesByPages(getEmployees, 'Asistent Medical'); setNumOfPage(1); localStorage.setItem("data", "Asistent Medical") }}>Asistenți Medicali</button>
                </div>
                <div className='datas'>
                    <table id='employees'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Imagine</th>
                                <th>Nume</th>
                                <th>Specialitate</th>
                                <th>functie</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tenNewEmployees.map((employee) => {
                                return (
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td><img src={employee.img} alt={employee.img} />{ }</td>
                                        <td>{employee.nume}</td>
                                        <td>{employee.specialitate}</td>
                                        <td>{employee.functie}</td>
                                        <td><IoMdSettings className='icon' onClick={() => openOneEmployee(employee.id)} /> <FaTrashAlt className='icon' onClick={() => deleteEmployee(employee.id)} /></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className='page'>
                        <div>
                            <button onClick={() => { getBack() }}><FaChevronLeft className='icon' /></button>
                            <input type='number' value={numOfPage} min={1} max={numMaxOfPages} onChange={numOfPageFromInput} />
                            <button onClick={() => { getNext() }}><FaChevronRight className='icon' /></button>
                        </div>
                        <p>Numarul maxim de pagini: {numMaxOfPages}</p>
                    </div>
                </div>
            </main>
            {settings && <div className='infoEmployeeBox'>
                <div className='infoEmployee'>
                    <img src={infoEmployee.img} alt='Employee img' />
                    <div className='info'>
                        <input type='file' accept="image/*" />
                        <p>Nume: {infoEmployee.nume}</p>
                        {edit && <input type='text' name='nume' onChange={handleChangeData} placeholder={infoEmployee.nume} />}
                        <p>Functie: {infoEmployee.functie}</p>
                        {edit && <select defaultValue={infoEmployee.functie} name='functie' onChange={handleChangeData}>
                            <option value={'Administratie'}>Administratie</option>
                            <option value={'Medic Stomatolog'}>Medic Stomatolog</option>
                            <option value={'Tehnician Dentar'}>Tehnician Dentar</option>
                            <option value={'Asistent Medical'}>Asistent Medical</option>
                        </select>}
                        <p>Specialitate: {infoEmployee.specialitate}</p>
                        {edit && <input type='text' name='specialitate' onChange={handleChangeData} placeholder={infoEmployee.specialitate} />}
                        <button onClick={() => { setSettings(false); setEdit(false); document.location.reload() }}>Inchide</button>
                        <button onClick={() => setEdit(true)}>Editeza</button>
                        {edit && <button onClick={editEmployee}>Trimite</button>}
                    </div>
                </div>
            </div>
            }
            {addNewEmployee && <div className='addNewEmployee'>
                <div className='employeeData'>
                    <div className='addData'>
                        <div>
                            {message && <p className='alert'>{message}</p>}
                            <p>Imagine:</p>
                            <input id='newImg' type='file' accept="image/*" name='img' onChange={handleImageUpload} />
                            <p>Nume: </p>
                            <input id='newName' type='text' name='nume' onChange={handleChangeData} placeholder='Numele Prenume' />
                            <p>Functie</p>
                            <select id='newFunction' name='functie' defaultValue={'Selecteaza Functia'} onChange={handleChangeData}>
                                <option value={'Selecteaza Functia'}>Selecteaza Functia</option>
                                <option value={'Administratie'}>Administratie</option>
                                <option value={'Medic Stomatolog'}>Medic Stomatolog</option>
                                <option value={'Tehnician Dentar'}>Tehnician Dentar</option>
                                <option value={'Asistent Medical'}>Asistent Medical</option>
                            </select>
                            <p>Specialitate</p>
                            <input id='newSpecialty' type='text' name='specialitate' onChange={handleChangeData} placeholder='Specialitate' />
                        </div>
                        {previewImageUrl && <img src={previewImageUrl} alt="Preview" />}
                    </div>
                    <div>
                        <button onClick={sendNewEmployee}>Salveaza</button>
                        <button onClick={() => {setAddNewEmployee(false); window.location.reload()}}>Renunta</button>
                    </div>
                    
                </div>
                    
                
            </div>}
        </div>
    );
}
