import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  let [count,setCount] = useState(0)
  let [count2,setCount2] = useState(0)


  useEffect(()=>{
    setTimeout(()=>{
      setCount(++count)
    },1000)
  },[count2])

  return (
    <div>
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <button onClick={()=>setCount(++count)}>Count1</button>
      <button onClick={()=>setCount2(++count2)}>Count2</button>
    </div>
  )
}

export default App
