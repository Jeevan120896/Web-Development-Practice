import React from "react";
import Child from "./Child";

function Middle(props) {
  return <Child info={props.info} />;
}

export default Middle;