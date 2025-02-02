import React, { useState } from 'react'
import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'
// import darkMenu from '../assets/dark-menu.svg'
import whiteMenu from '../assets/white-menu.svg'
// import blackCross from '../assets/black-cross.svg'
import whiteCross from '../assets/white-cross.svg'
import {Link} from 'react-router-dom'
import { useTheme } from '../themeContext'


function Navigation() {

   const {isDarkMode, toggleTheme} = useTheme();
   

    const [isOpen, setIsOpen] = useState(false);

    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <nav className='flex justify-between md:justify-around items-center h-12 -[#212121]'>
                <div className='md:hidden ml-2'>
                    <img className='cursor-pointer' onClick={toggleSideBar} src={whiteMenu} alt="menu" />
                </div>
                <div className={`md:hidden z-10 fixed left-0 top-0 w-full h-[50%] bg-[#212121] text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform`}>
                    <img onClick={toggleSideBar} className='absolute top-4 right-4 p-2' src={whiteCross} alt="close" />
                    <div className="flex flex-col items-center mt-12 space-y-6">
                        <Link to='/' className="text-lg cursor-pointer">Home</Link>
                        <Link to='/about' className="text-lg cursor-pointer">About</Link>
                        <Link to='/projects' className="text-lg cursor-pointer">Projects</Link>
                        <Link to='/skills' className="text-lg cursor-pointer">Skills</Link>
                        <Link to='/contact' className="text-lg cursor-pointer">Contact</Link>
                    </div>
                </div>
                <ul className='hidden md:flex md:gap-x-10'>
                    <Link to='/' className='cursor-pointer'>Home</Link>
                    <Link to='/about' className='cursor-pointer'>About</Link>
                    <Link to='/projects' className='cursor-pointer'>Projects</Link>
                    <Link to='/skills' className='cursor-pointer'>Skills</Link>
                    <Link to='/contact' className='cursor-pointer'>Contact</Link>
                </ul>
                <div className='mr-2'>
                      <img onClick={toggleTheme} src={isDarkMode ? sun : moon} alt="" />
                    </div>
            </nav>
        </div>
    )
}

export default Navigation
