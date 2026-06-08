import React from 'react'
import { useContext } from 'react'
import Context from './Context'

const Child = () => {
    let data=useContext(Context);
    console.log(data);
    
  return (
    <div>{data}</div>
  )
}

export default Child