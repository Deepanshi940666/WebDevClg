import {useState} from 'react';



const App = () => {
  let[count,SetCount]=useState(0);
  function fun1(){
    SetCount(++count)
  }
  function fun2(){
    SetCount(--count)
  }
  return (<>
    {/* <div>Hellooooooooooooo</div>
    <h1>{2+2}</h1> */
    }
    <h1>{count}</h1>
    <button onClick={fun1} >Add</button>
    <button onClick={fun2} >-</button>
  </>
  )
}

export default App