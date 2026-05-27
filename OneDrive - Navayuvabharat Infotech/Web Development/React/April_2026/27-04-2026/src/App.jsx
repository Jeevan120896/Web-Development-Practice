import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  Fragment,
  memo,
  PureComponent
} from "react";
import ReactDOM from "react-dom";

// -------------------- Custom Hook --------------------
const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Fetch error:", err));
  }, [url]);

  return data;
};

// -------------------- HOC --------------------
const withLogger = (Component) => {
  return function WrappedComponent(props) {
    console.log("HOC: Component rendered");
    return <Component {...props} />;
  };
};

// -------------------- Memo Component --------------------
const Child = memo(({ value, onClick }) => {
  console.log("Child Rendered");
  return <button onClick={onClick}>Child Value: {value}</button>;
});

// -------------------- Pure Component --------------------
class PureCounter extends PureComponent {
  render() {
    console.log("PureComponent Rendered");
    return <h3>Pure Count: {this.props.count}</h3>;
  }
}

// -------------------- Portal --------------------
const PortalComponent = () => {
  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        background: "lightblue",
        padding: "10px",
        border: "1px solid black",
        zIndex: 1000
      }}
    >
      Portal Content
    </div>,
    portalRoot
  );
};

// -------------------- Main App --------------------
const App = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const users = useFetch("https://jsonplaceholder.typicode.com/users");

  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  const handleClick = useCallback(() => {
    console.log("Callback clicked");
  }, []);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const { name } = users[0] || {};

  return (
    <Fragment>
      {/* Conditional Rendering */}
      <h1>{count > 5 ? "High Count" : "Low Count"}</h1>

      {/* Event */}
      <button onClick={handleIncrement}>Increment</button>

      {/* useMemo */}
      <h2>Memo Value: {expensiveCalculation}</h2>

      {/* React.memo */}
      <Child value={count} onClick={handleClick} />

      {/* PureComponent */}
      <PureCounter count={count} />

      {/* useRef */}
      <input ref={inputRef} placeholder="Focus me" />
      <button onClick={() => inputRef.current?.focus()}>
        Focus Input
      </button>

      {/* List Rendering */}
      <ul>
        {users.slice(0, 5).map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      {/* Destructuring */}
      <p>First User: {name}</p>

      {/* Inline Styling */}
      <div style={{ color: "green", fontWeight: "bold" }}>
        Styled Text
      </div>

      {/* Portal */}
      <PortalComponent />
    </Fragment>
  );
};

export default withLogger(App);