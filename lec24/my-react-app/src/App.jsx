import {useState} from 'react';
import Home, { Home1, Home2 } from './Home';
// import Props from './Props';
// import Child from './Child';
// import Home from './Home';
// import {Home1,Home2} from './Home';



const App = () => {
  let user="Deeps"
  let[count,SetCount]=useState(0);
  // let[color, SetColor]=useState("Yellow")
  function fun1(){
    SetCount(++count)
  }
  function fun2(){
    SetCount(--count)
  }
  // function fun3(){
  //     SetColor("red")
  // }
  return (<div>
    {/* <Props data={user}/> */}
    {/* <Home></Home>
    <Home1></Home1>
    <Home2></Home2> */}
    {/* <div>Hellooooooooooooo</div>
    <h1>{2+2}</h1> */
    }
    {/* <h1>{count}</h1>
    <button onClick={fun1} >Add</button>
    <button onClick={fun2} >-</button>
    <Child/> */}
    <Home/>
     {/* <Props data={user}/> */}
    {/* <button onClick={fun3}>Color Change</button>  */}
  </div>
  )
}

export default App