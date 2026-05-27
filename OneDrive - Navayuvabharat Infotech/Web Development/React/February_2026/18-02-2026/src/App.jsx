import React, { useState, useMemo, useCallback } from "react";
import Child from "./Child";
import "./App.css";


function App() {
  // State
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useMemo → only runs when count changes
  const doubleValue = useMemo(() => {
    return count * 2;
  }, [count]);

  // useCallback → function stays same
  const handleClick = useCallback(() => {
    alert("Button clicked!");
  }, []);

  return (
    <div>
      <h2>Simple Example</h2>

      {/* Count Button */}
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      {/* Input Field */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />

      {/* Child Component */}
      <Child value={doubleValue} onClick={handleClick} />
    </div>
  );
}

export default App;
