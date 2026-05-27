import React, { useState, createContext, useContext, useReducer } from "react";

/* ================= CONTEXT API ================= */
const MessageContext = createContext();

// provider component
const MessageProvider = ({ children }) => {
  const message = "Data from Context (No Props Drilling)";
  return (
    <MessageContext.Provider value={message}>
      {children}
    </MessageContext.Provider>
  );
};

/* ================= COMPONENTS ================= */

// using props
const Greeting = ({ name }) => {
  return <h2>Hello, {name}</h2>;
};

// using context instead of props drilling
const GrandChild = () => {
  const message = useContext(MessageContext);
  return <p>{message}</p>;
};

const Child = () => <GrandChild />;
const Parent = () => <Child />;

/* ================= STATE + EVENTS ================= */

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

/* ================= REDUX-LIKE (useReducer) ================= */

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const ReduxCounter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h3>Redux Counter: {state.count}</h3>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>
    </div>
  );
};

/* ================= MAIN APP ================= */

const App = () => {
  const [name, setName] = useState("React Learner");
  const [input, setInput] = useState("");

  const handleInput = (e) => setInput(e.target.value);
  const changeName = () => setName(input);

  return (
    <MessageProvider>
      <div style={{ padding: "20px" }}>
        <h1>React Concepts Demo</h1>

        {/* Props */}
        <Greeting name={name} />

        {/* Controlled Input + Event Handling */}
        <input value={input} onChange={handleInput} />
        <button onClick={changeName}>Update Name</button>

        {/* Context API (instead of props drilling) */}
        <Parent />

        {/* useState */}
        <Counter />

        {/* Redux-like (useReducer) */}
        <ReduxCounter />
      </div>
    </MessageProvider>
  );
};

export default App;