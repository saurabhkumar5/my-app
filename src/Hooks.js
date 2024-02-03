import React, { useState } from 'react'

const Hooks = () => {

    let [a,b]  = useState(0)     


  return (
    <div>
         <h1>{a}</h1>
         <button onClick={()=>b(a+1)}>+</button>
         <button onClick={()=>b(a-1)}>-</button>
    </div>
  )
}

export default Hooks