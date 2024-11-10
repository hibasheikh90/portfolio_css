import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <>
     <section className='about'>
        <div className="about-img">
            <Image src="/p1.png" alt="img"  width={350} height={450}/>
        </div>
        <div className='about-content'>
            <h2 className='heading'>About <span>Me</span> </h2>
            <h3>Frontend<span>Developer</span></h3>
            <p>Hi, I&apos;m Hiba Sheikh, a dedicated and enthusiastic Frontend Developer with a passion for crafting intuitive and visually appealing websites. Recently, I have been focused on building my skills in HTML, CSS, JavaScript, and React, and I am eager to apply what I have learned to real-world projects.

            As a self-motivated learner, I am constantly exploring new technologies and best practices to stay updated with the latest trends in frontend development. Although I am a fresher in the industry, my dedication to writing clean, efficient code and my ability to quickly grasp new concepts make me confident in my potential to contribute to a dynamic team.

            I am excited to bring my creativity and technical skills to a professional setting, where I can grow and refine my abilities while contributing to the development of high-quality, user-friendly web applications.

            Let&apos;s connect and create something amazing together!</p>
        </div>
     </section>
    </>
  )
}

export default About