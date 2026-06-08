import React, { useState } from 'react'
import NavBar from './NavBar'
// import React from 'react'
import Home from './Home'
import About from './About'
import Cart from './Cart'
import './App.css'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  let [apiData, setApiData] = useState([]);
  let [cart, setCart] = useState([]);
  return (
    <div id='Container'>
      <NavBar/>
      <div id='content'>
        <Routes>
        <Route path='/' element={<Home apiData={apiData} setApiData={setApiData} cart={cart} setCart={setCart} />}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>
      </Routes>
      </div>
  
    </div>
  )
}

export default App