import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function ContextExample() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Context API Example</h2>
      <p>User: {user}</p>
    </div>
  );
}

export default ContextExample;