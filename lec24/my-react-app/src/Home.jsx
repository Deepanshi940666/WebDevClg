import React from 'react'
import {useState} from 'react';

 const [name, setName] = useState("");
const Home = () => {
   function fun1(){
     const InputName= document.getElementById("Name").value
     setName(InputName)
   }

  return (
    <div> 
        <h1>Heyy</h1>
        <input id="Name" type="text" placeholder="Enter your name"></input>
        <button onclick={fun1}>Enter</button>
        <h1>{name}</h1>
    </div>
  )
}
const Home1 = () => {


  return (
    <div> 
        <h2>Hii</h2>
        {/* <input type="text" placeholder="Enter your name"></input> */}
        {/* <button onclick={fun1}>Enter</button> */}
        {/* <h1></h1> */}
    </div>
  )
}
const Home2 = () => {


  return (
    <div> 
        <h3>Helllooo</h3>
        {/* <input type="text" placeholder="Enter your name"></input> */}
        {/* <button onclick={fun1}>Enter</button> */}
        {/* <h1></h1> */}
    </div>
  )
}
export{Home1,Home2}


export default Home