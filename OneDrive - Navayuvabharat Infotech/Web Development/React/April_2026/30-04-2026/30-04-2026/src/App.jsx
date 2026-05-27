import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  memo,
  PureComponent,
} from "react";
import ReactDOM from "react-dom";

// ----------------------
// Custom Hook
// ----------------------
function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);

  return {
    count,
    increment: () => setCount((c) => c + 1),
    decrement: () => setCount((c) => c - 1),
  };
}

// ----------------------
// API Call Hook
// ----------------------
function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, [url]);

  return data;
}

// ----------------------
// Pure Component
// ----------------------
class PureComp extends PureComponent {
  render() {
    console.log("Pure Component Rendered");
    return <div>Pure Component: {this.props.value}</div>;
  }
}

// ----------------------
// React.memo
// ----------------------
const MemoComp = memo(({ value }) => {
  console.log("Memo Component Rendered");
  return <div>Memo Component: {value}</div>;
});

// ----------------------
// Portal (SAFE)
// ----------------------
function PortalExample() {
  const portalRoot = document.getElementById("portal-root");

  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <div style={{ background: "lightblue", padding: 10 }}>
      Portal Content
    </div>,
    portalRoot
  );
}

// ----------------------
// Main App
// ----------------------
export default function App() {
  const { count, increment, decrement } = useCounter(0);

  const users = useFetch("https://jsonplaceholder.typicode.com/users");

  const inputRef = useRef();

  const double = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  const handleClick = useCallback(() => {
    console.log("Callback Clicked");
  }, []);

  const handleInput = (e) => {
    console.log(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h1>React All Concepts</h1>

      {/* Counter */}
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      {/* useMemo */}
      <p>Double: {double}</p>

      {/* useCallback */}
      <button onClick={handleClick}>Callback Button</button>

      {/* Refs */}
      <h2>Refs</h2>
      <input ref={inputRef} onChange={handleInput} />
      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>

      {/* List Rendering */}
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      {/* Memo + Pure */}
      <MemoComp value={count} />
      <PureComp value={count} />

      {/* Portal */}
      <PortalExample />
    </div>
  );
}

// ----------------------
// Styling
// ----------------------
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
  },
};
