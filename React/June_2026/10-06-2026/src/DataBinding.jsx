import React, { useState } from "react";

function DataBinding() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Data Binding</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>{name}</p>
    </div>
  );
}

export default DataBinding;