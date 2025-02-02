import React from 'react'
import { useTheme } from '../themeContext'

function Skills() {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className='flex flex-col items-center justify-center animate-fadeIn'>
            <div className='text-[40px] font-extrabold text-violet-500 mt-14 mb-8'>My Skills</div>
            <div className='flex flex-wrap justify-center gap-y-6 gap-x-32 mt-6'>
                <div className={`w-80 text-center p-4 border rounded-2xl ${theme=="dark" ? 'bg-[#292928] border-white' : 'bg-white'}`}>
                    <div className='font-bold text-3xl text-violet-500'>Frontend</div>
                    <ul className='mt-4 text-white'>
                        <li className={`mb-2 text-xl border border-none rounded-2xl p-2 ${theme=="dark" ? 'bg-[#4a4846]' : 'bg-[#d0d1cb] text-black' }  `}>HTML</li>
                        <li className={`mb-2 text-xl border border-none rounded-2xl p-2 ${theme=="dark" ? 'bg-[#4a4846]' : 'bg-[#d0d1cb] text-black' }  `}>CSS</li>
                        <li className={`mb-2 text-xl border border-none rounded-2xl p-2 ${theme=="dark" ? 'bg-[#4a4846]' : 'bg-[#d0d1cb] text-black' }  `}>JavaScript</li>
                        <li className={`mb-2 text-xl border border-none rounded-2xl p-2 ${theme=="dark" ? 'bg-[#4a4846]' : 'bg-[#d0d1cb] text-black' }  `}>React</li>
                        <li className={`mb-2 text-xl border border-none rounded-2xl p-2 ${theme=="dark" ? 'bg-[#4a4846]' : 'bg-[#d0d1cb] text-black' }  `}>Tailwind CSS</li>
                    </ul>
                </div>
                <div className={`w-80 mb-6 text-center p-4 border rounded-2xl ${theme=="dark" ? 'bg-[#292928] border-white' : 'bg-white'}`}>
                    <div className='font-bold text-3xl text-violet-500'>Tools</div>
                    <ul className='mt-4 text-white'>
                        <li className={`mb-2 text-xl border border-none rounded-2xl p-2 ${theme=="dark" ? 'bg-[#4a4846]' : 'bg-[#d0d1cb] text-black' }  `}>Git</li>
                        <li className={`mb-2 text-xl border border-none rounded-2xl p-2 ${theme=="dark" ? 'bg-[#4a4846]' : 'bg-[#d0d1cb] text-black' }  `}>GitHub</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills