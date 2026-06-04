import React, { useState } from "react";

// Import all directly from src
import Child from "./Child";
import Parent from "./Parent";
import Input from "./Input";
import Display from "./Display";

function App() {
  // Props example
  const message = "Hello from Parent (Props)";

  // State lifting
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Data Passing Examples</h1>

      {/* 1. Props */}
      <h2>1. Props</h2>
      <Child text={message} />

      {/* 2. Props Drilling */}
      <h2>2. Props Drilling</h2>
      <Parent />

      {/* 3. State Lifting */}
      <h2>3. State Lifting</h2>
      <Input setText={setText} />
      <Display text={text} />
    </div>
  );
}

export default App;