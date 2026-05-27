import React, { useState, useEffect } from 'react';

const UseState = () => {

  const [city, setCity] = useState("Hyderabad");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Runs only once after component mounts
  useEffect(() => {
    setCity("Vijayawada");
  }, []);

  return (
    <>
      <button onClick={() => setCount(prev => prev + 1)}>
        Clicked {count} times
      </button>

      <br /><br />

      <input 
        type="text"
        placeholder="Enter your name"
        onChange={e => setName(e.target.value)} 
      />
      <p>Hello {name}</p>

      <br />

      <h2>I live in {city}</h2>
    </>
  );
};

export default UseState;