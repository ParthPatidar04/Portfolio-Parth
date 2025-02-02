import React from 'react'
import whiteTwitter from '../assets/white-twitter.svg'
import blackTwitter from '../assets/black-twitter.svg'
import whiteLinkedIn from '../assets/white-linkedin.svg'
import blackLinkedIn from '../assets/black-linkedin.svg'
import whiteInstagram from '../assets/white-instagram.svg'
import blackInstagram from '../assets/black-instagram.svg'
import whiteGithub from '../assets/white-github.svg'
import blackGithub from '../assets/black-github.svg'
import { useTheme } from '../themeContext'

function Footer() {

    const {theme, toggleTheme} = useTheme()
    console.log(theme);
    

    return (
        <div className='flex flex-col gap-y-1 justify-end md:mb-6 mb-2'>
            <div className='font-bold'>Follow me on:</div>
            <ul className='flex gap-x-2'>
                <li>
                    <a href="https://x.com/ParthPatidar004?t=hOHeZDcVUXPs7E1YbhheqQ&s=09"><img className='w-10' src={theme=="dark" ? whiteTwitter : blackTwitter} alt="" /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/parthpatidar2004?utm_source=share&utm_campaign=share_via&utm_content=pro"><img className='w-10' src={theme=="dark" ? whiteLinkedIn : blackLinkedIn} alt="" /></a>
                </li>
                <li>
                    <a href="https://github.com/ParthPatidar04"><img className='w-10' src={theme=="dark" ? whiteGithub : blackGithub} alt="" /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/parth_patidar04/"><img className='w-10' src={theme=="dark" ? whiteInstagram : blackInstagram} alt="" /></a>
                </li>
            </ul>
            <div className='font-bold'>&copy; 2025 Parth. All Rights Reserved</div>
        </div>
    )
}

export default Footer