import React from "react";

function Input({ setText }) {
  return (
    <input
      type="text"
      onChange={(e) => setText(e.target.value)}
      placeholder="Type something..."
    />
  );
}

export default Input;