import React, { createContext, useContext } from "react";

// Step 1: Create Context
const UserContext = createContext();

function Level3() {
  // Step 3: Consume context directly
  const user = useContext(UserContext);
  return <h3>User: {user}</h3>;
}

function Level2() {
  return <Level3 />;
}

function Level1() {
  return <Level2 />;
}

function AvoidPropsDrilling() {
  const userName = "Rahul";

  return (
    <UserContext.Provider value={userName}>
      <div>
        <h2>Avoiding Props Drilling (Context API)</h2>
        <Level1 />
      </div>
    </UserContext.Provider>
  );
}

export default AvoidPropsDrilling;