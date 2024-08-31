import React from 'react'
import linkedinImg from '../../assets/icons8-linkedin-240.png'
import githubImg from '../../assets/icons8-github-192.png'
import { Link } from 'react-router-dom'

function LinkSection() {
  return (
    <div className='bg-gray-300 p-10 border-2 border-black'>
         <h1 className='flex justify-center item-center text-2xl font-semibold underline p-3 pb-6'>This is Social Media Link</h1>
      <div className='flex gap-20 justify-center item-center'>
        <div> 
            <img src={linkedinImg} className='w-20 cursor-pointer' alt=''/>
            <Link to='https://www.linkedin.com/in/akash-kumar-goutam-%F0%9F%87%AE%F0%9F%87%B3-8898b6229/' target='blank' className='text-mb font-semibold pl-2 cursor-pointer'>LinkedIn</Link>
        </div>
        <div>
            <img src={githubImg} className='w-20 cursor-pointer' alt=''/>
            <Link to='https://github.com/AkashKumarGoutam' target='blank' className='text-mb font-semibold pl-4 cursor-pointer'>Github</Link>
        </div>
      </div>
    </div>
  )
}

export default LinkSection
