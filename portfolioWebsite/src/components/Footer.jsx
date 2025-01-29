import React from 'react'
import whiteTwitter from '../assets/white-twitter.svg'
import whiteLinkedIn from '../assets/white-linkedin.svg'
import whiteInstagram from '../assets/white-instagram.svg'
import whiteGithub from '../assets/white-github.svg'

function Footer() {
    return (
        <div>
            <div>Follow me on:</div>
            <ul className='flex'>
                <li>
                    <a href=""><img className='w-10' src={whiteTwitter} alt="" /></a>
                </li>
                <li>
                    <a href=""><img className='w-10' src={whiteLinkedIn} alt="" /></a>
                </li>
                <li>
                    <a href=""><img className='w-10' src={whiteGithub} alt="" /></a>
                </li>
                <li>
                    <a href=""><img className='w-10' src={whiteInstagram} alt="" /></a>
                </li>
            </ul>
            <div>&copy; 2025. All Rights Reserved</div>
        </div>
    )
}

export default Footer