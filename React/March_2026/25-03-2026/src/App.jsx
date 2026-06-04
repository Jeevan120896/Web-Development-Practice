import React from "react";
import UserContext from "./UserContext";
import Parent from "./Parent";

const App = () => {
  const user = {
    name: "John",
    age: 25,
  };

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>App Component</h1>
        <Parent />
      </div>
    </UserContext.Provider>
  );
};

export default App;