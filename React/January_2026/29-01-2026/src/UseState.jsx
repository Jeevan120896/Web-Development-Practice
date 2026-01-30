import React, { useState } from 'react';

const UseState = () => {
    
  const [city, setCity] = useState("Hyderabad");
 
  if(city === "Hyderabad") {
    setCity("Vijayawada")
  }

  const [count, setCount] = useState(0);

  const [name, setName] = useState("");

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>

      <br /><br/>

      <input onChange={e => setName(e.target.value)} />
      <p>Hello {name}</p>

      <br/>
      <h2>I live in {city}</h2>

    </>
  );
};

export default UseState;
