import React, { useState } from 'react';
import Potato from "./Potato";

const Counter2 = () => {

  let num = 0;
  const [num2, setNum2] = useState(0);

  const increase = () => {
    num++;
    console.log(num);
  }

  const increase2 = () => {
    setNum2(num2 + 1);
    console.log(num2);
  }

  const btnStyle = {
    backgroundColor: "tomato",
    color: "white",
    border: "0px",
    width: "100px",
    height: "20px",
    borderRadius: "10px",
    fontSize: "12pt",
    fontWeight: "800",
    margin: "5px",
  };

  return (
    <>
      <h1>안녕 :0)</h1>
      <Potato mode={num} />
      <button onClick={increase} style={btnStyle}> increase </button>
      <Potato mode={num2} />
      <button onClick={increase2} style={btnStyle}> increase2 </button>
    </>
  );
};

export default Counter2