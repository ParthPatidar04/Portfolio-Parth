import React from 'react'
import profile from '../assets/profilePhoto.jpeg'

function Home() {
    return (
            <div className='flex md:flex-row flex-col gap-y-10 h-screen mt-10 md:justify-around items-center md:items-center '>
                <div className='animate-slide-left-to-right text-blue-800'>
                    <div className='md:text-2xl text-xl'>
                        Hello, I'm Parth,
                    </div>
                    <div className='md:text-[70px] text-[50px] font-extrabold'>
                        WEB <br /> DEVELOPER
                    </div>
                    <div className='md:text-2xl text-xl'>
                        based in India
                    </div>
                </div>
                <div className='order-first md:order-last'>
                    <img className='md:w-96 md:h-96 w-80 h-80 rounded-[180px]' src={profile} alt="" />
                </div>
            </div>
    )
}

export default Home