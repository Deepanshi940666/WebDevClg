import React from 'react'
import {useState} from 'react';
const Form = () => {
  let [input, setInput]=useState({name:"",email:"",password:""})
  function fun1(e){
    // let {name, value}=e.target;
    // setInput({...input,[name]:value})
    // console.log(input);
    console.log("hiiii");
    
    
  }
  return (
    <div>
        <form>
            <input name='name' value={input.name} type="text" placeholder='Enter your name' onChange={fun1}></input>
            <input name='email' value={input.email} type="text" placeholder='Enter your email' onChange={fun1}></input>
            <input name='password' value={input.password} type="text" placeholder='Enter your Rollno.' onChange={fun1}></input>
            <button >Submit</button>
        </form>
    </div>
  )
}

export default Form