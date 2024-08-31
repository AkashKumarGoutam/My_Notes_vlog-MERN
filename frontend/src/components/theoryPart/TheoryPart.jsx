import React from 'react'

function TheoryPart(props) {
  return (
    <>
              {/* thory part */}
              <div className="flex bg-gray-900 text-white p-4 gap-4">
        <div className="w-[50%]  border-r-2 border-black">
         <h1 className="text-xl font-semibold underline">{props.heading}</h1>
         <p> {props.paragraph}</p>
        </div>
        <div className="w-[50%] bg-blue-100 p-2">
            {props.img}
        </div>
      </div>
      {/* end thoery part */}
    </>
  )
}
 
export default TheoryPart
