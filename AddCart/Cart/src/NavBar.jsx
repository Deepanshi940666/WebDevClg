import React from 'react'
import Home from './Home'
import About from './About'
import Cart from './Cart'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div id='navbar'>
        <Link className="nav-link" to={"/"}>
          <div id='home'>Home</div>
        </Link>
        <Link className="nav-link" to={"/About"}>
          <div id='about'>About</div>
        </Link>
        <Link className="nav-link" to={"/Cart"}>
         <div id='cart'>Cart</div>
        </Link>  
    </div>
  )
}

export default NavBar