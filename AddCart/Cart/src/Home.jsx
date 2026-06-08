import React, { useEffect, useState } from "react";
import './App.css'
const Home = ({apiData,setApiData,cart,setCart}) => {
  

  useEffect(() => {
    async function call() {
      let res = await fetch("https://dummyjson.com/products");
      let data = await res.json();
      console.log(data);
      setApiData(data.products);
      console.log(apiData);
    }
    call();
  }, []);

  console.log("map");
  return (
    <div>
      <div id="homeBody">
        
        
        {apiData.map((a) => {
          return (

            <div class="Boxes" key={a.id}>
              <img src={a.thumbnail}></img>
              <h1>{a.id}</h1>
              <h5>{a.title}</h5>
              <button id='addCart' onClick={() => setCart([...cart, a])}>Add</button>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Home;
