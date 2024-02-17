import React from "react";
import "./Dashbord.css";
import { useCurrency } from "./Context/CurrencyContext";
import ConversionBoard from "./ConversionBoard";

function Dashboard() {
  const {
    amount,
    setAmount,
    toCurr,
    data,
    setCalculated_Amount,
    calculated_Amount,
  } = useCurrency();

  function handlesubmit() {
    setCalculated_Amount(amount * data[toCurr]);
  }

  function handleSwap() {
    const temp = amount;
    setAmount(calculated_Amount);
    setCalculated_Amount(temp);
  }
  return (
    <div className="Container">
      <ConversionBoard
        Inputlabel="Amount"
        value={amount}
        setInput={setAmount}
        SelectLabel="From Currency"
        disabled={false}
      />
      <button onClick={handleSwap}>Swap</button>

      <ConversionBoard
        Inputlabel="Converted_Amount"
        value={calculated_Amount}
        setInput={setCalculated_Amount}
        SelectLabel="To Currency"
        disabled={true}
      />

      <button onClick={handlesubmit}>Convert</button>
    </div>
  );
}

export default Dashboard;
