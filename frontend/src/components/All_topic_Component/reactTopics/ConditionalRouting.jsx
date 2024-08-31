import React from 'react'
import TheoryPart from '../../theoryPart/TheoryPart'

function ConditionalRouting() {
  return (
    <div>
      <TheoryPart
      heading='Conditional Routing'
      paragraph={<ol className='list-decimal px-8'>
        <li>Displaying content based on certain conditions.</li>
        <li> Allows for dynamic user interfaces.</li>
      </ol>}
      />
    </div>
  )
}

export default ConditionalRouting
