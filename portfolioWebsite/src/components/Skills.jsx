import React from 'react'

function Skills() {
    return (
        <div className='flex flex-col items-center justify-center animate-fadeIn'>
            <div className='text-[40px] font-extrabold text-violet-500 mt-14 mb-8'>My Skills</div>
            <div className='flex flex-wrap justify-center gap-y-6 gap-x-32 mt-6'>
                <div className=' w-80 text-center p-4 rounded-2xl bg-[#292928]'>
                    <div className='font-bold text-3xl text-violet-500'>Frontend</div>
                    <ul className='mt-4 text-white'>
                        <li className='mb-2 text-xl border border-none rounded-2xl p-2 bg-[#4a4846]'>HTML</li>
                        <li className='mb-2 text-xl border border-none rounded-2xl p-2 bg-[#4a4846]'>CSS</li>
                        <li className='mb-2 text-xl border border-none rounded-2xl p-2 bg-[#4a4846]'>JavaScript</li>
                        <li className='mb-2 text-xl border border-none rounded-2xl p-2 bg-[#4a4846]'>React</li>
                        <li className='mb-2 text-xl border border-none rounded-2xl p-2 bg-[#4a4846]'>Tailwind CSS</li>
                    </ul>
                </div>
                <div className=' w-80 mb-6 text-center p-4 rounded-2xl bg-[#292928]'>
                    <div className='font-bold text-3xl text-violet-500'>Tools</div>
                    <ul className='mt-4 text-white'>
                        <li className='mb-2 text-xl border border-none rounded-2xl p-2 bg-[#4a4846]'>Git</li>
                        <li className='mb-2 text-xl border border-none rounded-2xl p-2 bg-[#4a4846]'>GitHub</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills