import React from 'react'
import "./Hero.css"
import Card from '../Card/Card'
import Mustang from "../../assets/Mustang.jpg"
import Porsche from "../../assets/Porsche.jpg"
import Oldcar from "../../assets/Oldcar.jpg"

const Hero = () => {
  return (
    <div className='hero'>
      <Card name="Mustang" price="1.9cr" imageURL={Mustang}/>
      <Card name="Porsche" price="2.5cr" imageURL = {Porsche}/>
      <Card name="Oldcar" price="1.5cr" imageURL={Oldcar}/>
    </div>
  )
}

export default Hero
