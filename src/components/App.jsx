import React, {useState} from "react";
import Header from "./Header";
import Bill from "./Bill";
import Split from "./Split";
import Output from "./Output";

const App = function () {
  const [amount, setAmount] = useState(100);
  const [tipPercent, setTipPercent] = useState(10);
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount(c => c + 1);
  }

  const handleDecrease = () => {
    count > 1 && setCount(c => c - 1);
  }

  const amountPerPerson = amount / count;

  const tip = amount * (tipPercent / 100) / count;

  const outputAmount = (amount * (1 + (tipPercent / 100))) / count;

  return (
    <>
      <div className="main-app">
        <Header>Tipsify</Header>
        <Bill amount={amount} onAddAmount={setAmount} tipPercent={tipPercent} onAddTip={setTipPercent} />
        <Split count={count} onIncrease={handleIncrease} onDecrease={handleDecrease} />
        <Output amount={amount} tip={tip} amountPlusTip={outputAmount} amountPerPerson={amountPerPerson} />
      </div>
    </>
  );
}

export default App;