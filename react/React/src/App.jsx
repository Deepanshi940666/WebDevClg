import React from 'react'
import form from './form'
// import Child from './Child.jsx'
// import  from './form'
// import form from './form'
// import Counter from './Counter'
// import ApiFetch from './ApiFetch'
import NavBar from './NavBar'
import './App.css'
import './NavBar.css'
import { Form, Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Task from './Task'
import Child from './Child.jsx'
import Prototype from './Prototype.jsx'
import Chat_Bot from './chatBot/Chat_Bot.jsx'

// import Home, { Home1, Home2 } from './Home';
// import Form from 'Form';
const App = () => {
  // console.log("hey");
  
  return (
    <div> 
      <Chat_Bot/>
      {/* <Prototype/> */}
      {/* <Child/> */}
      {/* <Form/> */}
      {/* <Counter/> */}
      {/* <ApiFetch/> */}
      
      {/* <h2>  hellllllllllllllllllllllllllllllllll</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, eaque alias? Ratione nihil id provident dolorum veniam non deleniti tempora ipsam, cupiditate ipsum aperiam harum aliquid repudiandae omnis consequuntur qui!</p>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/about' element={<About/>}> </Route>
        <Route path='/task' element={<Task/>}> </Route>
      </Routes> */}
    </div>
  )
}

export default App