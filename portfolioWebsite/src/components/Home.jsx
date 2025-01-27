import React from 'react'
import profile from '../assets/profilePhoto.jpeg'

function Home() {

    return (
        <div className='flex flex-col justify-center items-center md:mt-52 mt-40'>
            <div>
                <img className='w-40 h-40 md:w-60 md:h-60 border-4 border-white rounded-[80px] md:rounded-[120px] animate-imgFadeIn' src={profile} alt="profile" />
            </div>
            <div className={`mt-6 text-[35px] font-extrabold animate-fadeIn`}>Hi, I'm <span className='text-violet-500'>Parth</span></div>
            <div className='mt-4 md:text-2xl text-xl font-bold animate-fadeIn'>A Passionate <span className='text-violet-500'>Frontend Developer</span></div>
            <button className='mt-6 bg-violet-500 px-4 py-3 rounded-2xl font-bold duration-300 ease-in transition-all hover:px-5 hover:py-4 animate-fadeIn'>View My Resume</button>
        </div>
    )
}

export default Home