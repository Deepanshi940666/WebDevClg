import React, { useEffect, useState } from 'react'

const App = () => {
  let [input,setInput]=useState("")
  let[ApiData,setApiData]=useState([])
  console.log("hii");
  
  async function ApiFetch() {
    console.log(input,"Ehhhhhhhhhhhh");

     if (!input.trim()) {
            alert("Enter something in searchbar")
            return
        }
    
    let res = await fetch(`https://dummyjson.com/products/search?q=${input}`)
        let data = await res.json()
        console.log(data);
        setApiData(data.products)
  }

  useEffect(()=>{
    async function ApiCall() {
      console.log("heyy");
      
     let res= await fetch("https://dummyjson.com/products")
       let data = await res.json()
        console.log(data);
        setApiData(data.products)
    }
    ApiCall()
    }, [])


  return (
    <div>
      <input id='search' placeholder='Enter Product' onChange={(e)=>{
        setInput(e.target.value)
      }}/>
      <button id='Sbtn' onClick={ApiFetch}>Search</button>
      <div id="Div" >
                {
                    ApiData.map((a) => {
                        return (<div className="Boxes">
                            <img src={a.thumbnail}></img>
                            <h1>{a.id}</h1>
                            <h5>{a.title}</h5>

                        </div>)
                    })
                }
            </div>
    </div>
  )
}

export default App