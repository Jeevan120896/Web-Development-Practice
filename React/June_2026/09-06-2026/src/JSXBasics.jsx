import React from "react";

function JSXBasics() {
  const name = "React Learner";

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is JSX syntax in React.</p>

      {/* JSX allows expressions */}
      <p>2 + 2 = {2 + 2}</p>
    </div>
  );
}

export default JSXBasics;