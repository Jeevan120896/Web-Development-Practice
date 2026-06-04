import React, { useState, useContext, createContext } from "react";
const jsxElement = <h2>Welcome to React JSX</h2>;


/*
========================================
 COMPONENTS
========================================
Components are reusable UI blocks.
========================================
*/

// Functional Component
function Header() {
  return (
    <div>
      <h1>React Concepts Demo</h1>
    </div>
  );
}


/*
========================================
PROPS
========================================
Props are used to pass data from
parent to child components.
========================================
*/

function Student(props) {
  return (
    <div>
      <h3>Student Name: {props.name}</h3>
      <p>Course: {props.course}</p>
    </div>
  );
}


/*
========================================
REACT HOOKS
========================================
Hooks allow functional components
to use state and lifecycle features.

useState Hook Example
========================================
*/

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>React Hook - useState</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}


/*
========================================
PROPS DRILLING
========================================
Passing props through multiple levels
even when intermediate components
don't need them.
========================================
*/

function Parent() {
  const message = "Hello from Parent Component";

  return (
    <div>
      <h2>Props Drilling Example</h2>
      <Child message={message} />
    </div>
  );
}

function Child({ message }) {
  return (
    <div>
      <GrandChild message={message} />
    </div>
  );
}

function GrandChild({ message }) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}


/*
========================================
AVOIDING PROPS DRILLING
========================================
Using Context API to avoid passing
props manually through every level.
========================================
*/

// Create Context
const UserContext = createContext();

function ContextParent() {
  const user = "React User";

  return (
    <UserContext.Provider value={user}>
      <div>
        <h2>Avoiding Props Drilling using Context API</h2>
        <ContextChild />
      </div>
    </UserContext.Provider>
  );
}

function ContextChild() {
  return <ContextGrandChild />;
}

function ContextGrandChild() {
  const user = useContext(UserContext);

  return (
    <div>
      <p>Welcome {user}</p>
    </div>
  );
}


/*
========================================
MAIN APP COMPONENT
========================================
*/

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      
      {/* JSX */}
      {jsxElement}

      <hr />

      {/* Components */}
      <Header />

      <hr />

      {/* Props */}
      <h2>Props Example</h2>
      <Student name="Ravi" course="React JS" />

      <hr />

      {/* React Hooks */}
      <Counter />

      <hr />

      {/* Props Drilling */}
      <Parent />

      <hr />

      {/* Avoiding Props Drilling */}
      <ContextParent />

    </div>
  );
}

export default App;