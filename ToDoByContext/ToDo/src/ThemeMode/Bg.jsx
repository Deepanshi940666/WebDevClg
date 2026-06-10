import React, { useState } from "react";

const Bg = () => {
  let [color, setColor] = useState("#4B5694");
  let [Txtcolor, setTxtColor] = useState("#EAE0CF");
  let [BGcolor, setBGColor] = useState("#111844");
  function funct(e) {
    console.log("fahhh");

    if (e == "#4B5694") {
      let newVal = "#F7F7F7";
      let text = "#000000";
      let Bg = "#FFB22C";
      setColor(newVal);
      setTxtColor(text);
      setBGColor(Bg);
    } else {
      let newVal = "#4B5694";
      let text = "#EAE0CF";
      let Bg = "#111844";
      setColor(newVal);
      setTxtColor(text);
      setBGColor(Bg);
    }
  }
  return (
    <div className="Ancestor" style={{ backgroundColor: color }}>
      <div className="GrandP" style={{ backgroundColor: BGcolor }}>
        <div
          className="Parent"
          style={{ backgroundColor: color, color: Txtcolor }}
        >
          <h1 style={{ color: BGcolor }}>Theme Changer</h1>
          <h3 style={{ color: Txtcolor }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsam
            doloribus ab, quam dolore ex? Consequatur non repellat, ea nesciunt
            voluptatem quod ipsum odit magni, distinctio excepturi doloribus
            modi inventore?
          </h3>
          <button style={{  backgroundColor:BGcolor, color: Txtcolor }}
            onClick={() => {
              funct(color);
            }}
          >
            Change Mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bg;
