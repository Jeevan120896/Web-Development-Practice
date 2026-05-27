import React from "react";

// React.memo prevents re-render if props don't change
const Child = ({ value, onClick }) => {
  console.log("Child Rendered");

  return (
    <div>
      <p>Double Value: {value}</p>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export default React.memo(Child);
