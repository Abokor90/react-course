import { useState } from "react";

function TipCalculator({label}) {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);

  function handleBillChange(event) {
    setBill(event.target.value);
  }

  function handleReset() {
    setBill("");
    setTipPercentage(0);
  }

  const billNumber = Number(bill);
  const tip = billNumber * (tipPercentage / 100);
  const total = billNumber + tip;


  return (
    <div>
      <h2>{label}</h2>
      <input type="number" value={bill} onChange={handleBillChange} placeholder="Bill amount" />
      <button
        onClick={() => setTipPercentage(10)}
        style={{ fontWeight: tipPercentage === 10 ? "bold" : "normal" }}
      >
        10%
      </button>

      <button 
        onClick={() => setTipPercentage(15)}
        style={{ fontWeight: tipPercentage === 15 ? "bold" : "normal" }}
      >
        15%
      </button>
      <button 
        onClick={() => setTipPercentage(20)}
        style={{ fontWeight: tipPercentage === 15 ? "bold" : "normal" }}
      >
        20%
      </button>
      <button onClick={handleReset}>Reset</button>
      <p>Tip: ${tip.toFixed(2)}</p>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default TipCalculator;