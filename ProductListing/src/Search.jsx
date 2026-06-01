import React, { useEffect } from 'react'
import {useState} from 'react';
import './App.css'
const Search = () => {
let [input,setInput]=useState("")
console.log("hiii");

async function ApiCall() {
    if(input.trim()){
        alert("Enter something in searchbar")
        return
    }
    let res=await fetch(`https://dummyjson.com/products/search?q=${input}`)
    let data= await res.json()
    console.log(data);
    
}


  return (
    <div id='searchBar'>
        <input id='searching' type='text' placeholder='Enter Product' onChange={(e)=>{console.log(e.target.value)}}></input>
        <button id='searchBtn'  onClick={ApiCall}>Search</button>
    </div>
  )
}

export default Search