import React, { useContext } from "react";
import UserContext from "./UserContext";

const Child = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h3>Child Component</h3>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default Child;