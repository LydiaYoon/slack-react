import React, { useState, useEffect } from 'react';

/*

props : 정적인 데이터를 사용할 때
state : 동적인 데이터를 사용할 때

[정적 & 동적 구분법]
1. 렌더링이 필요한가?
  - state가 변경되었을 때, 수정되는 부분만 리렌더링

*/

const Counter = () => {

  // number라는 state를 선언
  // number라는 state를 변경하는 함수인 setNumber를 선언.
  const [number, setNumber] = useState(1);

  // 리렌더링 할 때 useEffect안의 내용이 실행됨
  useEffect(
    () => {
      console.log("rendering... :0)", number);
    }
  );

  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    setNumber(number - 1);
  }

  return (
    <>
      <h1 className="number">number: {number}</h1>
      <button className="add" onClick={increase} style={{
        backgroundColor: "tomato",
        color: "white",
        border: "0px",
        width: "100px",
        height: "50px",
        borderRadius: "10px",
        fontSize: "24pt",
        fontWeight: "800",
        margin: "5px",
      }}>
        +
      </button>
      <button className="sub" onClick={decrease} style={{
        backgroundColor: "dodgerblue",
        color: "white",
        border: "0px",
        width: "100px",
        height: "50px",
        borderRadius: "10px",
        fontSize: "24pt",
        fontWeight: "800",
        margin: "5px",
      }}>-</button>
    </>);

};

export default Counter