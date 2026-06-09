import React from "react";
import './App.css'
const Cart = ({ cart,setCart }) => {

  function Del(i){
   let DelData= cart.filter((value,index) => {
    return (index!=i);
    // setCart(...cart,value)
});
setCart(DelData);
  }

  return (
    <div id="cartPage">
      <div id="cartGrid">
        {cart.map((a,index) => {
          return (
            <div className="Boxes" key={a.id}>
              <img id='image' src={a.thumbnail}></img>
              <h1>{a.id}</h1>
              <h5>{a.title}</h5>
              <button onClick={()=>{Del(index)}}>Remove</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
