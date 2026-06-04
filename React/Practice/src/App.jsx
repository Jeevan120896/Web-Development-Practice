import React, { useState, useMemo, useCallback } from "react";

// Counter Component
const Counter = React.memo(({ count, onIncrease }) => {
  console.log("Counter Rendered");

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={onIncrease}>Increase Count</button>
    </div>
  );
});

// Number Component
const NumberComponent = React.memo(({ number, onIncrease }) => {
  console.log("NumberComponent Rendered");

  const tripleNumber = useMemo(() => {
    console.log("Calculating Triple...");
    return number * 3;
  }, [number]);

  return (
    <div>
      <h2>Triple Number: {tripleNumber}</h2>
      <button onClick={onIncrease}>Increase Number</button>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  //useCallback prevents function recreation
  const increaseCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const increaseNumber = useCallback(() => {
    setNumber((prev) => prev + 1);
  }, []);

  console.log("App Rendered");

  return (
    <div>
      <Counter count={count} onIncrease={increaseCount} />
      <NumberComponent number={number} onIncrease={increaseNumber} />
    </div>
  );
}

export default App;

