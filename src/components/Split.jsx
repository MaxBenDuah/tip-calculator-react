import React from "react";

const Split = function ({count, onDecrease, onIncrease}) {
  return (
    <>
      <h5 className="ml-5 my-3 text-secondary">Split</h5>
      <div className="text-center">
        <button className="mx-3" onClick={onDecrease}>-</button>
        <span>{count}</span>
        <button className="mx-3" onClick={onIncrease}>+</button>
      </div>
    </>
  );
}

export default Split;