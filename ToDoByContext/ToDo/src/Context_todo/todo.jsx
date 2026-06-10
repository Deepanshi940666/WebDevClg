import React, { useContext } from 'react'
import { storeContext } from './todo_Context'
const todo = () => {
      let {state,dispatch}=   useContext(storeContext)
  return (
    <div>
        <input placeholder='Enter a text' onChange={(e)=>dispatch({type:'Input',payload:e.target.value})}/>
       <button onClick={() => dispatch({ type: "add" })}>Add</button>

        {
        state.todos.map((a)=>{
          console.log(a);
          
          return(<>
          <h6>{a}</h6>
          </>)
        })
      }
    </div>
  )
}

export default todo



