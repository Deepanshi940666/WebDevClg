import React, { useEffect, useState } from "react";
import MD from "./MenuData";
import "./Menu.css";
const Menu = () => {
  let [index, setIndex] = useState(0);
  let [direction, setDirection] = useState("left");
  useEffect(() => {
    let interval = setInterval(() => {
      setDirection((prev) => (prev === "left" ? "right" : "left"));
      setIndex((prev) => (prev + 1) % MD.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const isEven = index % 2 === 0;

  const item = MD[index];

  const animationClass = direction === "left" ? "from-left" : "from-right";
  return (
    <div id="MenuBar">
      <div id="headParent">
        <h1 id="head">MENU</h1>
      </div>

      <div className="menu-container">
        <div className={`menu-card ${animationClass}`}>
          {/* 🍕 IMAGE */}
          <div className="image-box">
            <img src={item.img} alt={item.name} className="food-img" />
          </div>

          {/* 📝 DETAILS */}
          <div className="details">
            <h2>{item.name}</h2>
            <p>{item.desc}</p>

            <div className="bottom-row">
              <span className="price">{item.price}</span>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
