import React from 'react'
import logo from '../assets/logo.svg'
const Navbar = () => {
    return (
        <div className='flex flex-row justify-between items-center  bg-white'>
            <img src={logo} alt='logo' />
        </div>
    )
}

export default Navbar
