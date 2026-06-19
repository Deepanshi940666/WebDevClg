import React from 'react'
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    // <div>
        <div className="navbar">
      <div className="logo">🍴 Savora</div>

      {/* <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul> */}
      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Menu</li>
        <li>Events</li>
        <li>Contact</li>
      </ul>
    {/* </div> */}
    </div>
  )
}

export default Nav