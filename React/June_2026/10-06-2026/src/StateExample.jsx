import React, { useState } from "react";

function StateExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>State Example</h2>

      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default StateExample;