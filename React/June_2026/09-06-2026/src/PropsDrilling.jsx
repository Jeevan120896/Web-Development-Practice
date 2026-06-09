import React from "react";

function Level3({ user }) {
  return <h3>User: {user}</h3>;
}

function Level2({ user }) {
  return <Level3 user={user} />;
}

function Level1({ user }) {
  return <Level2 user={user} />;
}

function PropsDrilling() {
  const userName = "Deepak";

  return (
    <div>
      <h2>Props Drilling Example</h2>
      <Level1 user={userName} />
    </div>
  );
}

export default PropsDrilling;