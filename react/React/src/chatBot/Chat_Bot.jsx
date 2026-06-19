import React, { useState } from "react";
import "./Chat_Bot.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
const Chat_Bot = () => {
  let [searchData, setSearchData] = useState("");
  let [result, setResult] = useState("");
  console.log(import.meta.env.VITE_GEMINI_API_KEY);
  const genAi = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  async function search() {
    try {
      let model = genAi.getGenerativeModel({
        model: "gemini-2.5-flash",
      });
      let res = await model.generateContent(searchData);
      setSearchData("");
      setResult(res.response.text());
      console.log(res.response.text());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="parent">
      <div id="Boxx">
        <div id="header">
          <h3>ChatBot</h3>
          <p>Search anything</p>
        </div>
        <div id="textPart">
          {...searchData}
          {...result}
          {/* {result} */}
        </div>
        <div id="search_bar">
          <input
            value={searchData}
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
          ></input>
          <button onClick={search}>Enter</button>
        </div>
      </div>
    </div>
  );
};

export default Chat_Bot;
