import React, { useMemo, memo} from 'react'
import useCounter from './useCounter'

const Main = () => {
   let {count,inc,dec,reset}= useCounter(0)

//    let res=0;
//     function cal(){
//         for(let i=0;i<10000000;i++){
//             res+=i;
//         }
//         return res;
//     }

//     let total= cal();


//useMemo is use to optimise value the website at starting it take time to load heavy full then it store the data and showw again and again when any other fncction is use that will make web fast

//  let total= useMemo(()=>{
//     let res=0;
//        for(let i=0;i<100000000;i++){
//             res+=i;
//         }
//         return res;
//   },[])





  return (
    <div>
        {/* <h3>{total}</h3> */}
        <h3>{count}</h3>
        <button onClick={inc}>++</button>
        <button onClick={dec}>--</button>
        <button onClick={reset}>reset</button>
       {/* <Child/> */}
        <M/>
    </div>
  )
}

//memo use to optimise component

// let Child= ()=>{
//     console.log("heyyyyyyyy");
    
// }

//Instead of child component M is made to avoid rerendering
let M = memo(function(){
    console.log("Hiii");
    
})

export default Main