import React from 'react'
import { Navbar } from './Navbar'
import { BiColor } from 'react-icons/bi'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/irshads.png)]  bg-cover rounded-e-lg'
    style={{backgroundSize: "35%", backgroundPosition:"left 100px top 80px"}}>

    <Navbar/>
    <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
      <div className='hidden lg:block'></div>
      <div className='text-[70px] sm:text-[80px] font-bold leading-tight flex justify-center items-center'>
        <div>
         
          <p data-aos="zoom-in-up">Hi <span className='text-purple-800'>I'am</span></p>
          <p className='text-blue-500' data-aos="zoom-in-up">Irshad</p>
          <p className='text-blue-500' data-aos="zoom-in-up">Ahmed</p>
        </div>
      </div>
      
    </div>
    

    </div>
  )
}

export default Hero