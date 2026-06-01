 import React, { useEffect } from 'react'
 import {useState} from 'react';

 const ApiFetch = () => {
    let [ApiData, setApiData]=useState([])
 useEffect(()=>{
     async function call() {
        let res=   await fetch("https://dummyjson.com/products")
        let data= await res.json()
        // console.log(data);
        await setApiData(data.products);
        // console.log(ApiData);
        
        }
        call()
 },[])
   
    return (
      <div id="Div" >
          {/* <search/> */}
        {
            
            ApiData.map((a)=>{
            return(<div class="Boxes">
                 <img src={a.thumbnail}></img>
                <h1>{a.id}</h1>
                <h5>{a.title}</h5>
               
                </div>)
            })
        }
        {/* <button></button> */}
       
      </div>
     
    )
  }
  
  export default ApiFetch