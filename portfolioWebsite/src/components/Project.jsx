import React from 'react'
import Bg from '../assets/BackGroundColor.jpeg'
import BMI from '../assets/BMI.jpeg'
import NetflixImg from '../assets/Netflix.jpeg'
import PortFolio from '../assets/PortfolioImg.png'
import TaskMate from '../assets/TaskMate.png'
import { useTheme } from '../themeContext'

function Project() {

  const {theme, toggleTheme} = useTheme();

  return (
    <div className='animate-fadeIn'>
      <div className='font-extrabold text-[40px] text-center text-violet-500 mt-8'>My Projects</div>
      <div className='flex md:flex-row flex-col gap-y-5 flex-wrap justify-between items-center mx-8 my-6'>
        <div className={`flex flex-col gap-y-4 w-[90%] md:w-[45%] items-center border border-black rounded-3xl py-3 ${theme=="dark" ? 'bg-[#292928]' : 'bg-white'}`}>
          <div className='md:text-2xl text-xl font-bold text-violet-500'>Portfolio</div>
          <div><img className='md:w-64 md:h-36 w-48 h-24' src={PortFolio} alt="photo" /></div>
          <div className='flex flex-col gap-y-2'>
            {/* <button className='bg-violet-500 md:w-48 w-32 p-2 rounded-3xl font-bold text-white'>
              <a href="http://localhost:5173/">Live Link</a>
            </button> */}
            <button className='md:w-48 w-32 p-2 font-bold rounded-3xl bg-violet-500 text-white'>
              <a href="https://github.com/ParthPatidar04/Portfolio-Parth">Github Link</a>
            </button>
          </div>
        </div>
        <div className={`flex flex-col gap-y-4 w-[90%] md:w-[45%] items-center border border-black rounded-3xl py-3 ${theme=="dark" ? 'bg-[#292928]' : 'bg-white'}`}>
          <div className='md:text-2xl text-xl font-bold text-violet-500'>TaskMate</div>
          <div><img className='md:w-64 md:h-36 w-48 h-24' src={TaskMate} alt="photo" /></div>
          <div className='flex flex-col gap-y-2'>
            {/* <button className='bg-violet-500 md:w-48 w-32 p-2 rounded-3xl font-bold text-white'>
              <a href="http://localhost:5173/">Live Link</a>
            </button> */}
            <button className='md:w-48 w-32 p-2 font-bold rounded-3xl bg-violet-500 text-white'>
              <a href="https://github.com/ParthPatidar04/TaskMateWeb">Github Link</a>
            </button>
          </div>
        </div>
        <div className={`flex flex-col gap-y-4 w-[90%] md:w-[45%] items-center border border-black rounded-3xl bg-[#292928] py-3 ${theme=="dark" ? 'bg-[#292928]' : 'bg-white'}`}>
          <div className='md:text-2xl text-xl font-bold text-violet-500'>BMI Calculator</div>
          <div><img className='md:w-64 md:h-36 w-48 h-24' src={BMI} alt="photo" /></div>
          <div className='flex flex-col gap-y-2'>
            {/* <button className='bg-violet-500 md:w-48 w-32 p-2 rounded-3xl font-bold text-white'>
              <a href="">Live Link</a>
            </button> */}
            <button className='md:w-48 w-32 p-2 font-bold rounded-3xl bg-violet-500 text-white'>
              <a href="https://github.com/ParthPatidar04/BMI-Calculator">Github Link</a>
            </button>
          </div>
        </div>
        <div className={`flex flex-col gap-y-4 w-[90%] md:w-[45%] items-center border border-black rounded-3xl bg-[#292928] py-3 ${theme=="dark" ? 'bg-[#292928]' : 'bg-white'}`}>
          <div className='md:text-2xl text-xl font-bold text-violet-500'>BackGround Color Changer</div>
          <div><img className='md:w-64 md:h-36 w-48 h-24' src={Bg} alt="photo" /></div>
          <div className='flex flex-col gap-y-2'>
            {/* <button className='bg-violet-500 md:w-48 w-32 p-2 rounded-3xl font-bold text-white'>
              <a href="">Live Link</a>
            </button> */}
            <button className='md:w-48 w-32 p-2 font-bold rounded-3xl bg-violet-500 text-white'>
              <a href="https://github.com/ParthPatidar04/ColorChanger">Github Link</a>
            </button>
          </div>
        </div>
        <div className={`flex flex-col gap-y-4 w-[90%] md:w-[45%] items-center border border-black rounded-3xl bg-[#292928] py-3 ${theme=="dark" ? 'bg-[#292928]' : 'bg-white'}`}>
          <div className='md:text-2xl text-xl font-bold text-violet-500'>Netflix UI Clone</div>
          <div><img className='md:w-64 md:h-36 w-48 h-24' src={NetflixImg} alt="photo" /></div>
          <div className='flex flex-col gap-y-2'>
            {/* <button className='bg-violet-500 md:w-48 w-32 p-2 rounded-3xl font-bold text-white'>
              <a href="">Live Link</a>
            </button> */}
            <button className='md:w-48 w-32 p-2 font-bold rounded-3xl bg-violet-500 text-white'>
              <a href="https://github.com/ParthPatidar04/Netflix-Clone-Project">Github Link</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project