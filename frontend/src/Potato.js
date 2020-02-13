import React from 'react';

const Potato = ({ mode }) => {


  return (
    <>
      <h2>감자 {mode}개</h2>
      <img
        style={{ width: "100px", height: "100px", backgroundColor: "yellow" }}
        src="https://stickershop.line-scdn.net/stickershop/v1/product/3993327/LINEStorePC/main.png;compress=true" />
        <br/>
    </>
  );
};

export default Potato