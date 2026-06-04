import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, setMessage } from "./counterSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const message = useSelector((state) => state.counter.message);

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setMessage(input));
    setInput("");
  };

  return (
    <div className="container">
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <hr />

      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter message"
        />
        <button type="submit">Submit</button>
      </form>

      <p>Message: {message}</p>

      <hr />

      <div
        className="hover-box"
        onMouseEnter={() => dispatch(setMessage("Mouse Entered!"))}
        onMouseLeave={() => dispatch(setMessage(""))}
      >
        Hover Over Me
      </div>
    </div>
  );
}

export default App;
