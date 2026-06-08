// import ApiFetch from './ApiFetch.jsx'
import React from 'react'
import './App.css'
import Search from './Search.jsx'
import NavBar from './NavBar.jsx'
import {useState} from 'react';
import Cart from './Cart.jsx'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  let [ApiData, setApiData] = useState([]);
  return (
    <div>
      <NavBar/>
      <Search ApiData={ApiData} setApiData={setApiData}/>
      {/* <ApiFetch/> */}
      
      <Routes>
        {/* <Route path='/' element={<Home/>}> </Route>
        <Route path='/about' element={<About/>}> </Route> */}
        <Route path='/Cart' element={<Cart/>}> </Route>
      </Routes> 
    </div>
  )
}

export default App