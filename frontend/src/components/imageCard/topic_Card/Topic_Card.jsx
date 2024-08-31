import React from 'react'
import { Link } from 'react-router-dom'

function Topic_Card({posterName , title , url}) {
  return (
    <>
    <div className='w-[20%] flex flex-col justify-between border-2 rounded-xl hover:border-yellow-400 hover:border-4 border-white p-2'>
      <div className='flex justify-center bg-gray-300 rounded-xl text-black text-4xl font-bold py-20'>
        <h1 className=' '>{posterName}</h1>
      </div>
      <div className='flex justify-between items-center p-4 '>
            <h1>{title}</h1>
            <Link to={url} className='px-2 py-1 bg-blue-800 rounded-xl'>Open</Link>
      </div>
    </div> 
    </>
  )
}

export default Topic_Card
