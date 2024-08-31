import React from 'react'
import Topic_Card from '../../../components/imageCard/topic_Card/Topic_Card'

function All_React_Topic() {
  return (
    <div className='bg-gray-900 text-white'>
         <h1 className='text-3xl font-semibold underline px-20 py-4 '>All React Topic :-</h1>
         <div className='flex gap-6 flex-wrap justify-center py-6'>
          <Topic_Card posterName="Mapping" title="Mapping" url="/mapping" />
          <Topic_Card posterName="C-R" title="Conditional Routing" url="/conditional-routing" />
          <Topic_Card posterName="Define React" title="Define React" url="/define-react" />
          <Topic_Card posterName="Props" title="React Router" url="/" />
          <Topic_Card posterName="Props" title="React Router" url="/" />
          <Topic_Card posterName="Props" title="React Router" url="/" />
          <Topic_Card posterName="Props" title="React Router" url="/" />
          <Topic_Card posterName="Props" title="React Router" url="/" />
         </div>
    </div> 
  )
}

export default All_React_Topic
