import React from 'react'
import {Link} from 'react-router-dom'

function ImageCard({img , title , url}) {
  return (
    <div className='w-[20%] flex flex-col justify-between border-2 rounded-xl hover:border-yellow-400 hover:border-4 border-white p-2'>
      <img src={img} alt='image' className='rounded-lg hover:opacity-90 '/>
      <div className='flex justify-between items-center p-4 '>
            <h1>{title}</h1>
            <Link to={url} className='px-2 py-1 bg-blue-800 rounded-xl'>Open</Link>
      </div>
    </div>
  )
}

export default ImageCard
