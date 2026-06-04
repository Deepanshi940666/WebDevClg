import React from 'react'
import { useReducer } from 'react'
const UseReducer = () => {
    let [state,dispatch]= useReducer(reducer,0)

    function reducer(state,action){
        if(action.type=="inc"){
            return state+1
        }
        else if(action.type=="dec"){
            return state-1
        }
        return 0
    }
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:"inc"})}>++</button>
        <button onClick={()=>dispatch({type:"dec"})}>--</button>
    </div>
  )
}

export default UseReducer