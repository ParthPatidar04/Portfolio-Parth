import React from 'react'
import sun from '../assets/sun.svg'

function ThemeBtn() {
  return (
    <div className='mr-2'>
          <img className='cursor-pointer' src={sun} alt="mode" />
        </div>
  )
}

export default ThemeBtn