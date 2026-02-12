import React, { useState } from "react";
import '../src/CounterProgram.css'

function CounterProgram() {
  const [count, setCount] = useState(0);

  const handleIncr = () => {
    setCount(count + 1);
  };

  const handleDecr = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <div className="counterContainer">
        <p>Counter Program</p>

        <h3>Current Value : {count}</h3>

        <button onClick={handleIncr}>Increment</button>

        <button onClick={handleDecr}>Decrement</button>

        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}
export default CounterProgram;
