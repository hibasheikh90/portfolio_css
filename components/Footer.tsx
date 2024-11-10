import React from 'react'
import { FaFacebook,FaLinkedin, FaGithub  } from "react-icons/fa";

const Footer = () => {
  return (
    <>
       <footer className='footer'>
        <div className="social">
          <a href="https://github.com/hibasheikh90"><FaGithub /></a>
          <a href="https://www.facebook.com/share/p/CDUNeA9LAMckRds9/"><FaFacebook />
          </a>
          <a href="https://www.linkedin.com/inb4/hiba-sheikh-a437472/"><FaLinkedin /></a>
        </div>
        <ul className='list'>
          <li>
            <a href='#'>FAQ</a>
          </li>
          <li>
            <a href='#'>Servises</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
        <p className='copyright'>© 2024 Hiba Sheikh. All Rights Reserved.</p>
       </footer>
    </>
  )
}

export default Footer