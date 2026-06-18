import React from "react";
import './Chat_Bot.css'
const Chat_Bot = () => {
  return (
    <div id="parent">
      <box id="Boxx">
        <div id="header">
          <h3>ChatBot</h3>
          <p>Search anything</p>
        </div>
        <div id="textPart">

        </div>
        <div id="search_bar">
            <input></input>
            <button>Enter</button>
        </div>
      </box>
    </div>
  );
};

export default Chat_Bot;
