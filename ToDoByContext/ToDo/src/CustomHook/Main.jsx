import React from 'react'
import useCounter from './useCounter'

const Main = () => {
   let {count,inc,dec,reset}= useCounter(0)

   let res=0;
    function cal(){
        for(let i=0;i<10000000;i++){
            res+=i;
        }
        return res;
    }

    let total= cal();

  return (
    <div>
        <h3>{total}</h3>
        <h3>{count}</h3>
        <button onClick={inc}>++</button>
        <button onClick={dec}>--</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default Main