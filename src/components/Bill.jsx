import React from "react";

const Bill = function ({amount, onAddAmount, tipPercent, onAddTip}) {
  return (
    <div>
      <h5 className="ml-5 my-3 text-secondary">Enter bill total</h5>
      <div className="text-center">
        <i class="fa-solid fa-dollar-sign d-sign"></i> <input class="input-amount" type="number" placeholder="Enter your bill" value={amount} onChange={(e) => onAddAmount(+e.target.value)} />
      </div>
      <h5 className="d-block ml-5 my-3 text-secondary">Choose Tip</h5>
      <select className="select-inp d-block text-center" value={tipPercent} onChange={(e) => onAddTip(+e.target.value)}>
        <option value="10">It was okay - 10%</option>
        <option value="15">It was good - 15%</option>
        <option value="20">It was excellent - 20%</option>
        <option value="25">Definitely will come again - 25%</option>
      </select>
    </div>
  );
}

export default Bill;