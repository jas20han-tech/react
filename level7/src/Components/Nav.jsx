import React from 'react'
import { NavLink , Link} from 'react-router'

const Nav = () => {
  return (
    <nav>
      <h1>LOGO</h1>

      <ul>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/about"><li>About</li></NavLink>
        <NavLink to="/contact"><li>Contact</li></NavLink>

        {/* <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link> */}
      </ul>
    </nav>
  )
}

export default Nav
