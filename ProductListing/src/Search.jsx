import React, { useEffect } from 'react'
import { useState } from 'react';
import './App.css'
const Search = ({ApiData, setApiData}) => {
    let [input, setInput] = useState("")
    
    console.log("hiii");

    async function ApiCall() {
        console.log("heyyyyyy");
        console.log(input, "imppppp");


        if (!input.trim()) {
            alert("Enter something in searchbar")
            return
        }
        let res = await fetch(`https://dummyjson.com/products/search?q=${input}`)
        let data = await res.json()
        console.log(data);
        setApiData(data.products)

    }


    useEffect(() => {
        async function call() {
            let res = await fetch("https://dummyjson.com/products")
            let data = await res.json()
            // console.log(data);
            setApiData(data.products);
            // console.log(ApiData);

        }
        call()
    }, [])



    return (
        <div>

            <div id='searchBar'>
                <input id='searching' type='text' placeholder='Enter Product' onChange={(e) => { setInput(e.target.value) }}></input>
                <button id='searchBtn' onClick={ApiCall}>Search</button>
                {/* <button id='SortByPrice' onClick={}></button> */}


            </div>
            <div id="Div" >
                {/* <search/> */}
                {

                    ApiData.map((a) => {
                        return (<div class="Boxes">
                            <img src={a.thumbnail}></img>
                            <h1>{a.id}</h1>
                            <h5>{a.title}</h5>

                        </div>)
                    })
                }
                {/* <button></button> */}

            </div>
        </div>

    )
}

export default Search