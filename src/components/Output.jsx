import React from "react";

const Output = function ({amount, amountPlusTip, tip, amountPerPerson}) {
  return (
    <div className="tip-details p-4 mx-4">
      <h2 className="my-3 text-secondary">Total per person</h2>
      <h2 className="text-center display-3">${Number.parseInt(amountPlusTip)}</h2>
      <div className="d-flex justify-content-center output">
        <p className="text-secondary">bill</p>
        <p className="text-secondary">tip</p>
      </div>
      <div className="d-flex justify-content-center output">
        <p className="amt">${Number.parseInt(amountPerPerson)}</p>
        <p className="amt">${Number.parseInt(tip)}</p>
      </div>
    </div>
  );
}

export default Output;