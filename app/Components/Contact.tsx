import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id='contact' className=' pt-32 container '>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="fade-down">Get in touch</h2>
                <p className='text-gray-600 text-[18px] pt-2'>
                    Drop me a line, give me a call , or send me a message by a submitting the form.
                </p>
                <div className='flex gap-3 items-center' data-aos="fade-down">
                <HiOutlineMail size={30}/> saimshaikh0003@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="fade-down">
                <BsTelephoneOutboundFill  size={30}/> (+92)317-3894947
                </div>
                <div className='flex gap-3 items-center' data-aos="fade-down">
                <FaLinkedin size={30}/> <a href="https://www.linkedin.com/in/saim-shaikh-a7459a290/">Linkedin.com/in/saim-shaikh</a>
                </div>

                <div className='flex gap-3 items-center' data-aos="fade-down">
                <FaSquareXTwitter  size={30}/> <a href="https://x.com/Saimshaikh111">X.com/Saim-shaikh111</a>
                </div>

               </div>
               <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="fade-down">
                  <label htmlFor="name">Name</label>
                  <input type="text"
                  className='h-[40px] bg-transparent border border-cyan-700'
                  id='name' />
                </div>
                <div className='flex flex-col gap-1' data-aos="fade-down">
                  <label htmlFor="email">Email</label>
                  <input type="text"
                  className='h-[40px] bg-transparent border border-cyan-700'
                  id='email' />
                </div>

                <div className='flex flex-col gap-1' data-aos="fade-down">
                  <label htmlFor="msg">Message</label>
                  <textarea
                  className='bg-transparent border border-cyan-700'
                  id='msg' rows={8}>
                  </textarea>
                </div>
                <button className='bg-cyan-700 p-2 px-7 justify-center items-center ' >Send</button>

               </div>
        </div>
      
    </div>
  )
}

export default Contact
