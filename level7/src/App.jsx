import React from 'react'
import Nav from './Components/Nav'
import "./App.css"
import Footer from './Components/Footer'

import {Outlet} from "react-router"

const App = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default App
