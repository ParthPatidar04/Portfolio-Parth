import React from 'react'

function Contact() {
    return (
        <div>
            <div className='mt-14 text-[40px] text-violet-500 text-center font-extrabold animate-fadeIn'>Contact Me</div>
            <div className='mt-4 animate-fadeIn'>
                <div className='mx-14 my-4'>
                    <div className='mb-1'>Name</div>
                    <input className='bg-[#212121] text-white border border-white p-2 w-[95%] rounded-lg' type="text" placeholder='peter parker' />
                </div>
                <div className='mx-14 my-4'>
                    <div className='mb-1'>Email</div>
                    <input className='bg-[#212121] text-white border border-white p-2 w-[95%] rounded-lg' type="text" placeholder='peterparker@gmail.com' />
                </div>
                <div className='mx-14 my-4'>
                    <div className='mb-1'>Message</div>
                    <textarea className='bg-[#212121] text-white border border-white p-2 w-[95%] h-36 rounded-lg resize-none' placeholder='enter message' name="" id=""></textarea>
                </div>
                <div className='mx-14 my-4'>
                    <button className='bg-violet-500 w-[95%] p-2 rounded-lg font-bold text-white'>Send Message</button>
                </div>
            </div>

        </div>
    )
}

export default Contact