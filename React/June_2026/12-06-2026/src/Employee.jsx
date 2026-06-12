import React from "react";

function Employee({ name }) {
  console.log("Employee Rendered");

  return (
    <div>
      <h2>Employee Name: {name}</h2>
    </div>
  );
}

export default React.memo(Employee);