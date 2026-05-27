// App.js
import React, {
  Fragment,
  useState,
  useEffect,
  useMemo,
} from "react";

/* =========================================================
   1. CUSTOM HOOK
========================================================= */
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return { count, increment, decrement };
}

/* =========================================================
   2. HIGHER ORDER COMPONENT (HOC)
========================================================= */
function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    useEffect(() => {
      console.log("Component Mounted:", WrappedComponent.name);
    }, []);

    return <WrappedComponent {...props} />;
  };
}

/* =========================================================
   3. PURE COMPONENT
========================================================= */
class PureChild extends React.PureComponent {
  render() {
    console.log("PureChild Rendered");

    return (
      <div
        style={{
          border: "1px solid green",
          padding: "10px",
          marginTop: "10px",
        }}
      >
        <h3>Pure Component</h3>
        <p>Message: {this.props.message}</p>
      </div>
    );
  }
}

/* =========================================================
   4. REACT.MEMO
========================================================= */
const MemoChild = React.memo(({ value }) => {
  console.log("MemoChild Rendered");

  return (
    <div
      style={{
        border: "1px solid blue",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      <h3>React.memo Component</h3>
      <p>Value: {value}</p>
    </div>
  );
});

/* =========================================================
   MAIN COMPONENT
========================================================= */
function Dashboard() {
  // Custom Hook usage
  const { count, increment, decrement } = useCounter(0);

  // State for rerender demo
  const [text, setText] = useState("");

  // useMemo prevents unnecessary recalculation
  const memoizedValue = useMemo(() => {
    console.log("Calculating memoized value...");
    return count * 10;
  }, [count]);

  return (
    // 5. FRAGMENT
    <Fragment>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>React Advanced Concepts</h1>

        {/* Counter */}
        <h2>Custom Hook Counter: {count}</h2>

        <button onClick={increment}>Increment</button>
        <button onClick={decrement} style={{ marginLeft: "10px" }}>
          Decrement
        </button>

        {/* Input */}
        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Type something..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        {/* React.memo */}
        <MemoChild value={memoizedValue} />

        {/* Pure Component */}
        <PureChild message="Hello from Pure Component" />
      </div>
    </Fragment>
  );
}

/* =========================================================
   6. APPLYING HOC
========================================================= */
const EnhancedDashboard = withLogger(Dashboard);

export default EnhancedDashboard;

