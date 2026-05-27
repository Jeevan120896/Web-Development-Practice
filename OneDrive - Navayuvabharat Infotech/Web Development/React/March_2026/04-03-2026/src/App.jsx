import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch({ type: "INC" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DEC" })}>
        Decrement
      </button>
    </div>
  );
}

export default App;