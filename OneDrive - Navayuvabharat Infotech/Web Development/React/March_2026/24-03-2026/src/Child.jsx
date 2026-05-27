import React from "react";

function Child(props) {
  return <h2>{props.text || props.info}</h2>;
}

export default Child;