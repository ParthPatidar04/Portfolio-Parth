import React from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <div className='flex flex-col justify-between  min-h-screen'>
            <Navigation />
            <Outlet />
            <div className='border border-black shadow-[0_-8px_6px_-1px_rgba(0,0,0,0.5)]'>
                <Footer />
            </div>
            </div>
            
            
        </>
    )
}

export default Layout