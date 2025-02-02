import React, { useState } from 'react'
import sun from '../assets/sun.svg'
// import moon from '../assets/moon.svg'
// import darkMenu from '../assets/dark-menu.svg'
import whiteMenu from '../assets/white-menu.svg'
// import blackCross from '../assets/black-cross.svg'
import whiteCross from '../assets/white-cross.svg'


function Navigation() {

   

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
                <div className={`md:hidden fixed left-0 top-0 w-full h-[50%] bg-[#212121] text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform`}>
                    <img onClick={toggleSideBar} className='absolute top-4 right-4 p-2' src={whiteCross} alt="close" />
                    <div className="flex flex-col items-center mt-12 space-y-6">
                        <a href="#" className="text-lg cursor-pointer">Home</a>
                        <a href="#" className="text-lg cursor-pointer">About</a>
                        <a href="#" className="text-lg cursor-pointer">Projects</a>
                        <a href="#" className="text-lg cursor-pointer">Skills</a>
                        <a href="#" className="text-lg cursor-pointer">Contact</a>
                    </div>
                </div>
                <ul className='hidden md:flex md:gap-x-10'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Projects</li>
                    <li className='cursor-pointer'>Skills</li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>
                <div className='mr-2'>
                      <img src={sun} alt="" />
                    </div>
            </nav>
        </div>
    )
}

export default Navigation
