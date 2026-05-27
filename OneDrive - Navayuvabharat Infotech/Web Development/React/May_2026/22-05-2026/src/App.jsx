import React, {
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

/* =========================
   CONTEXT API
========================= */
const ThemeContext = createContext();

/* =========================
   REDUX
========================= */

// Action
const increment = () => ({
  type: "INCREMENT",
});

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

/* =========================
   CLASS COMPONENT
   (Lifecycle Methods)
========================= */
class LifecycleDemo extends React.Component {
  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    return <h3>Lifecycle Methods Demo</h3>;
  }
}

/* =========================
   MAIN COMPONENT
========================= */
function App() {
  /* =========================
     STATE
  ========================= */
  const [name, setName] = useState("");
  const [show, setShow] = useState(true);

  /* =========================
     CONTEXT API
  ========================= */
  const theme = useContext(ThemeContext);

  /* =========================
     REDUX
  ========================= */
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  /* =========================
     useEffect = Lifecycle Hook
  ========================= */
  useEffect(() => {
    console.log("useEffect: Component Mounted / Updated");

    return () => {
      console.log("Cleanup: Component Unmounted");
    };
  }, [name]);

  /* =========================
     EVENT HANDLING
  ========================= */
  const handleClick = () => {
    alert(`Hello ${name}`);
  };

  return (
    <div
      style={{
        padding: "20px",
        background: theme.background,
        color: theme.color,
      }}
    >
      <h1>React All Concepts Example</h1>

      {/* =========================
          DATA BINDING
          (Two-way binding)
      ========================= */}
      <input
        type="text"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />

      <p>Typed Name: {name}</p>

      {/* =========================
          EVENT HANDLING
      ========================= */}
      <button onClick={handleClick}>Click Me</button>

      <hr />

      {/* =========================
          REDUX
      ========================= */}
      <h2>Redux Counter: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment Redux Counter
      </button>

      <hr />

      {/* =========================
          CONDITIONAL RENDERING
      ========================= */}
      <button onClick={() => setShow(!show)}>
        Toggle Lifecycle Component
      </button>

      {show ? <LifecycleDemo /> : <h3>Component Hidden</h3>}
    </div>
  );
}

/* =========================
   ROOT COMPONENT
========================= */
export default function Root() {
  return (
    <Provider store={store}>
      <ThemeContext.Provider
        value={{
          background: "#222",
          color: "#fff",
        }}
      >
        <App />
      </ThemeContext.Provider>
    </Provider>
  );
}