import React from 'react'
import profile from '../assets/profilePhoto.jpeg'

function Home() {
    return (
            <div className='flex md:flex-row flex-col h-screen md:justify-around items-center md:items-center '>
                <div className='animate-slide-left-to-right text-blue-800'>
                    <div className='text-2xl'>
                        Hello, I'm Parth,
                    </div>
                    <div className='text-[70px] font-extrabold'>
                        WEB <br /> DEVELOPER
                    </div>
                    <div className='text-2xl'>
                        based in India
                    </div>
                </div>
                <div className=''>
                    <img className='w-96 h-96 rounded-[180px]' src={profile} alt="" />
                </div>
            </div>
    )
}

export default Home