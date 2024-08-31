import React from 'react'
import TheoryPart from '../../components/theoryPart/TheoryPart'

function JavascriptXML() {
  return (
    <div>
      <TheoryPart
      heading="JSX (JavaScript XML)"
      paragraph="JSX is basically a syntax extension of regular JavaScript and is used to create React elements. These elements are then rendered to the React DOM. All the React components are written in JSX. To embed any JavaScript expression in a piece of code written in JSX we will have to wrap that expression in curly braces {}. 

Example of JSX: The name written in curly braces { } signifies JSX
"
img={<img src='https://static.javatpoint.com/tutorial/reactjs/images/reactjs-features.png' alt='img'/>}/>
    </div>
  )
}

export default JavascriptXML
