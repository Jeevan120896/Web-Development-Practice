import React, { useState, useEffect } from "react";

function HooksExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed to ${count}`);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default HooksExample;