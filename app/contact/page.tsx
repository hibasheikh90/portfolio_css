import React from 'react'

const Contact = () => {
  return (
    <>
      <section className='contact-form'>
        <h2>Contact <span>Me</span></h2>
        <form action='#'>
            <div className="input-box">
                <input type="text" placeholder='Full Name' />
                <input type="email" placeholder='Enter Your Email' />
            </div>
            <div className="input-box">
                <input type="number" placeholder='Phone Number' />
            </div>
            <textarea cols={20} rows={7} placeholder='Your Message'></textarea>
            
            {/* Centered Button */}
            <div className="btn-wrapper">
                <input type="submit" value='Send Message' className='btn2' />
            </div>
        </form>
      </section>
    </>
  );
};

export default Contact;