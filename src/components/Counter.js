import React, { useState } from "react";
import "../styles/Counter.css";
import { formatNumber } from "../utils/formatNumber";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => Math.max(prevCount - 1, 0));
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1 className="counter-title">Advanced Counter</h1>
      <div className="counter-display">
        <span>{formatNumber(count)}</span>
      </div>
      <div className="counter-buttons">
        <button className="btn btn-increment" onClick={increment}>
          ➕ Increment
        </button>
        <button className="btn btn-decrement" onClick={decrement}>
          ➖ Decrement
        </button>
        <button className="btn btn-reset" onClick={reset}>
          🔄 Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
