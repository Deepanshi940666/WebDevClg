import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div id='navbar'>
        <Link to={'/'}>
            <div id='home'>Home</div>
        </Link>
        <Link to={'/about'}>
            <div id='about'>About</div>
        </Link>
        <Link to={'/task'}>
             <div id='task'>Task</div>
        </Link>
        
       
    </div>
  )
}

export default NavBar