import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { use } from 'react'
import { useState } from 'react'

const App = () => {
  let count= useRef(0);
  let [num,setNum] = useState(0)

  useEffect(()=>{
    count.current = count.current + 1
  })
  return (
    <div>
      <h1>{count.current}</h1>
      <h1>{num}</h1>
      <button onClick={()=>setNum(++num)}>num</button>
    </div>
  )
}

export default App
