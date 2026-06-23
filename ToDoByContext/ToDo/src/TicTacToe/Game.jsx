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

     const winner = winCheck(newStore);

  if (winner) {
    alert(`${winner} Wins!`);
    return;
  }
  }

  const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns

  [0, 4, 8],
  [2, 4, 6], // diagonals
];

  function winCheck(store){
    for(let pattern of winPatterns){
      let[a,b,c]=pattern;
       if (
      store[a] &&
      store[a] === store[b] &&
      store[b] === store[c]
    ) {
       return store[a];  
    }
    }
    return null;
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
