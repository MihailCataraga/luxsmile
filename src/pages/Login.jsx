import React, { useEffect, useState } from 'react';
import { FaTooth } from "react-icons/fa";

export default function Login() {
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleLogin = (event) => {
        event.preventDefault();
        if(formData.username === '' && formData.password === '') {
            setMessage("Username si password sunt goale")
        }else if(formData.username === '') {
            setMessage("Username este gol")
        }else if(formData.password === '') {
            setMessage("Password este gol")
        } else {
            fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                if(data.success) {
                    setMessage(data.message)
                    localStorage.setItem("jwToken", data.jwt)
                    localStorage.setItem("data", "all")
                    window.location.href = 'http://localhost:3000/luxsmile#/admin'
                } else {
                    setMessage("Username sau parola sunt gresite")
                }
            })
            .catch(error => {
                console.error('A apărut o eroare:', error);
            });
        }
        
        
    };
    useEffect(() => {
        // Cand navigezi la pagina de logare, jwToken sa se stearga din localStorage
        localStorage.removeItem('jwToken')
    })
  return (
    <div className='login'>
        <p>{message}</p>
        <div className='logo'>
            <FaTooth className='icon' />
            <h1>LuxSmile</h1>
        </div>
        <h3>Logeazate ca administrator</h3>
        <form onSubmit={handleLogin}>
            <input 
                type='text' 
                name='username' 
                value={formData.username} 
                onChange={handleChange} 
                placeholder='Username' 
            />
            <input 
                type='password' 
                name='password' 
                value={formData.password} 
                onChange={handleChange} 
                placeholder='Password' 
            />
            <input type='submit' value='Log In' />
        </form>
    </div>
  )
}
