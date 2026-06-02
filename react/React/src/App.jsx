import React from 'react'
import form from './form'
// import  from './form'
// import form from './form'
// import Counter from './Counter'
// import ApiFetch from './ApiFetch'
import NavBar from './NavBar'
import './App.css'
import { Form, Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Task from './Task'

// import Home, { Home1, Home2 } from './Home';
// import Form from 'Form';
const App = () => {
  console.log("hey");
  
  return (
    <div> 
      {/* <Home/> */}
      {/* <Form/> */}
      {/* <Counter/> */}
      {/* <ApiFetch/> */}
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/about' element={<About/>}> </Route>
        <Route path='/task' element={<Task/>}> </Route>
      </Routes>
    </div>
  )
}

export default App