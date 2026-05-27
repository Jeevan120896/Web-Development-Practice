import { useState, useMemo, useCallback } from "react";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  // useMemo → memoize value
  const squared = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]);


  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <h2>Square of {number}: {squared}</h2>
      <button onClick={() => setNumber(number + 1)}>Change Number</button>

      <Child onClick={handleClick} />
    </div>
  );
}

export default App;