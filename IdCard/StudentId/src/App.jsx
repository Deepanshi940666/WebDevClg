import React from 'react'
import { useEffect, useState } from 'react'
const App = () => {
  let [input, setInput]=useState({name:"",enroll:"",sem:"",email:"",age:""})
    useEffect(() => {

    const name = prompt("Enter your Name");
    const enroll = prompt("Enter your Enroll No.");
    const sem = prompt("Enter your Semester");
    const email = prompt("Enter your Email");
    const age = prompt("Enter your Age");

    setInput({
      name,
      enroll,
      sem,
      email,
      age
    });

  }, []);
  return (
    <div>
      <h1>Student Id Card</h1>
      <div>
        <div name='name' value={input.name}>Name:{input.name}</div>
        <div name='enroll' value={input.enroll}>Enroll no.:{input.enroll}</div>
        <div name='sem' value={input.sem}>Semester:{input.sem}</div>
        <div name='email' value={input.email}>Email:{input.email}</div>
        <div name='age' value={input.age}>Age:{input.age}</div>
      </div>
    </div>
  )
}

export default App