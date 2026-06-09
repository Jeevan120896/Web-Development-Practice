import React from "react";

// Child Component receiving props
function User(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
    </div>
  );
}

function PropsExample() {
  return (
    <div>
      <User name="Amit" age={25} />
      <User name="Sara" age={30} />
    </div>
  );
}

export default PropsExample;