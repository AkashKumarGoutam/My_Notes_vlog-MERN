import React from 'react'
import TheoryPart from '../../theoryPart/TheoryPart'

function VirtualDom() {
  return (
    <div>
      <TheoryPart
      heading="Virtual DOM"
      paragraph='React uses Virtual DOM which is like a lightweight copy of the actual DOM(a virtual representation of the DOM). So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is the same, but it does not have the power to directly change the layout of the document. Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen. So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM.'
      img={<img src='https://static.javatpoint.com/tutorial/reactjs/images/reactjs-features.png' alt='img'/>}/>
    </div>
  )
}

export default VirtualDom
