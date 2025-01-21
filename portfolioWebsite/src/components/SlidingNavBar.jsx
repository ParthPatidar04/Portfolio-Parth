import React, { useState } from 'react'

function SlidingNavBar() {

    // State to toggle side bar visibility.
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    // Function to toggle side bar.
    const toggleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen);
    }

    return (
        <div className='flex h-screen'>
            {/* Making side bar */}
            <div className={`fixed top-0 right-0 h-full bg-gray-800 text-white w-64 transform ${isSideBarOpen ? 'translate-x-0' : 'translate-x-full'}
                         transition-transform duration-300 ease-in-out`}></div>
            <div className='flex justify-end'>
                <svg onClick={toggleSideBar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M4 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4 19L20 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <ul className="p-4">
                <li className="mb-4">Home</li>
                <li className="mb-4">About</li>
                <li className="mb-4">Work</li>
            </ul>
            {/* Main Content */}
            <div>
                <svg onClick={toggleSideBar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M4 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4 19L20 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    )
}

export default SlidingNavBar
