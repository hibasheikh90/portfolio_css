import React from 'react'

function Navbar() {
  return (
    <div>
<header className='header'>
        <a href='#'className='logo'><span>Hiba</span>Sheikh</a>
        <nav className="navbar">
            <a href="/" className='active'>Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>  
        </nav>
     </header>
    </div>
  )
}

export default Navbar
