import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
   <>
     <header className='header'>
        <a href='#'className='logo'><span>Hiba</span>Sheikh</a>
        <nav className="navbar">
            <a href="/" className='active'>Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </nav>
        <a href="#" className='contact'>Contact me</a>
     </header>
     <section className="home">
       <div className="home-content">
         <h3>Hi</h3>
         <h1>I&apos;m<span>Hiba Sheikh<br/></span>A Frontend  Developer</h1>
         <div className="btn">
           <button className='btn1'>Hire Me</button>
         </div>
       </div>
        <div className="img-box">
         <Image src="/p1.png" alt="img" width={350} height={450}/>
       </div>
     </section>
    </>
  )
}

export default Header