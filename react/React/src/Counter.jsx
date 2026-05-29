import React, { useEffect } from 'react'
import {useState} from 'react';
const Counter = () => {
    let [count,setCount]=useState(0)
    let [city,setCity]=useState("Jabalpur")
    useEffect(()=>{
        console.log("hey");
        
    },[city])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Click</button>
        <h1>{city}</h1>
        <button onClick={()=>setCity("Bhopal")}>Change</button>
    </div>
  )
}

export default Counter