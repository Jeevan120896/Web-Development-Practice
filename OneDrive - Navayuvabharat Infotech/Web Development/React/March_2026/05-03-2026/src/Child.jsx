import React from "react";

function Child({ onClick }) {
  console.log("Child Rendered");

  return (
    <div>
      <button onClick={onClick}>Child Button</button>
    </div>
  );
}

export default React.memo(Child);