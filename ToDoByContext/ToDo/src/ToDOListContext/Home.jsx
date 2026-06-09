import React, { useReducer } from "react";
import '../App.css'
const Home = () => {
  let Obj = {
    text: "",
    todos: [],
  };

  let [state, dispatch] = useReducer(AddData, Obj);
  function AddData(state, action) {
    if (action.type == "Input") {
      console.log("heyyy");
      return {
        ...state,
        text: action.payload,
      };
    } else if (action.type == "add") {
      // ...state,
      console.log("hiiiii");

      return {
        ...state,
        todos: [...state.todos, state.text],
        text:""
      };
    }
  }
  //    AddData();
  return (
    <div>
      <div>
        <input
            value={state.text}
          onChange={(e) => dispatch({ type: "Input", payload: e.target.value })}
          placeholder="Enter Your plan..." 
        ></input>
        <button onClick={() => dispatch({ type: "add" })}>Add</button>
      </div>
      <div>
        {(state.todos).map((a) => {
          return <div>
            <h2>{a}</h2>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Home;
