import React, { useState } from 'react'


function Navigation() {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    function toggleSideBar() {
        setIsSideBarOpen(!isSideBarOpen);
    }

    return (
        <div>
            <nav className='flex text-blue-800 h-16 items-center'>
                <div className='w-full justify-between flex md:basis-1/4 md:justify-center font-bold text-3xl'>
                    <div className='cursor-pointer'>Parth Patidar</div>
                    <div className='md:hidden cursor-pointer'>
                        <div className={`fixed top-0 right-0 h-full bg-gray-800 text-white w-64 transform ${isSideBarOpen ? 'translate-x-0' : 'translate-x-full'}
                                        transition-transform duration-300 ease-in-out`}>
                            <div className='flex justify-end mt-2 mr-2'>
                                <svg onClick={toggleSideBar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                                    <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <ul className="flex flex-col items-center mt-8 text-lg">
                                <li className="mb-4">Home</li>
                                <li className="mb-4">About</li>
                                <li className="mb-4">Work</li>
                                <li className='mb-4'><a href="https://www.linkedin.com/in/parthpatidar2004?utm_source=share&utm_campaign=share_via&utm_content=pro">LinkedIn</a></li>
                                <li className='mb-4'><a href="https://x.com/ParthPatidar004?t=hOHeZDcVUXPs7E1YbhheqQ&s=09">Twitter</a></li>
                            </ul>
                        </div>
                        <svg className='animation-ping' onClick={toggleSideBar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className='hidden md:flex md:basis-1/2 md:justify-center md:gap-x-20'>
                    <div className='cursor-pointer'>Home</div>
                    <div className='cursor-pointer'>About</div>
                    <div className='cursor-pointer'>Work</div>
                </div>
                <div className='hidden md:flex md:basis-1/4 md:justify-center md:gap-x-14'>
                    <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                        <path d="M2.50012 12C2.50012 7.52166 2.50012 5.28249 3.89136 3.89124C5.28261 2.5 7.52178 2.5 12.0001 2.5C16.4785 2.5 18.7176 2.5 20.1089 3.89124C21.5001 5.28249 21.5001 7.52166 21.5001 12C21.5001 16.4783 21.5001 18.7175 20.1089 20.1088C18.7176 21.5 16.4785 21.5 12.0001 21.5C7.52178 21.5 5.28261 21.5 3.89136 20.1088C2.50012 18.7175 2.50012 16.4783 2.50012 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.00012 17L11.1937 12.8065M17.0001 7L12.8066 11.1935M12.8066 11.1935L9.7779 7H7.00012L11.1937 12.8065M12.8066 11.1935L17.0001 17H14.2223L11.1937 12.8065" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                        <path d="M7 10V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.00801 7L6.99902 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                </div>
            </nav>
            <div>Second</div>
        </div>
    )
}

export default Navigation
