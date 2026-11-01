// npm create vite@latest level2

import React from 'react'
import Jashan from './Jashan'
import './App.css'

const App = () => {
  let name = "Jashan"
  return (
    <div>
      <h1>Hello</h1>
      <Jashan />
      {name}
      <div className="box">

      </div>
    </div>
  )
}

export default App
