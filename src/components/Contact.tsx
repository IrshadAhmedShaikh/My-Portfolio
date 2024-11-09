import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";



const Contact = () => {
  return (
    <div id='contact' className='py-32 container'>
        <div className='grid md:grid-cols-2 gap-2'>
            <div className='space-y-8'>
                <h2 className='text-4xl'data-aos="zoom-in-up">Contact us</h2>
                <p className='text-gray-600 text-[18px] pt-1'data-aos="zoom-in-up">
                    Drop me a line, give me a call,or send me a message by submiting the foam.
                </p>
                <div className='flex gap-3 items-center'data-aos="zoom-in-up">
                <MdOutlineMailOutline size={30}/>airshadahmedshaikh@gmail.com
                </div>
                <div className='flex gap-3 items-center'data-aos="zoom-in-up">
                <BsTelephone size={30}/>0923003198404
                </div>
                <div className='flex gap-3 items-center'data-aos="zoom-in-up">
                <SlSocialFacebook size={30}/>irshad.ahmed404@gmail.com
                </div>
                <div className='flex gap-3 items-center'data-aos="zoom-in-up">
                <SlSocialLinkedin size={30}/>www.linkedin.com/in/
irshad-ahmed-3238452b4

                </div>
                
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                    <label htmlFor='name'>Name</label>
                    <input type='text'
                    className='h-[40px] bg-transparent border border-accent'
                    id='name'/>
                </div>
                 <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                    <label htmlFor='email'>Email</label>
                    <input type='text'
                    className='h-[40px] bg-transparent border border-accent'
                    id='email'/>
                </div>
                <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                    <label htmlFor='message'>Message</label>
                    <textarea
                    className='bg-transparent border border-accent'
                    id='message' rows={5}>
                    </textarea>
                </div>
                <button className='bg-accent p-2 px-6 rounded-md'data-aos="zoom-in-up">Send</button>
            </div>
        </div>

    </div>
  )
}

export default Contact