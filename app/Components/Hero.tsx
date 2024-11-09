
import React from "react"
import Navbar from "./Navbar"

const Hero =  ()  => {
    return(
      <div id="hero" className='min-h-screen bg-no-repeat  bg-[url(/saim1.png)] ] bg-cover'
      style={{backgroundSize : "35%" , backgroundPosition: "left 100px top 100px"}}
      >
      <Navbar /> 
      <div className='container grid  lg:grid-cols-2 h-[calc(100vh-600px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[180px] mt-25 py-11 px-96 font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-down">I AM</p>
            <p data-aos="zoom-in-down">SAIM</p>
            <p data-aos="zoom-in-down">SHAIKH</p>
          </div>
        </div>
        
        </div>     
       </div> 
    )

}

export default Hero