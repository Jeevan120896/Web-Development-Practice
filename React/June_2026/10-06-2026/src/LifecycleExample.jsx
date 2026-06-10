import React, { useEffect } from "react";

function LifecycleExample() {
  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Unmounted");
    };
  }, []);

  return (
    <div>
      <h2>Lifecycle Example</h2>
    </div>
  );
}

export default LifecycleExample;