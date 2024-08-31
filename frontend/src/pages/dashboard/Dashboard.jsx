import React, { useEffect } from 'react'
import ImageCard from '../../components/imageCard/ImageCard'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate()
  Axios.defaults.withCredentials=true;
  useEffect(()=>{
    Axios.get("http://localhost:3000/auth/verify")
    .then(res =>{
      if(res.data.status){
        console.log(res.data.status)

      }else{
        navigate('/')
      }
      console.log(res)
    })
  },[])
  return (
    <>
       <div className='bg-gray-900 text-white'>
         <h1 className='text-3xl font-semibold underline px-20 py-4'>All Courses  :-</h1>
         <div className='flex gap-6 flex-wrap justify-center py-10'>
          <ImageCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_e4LAoR2UNXygFyAmqv__4b0LzQJPwMghhA&s" title="React Js Notes" url="/all_react_topic" />
          <ImageCard img="https://static-00.iconduck.com/assets.00/nodejs-icon-2048x2048-rueyo8fw.png" title="Node Js Notes" url="/" />
          <ImageCard img="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" title="Express Js Notes" url="/" />
          <ImageCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKXf-xZMRVO-B6xuN1L9kM39lVwRbVSdHYSA&s" title="MongoDB Notes" url="/" />
         </div>
    </div> 
    </>
  )
}

export default Dashboard
