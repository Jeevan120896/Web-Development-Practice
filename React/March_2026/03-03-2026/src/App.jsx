import { useReducer } from "react";
import { counterReducer, initialState } from "./Reducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useReducer Counter Example</h1>

      <h2>Count: {state.count}</h2>

      <button className="btn increment" onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>

      <button className="btn decrement" onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>

      <button className="btn reset" onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}

export default App;
