import React from 'react'
import { useReducer } from 'react'

const BgChanger = () => {
    let [state,dispatch]=useReducer(change,"black")

      function change(state,action){
        if(action.type=="blue"){
             return state="blue"
        }
        else if(action.type=="yellow"){
            return state="yellow"
        }
        else if(action.type=="pink"){
            return state="pink"
        }
        else if(action.type=="orange"){
            return state="orange"
        }
        // return state="beige"
    }

  return (
    <div style={{backgroundColor:state,height:"100vh"}}>
      <button onClick={()=>dispatch({type:"blue"})}>blue</button>
      <button onClick={()=>dispatch({type:"yellow"})}>yellow</button>
      <button onClick={()=>dispatch({type:"pink"})}>pink</button>
      <button onClick={()=>dispatch({type:"orange"})}>orange</button>
    </div>
  )
}

export default BgChanger