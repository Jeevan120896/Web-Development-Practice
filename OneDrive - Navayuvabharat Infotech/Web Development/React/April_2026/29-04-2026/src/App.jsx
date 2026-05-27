// React All Concepts in One File Example

import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useMemo,
  useCallback,
  createContext,
  memo
} from "react";
import ReactDOM from "react-dom";

// Context API (Avoid Props Drilling)
const UserContext = createContext();

// Custom Hook
function useCounter() {
  const [count, setCount] = useState(0);
  return { count, setCount };
}

// Higher-Order Component (HOC)
const withAuth = (Component) => (props) => {
  const isAuth = true;
  return isAuth ? <Component {...props} /> : <h2>Please Login</h2>;
};

// Pure Component (Class)
class PureExample extends React.PureComponent {
  render() {
    console.log("Pure Component Rendered");
    return <h3>Pure Component: {this.props.value}</h3>;
  }
}

// Child Component (Props + Destructuring + React.memo)
const Child = memo(({ name }) => {
  console.log("Child Rendered");
  return <p>Hello {name}</p>;
});

// Portal Component
function Modal() {
  return ReactDOM.createPortal(
    <div style={{ background: "#000", color: "#fff" }}>
      Portal Modal
    </div>,
    document.body
  );
}

// Main Component
function App() {
  // State & Hooks
  const { count, setCount } = useCounter();
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  // Ref
  const inputRef = useRef();

  // useMemo
  const expensiveCalc = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  // useCallback
  const handleClick = useCallback(() => {
    alert("Callback Clicked");
  }, []);

  // API Call
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  // Event Handling + Data Binding
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <UserContext.Provider value={{ name }}>
      {/* JSX + Fragment */}
      <>
        <h1 style={{ color: "blue" }}>React All Concepts</h1>

        {/* State */}
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>

        {/* useMemo */}
        <p>Memo Value: {expensiveCalc}</p>

        {/* Data Binding */}
        <input
          ref={inputRef}
          value={name}
          onChange={handleChange}
          placeholder="Enter name"
        />

        {/* Props + React.memo */}
        <Child name={name} />

        {/* useCallback */}
        <button onClick={handleClick}>Callback Button</button>

        {/* Conditional Rendering */}
        {name ? <h3>Welcome {name}</h3> : <h3>Please type name</h3>}

        {/* List Rendering */}
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>

        {/* Context API (Avoid Props Drilling) */}
        <UserDisplay />

        {/* Pure Component */}
        <PureExample value={count} />

        {/* Portal */}
        <Modal />
      </>
    </UserContext.Provider>
  );
}

// Context Consumer
function UserDisplay() {
  const { name } = useContext(UserContext);
  return <h4>Context Name: {name}</h4>;
}

// HOC Usage
const ProtectedApp = withAuth(App);

export default ProtectedApp;

