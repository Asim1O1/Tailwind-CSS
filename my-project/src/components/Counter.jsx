import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
      <button className='bg-red-500 w-10 h-10'>Increment</button>
      <button className='bg-blue-500 w-10 h-10'>Decrement</button>
    </div>


  )
}

export default Counter