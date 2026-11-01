import React from 'react'
import "./App.css"

// const Box = (props) => {
//   return (
//     <div className='box'>
//       <h1>{props.name}</h1>
//       <h2>{props.specification}</h2>
//     </div>
//   )
// }



const Box = ({name="Kratos",specification="Gamer"}) => {
  return (
    <div className='box'>
      <h1>{name}</h1>
      <h2>{specification}</h2>
    </div>
  )
}

export default Box
