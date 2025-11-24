import React, { useState } from 'react'

const Counter = () => {
    // let count = 0;
    let [count,setCount] = useState(0);
    
    let increase = ()=>{
        console.log('clicked')
        // count+=1;
        setCount(count+1);
        console.log(count)
    }
  return (
    <div>
        <h2>count is {count}</h2>
        <button onClick={increase}>Click</button>
    </div>
  )
}

export default Counter