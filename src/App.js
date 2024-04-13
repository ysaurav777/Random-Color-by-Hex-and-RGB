import React, { useState } from 'react'

const App = () => {
  const [typecolor,settypecolor]=useState("hex");
  const [color,setcolor]=useState("#000000");

  function randomnumber(length) {
    return Math.floor(Math.random()*length);
  }

  function setcolorhex() {
    const h = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hcolor="#";
    for(let i=0;i<6;i++) {
      hcolor+=h[randomnumber(h.length)];
    }
    setcolor(hcolor);
  }

  function setcolorrdb() {
    const a=randomnumber(256);
    const b=randomnumber(256);
    const c=randomnumber(256);

    setcolor(`rgb(${a},${b},${c})`);
  }

  return (
    <div style={{
      width:"100vw",
      height:"1000vh",
      backgroundColor:color
    }}>
      <button onClick={()=>settypecolor("hex")}>Color from Hex</button>
      <button onClick={()=>settypecolor("rgb")}>Color from RBG</button>
      <button onClick={
        typecolor==="hex"?setcolorhex:setcolorrdb
      }>Generate Color</button>
      <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"white",
        fontSize:"5rem"
      }}>
        <h5>{typecolor==='hex'?"HEX Color: ":"RGB Color: "}</h5>
        <h3>{color}</h3>
      </div>
    </div>
  )
}

export default App;