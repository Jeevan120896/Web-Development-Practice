import React from "react";
import Middle from "./Middle";

function Parent() {
  const data = "Data from Parent";

  return <Middle info={data} />;
}

export default Parent;