import React, { useState } from "react";
import "./Game.css";

const Game = () => {
  let [val, setVal] = useState("X");
  let [store, setStore] = useState(Array(9).fill(""));
  function output(index) {
    console.log("heyyy");

    if (store[index] != "") return;
    let newStore = [...store];
    newStore[index] = val;

    setStore(newStore);

    setVal(val === "X" ? "O" : "X");


  }

  return (
    <div className="game-container">
      <h1>Tic Tac Toe</h1>

      <div className="board">
        {store.map((cell, index) => (
          <div key={index} className="cell" onClick={() => output(index)}>
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
