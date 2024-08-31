import React from 'react'
import worldPic from '../../assets/world-pic.png'
import emailPic from '../../assets/email-pic.png'

function Footer() {
  return (
    <div>
      <div className='bg-gray-900 text-white flex justify-between gap-28 p-20'>
        <div>
        <h1 className='text-4xl font-bold hover:text-orange-400'>Get in Touch</h1>
        <p>Welcome to Get In Touch, a revolutionary E-learning platform designed to bring quality education to your fingertips. Whether you are a student, professional, or lifelong learner, our platform offers a wide range of courses tailored to meet your educational needs.</p>
        </div>
        <div className='px-4 py-10 bg-gray-200 flex flex-col gap-4 text-black rounded-xl justify-center items-center'>
          <img src={worldPic} className='' alt='img'/>
          <h1 className='font-semibold text-sm'>akashkumargoutam@gmail.com</h1>
        </div>
        <div className='px-4 py-10 bg-gray-200 flex flex-col gap-4 text-black rounded-xl justify-center items-center'>
          <img src={emailPic} className='' alt='img'/>
          <h1 className='font-semibold text-sm'>akashkumargoutam@gmail.com</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
