import React from 'react'
import { FaTooth } from 'react-icons/fa'
import { FiLoader } from "react-icons/fi";


export default function Loading() {
  return (
    <div className='loading'>
        <div className='logo'>
            <FaTooth className='icon' />
            <h1>LuxSmile</h1>
        </div>
        <FiLoader className='icon' />
    </div>
  )
}
