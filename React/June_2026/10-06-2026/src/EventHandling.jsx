import React from "react";

function EventHandling() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div>
      <h2>Event Handling</h2>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default EventHandling;