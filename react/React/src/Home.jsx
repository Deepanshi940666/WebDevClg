import React from 'react'
import {useState} from 'react';


const Home = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");
   function fun1(e){
      console.log(e.target.value);  
      setInput(e.target.value) 

   }
   function fun2(){
    //   console.log(e.target.value);  
      setData(data + input) 
      // setInput("")
   }

  return (
    <div> 
        {/* <h1>Heyy</h1> */}
        <input name="input"  type="text" placeholder="Enter your name" onChange={fun1}></input>
        <button onClick={fun2} >Enter</button>
        <h1>{data}</h1>
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