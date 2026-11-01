import React from 'react'
import { useContext } from 'react'
import { data } from './context/UserContext'

const App = () => {
 let name = useContext(data)

  return (
    <div>
      <h1>I am an App Component</h1>
    </div>
  )
}

export default App
