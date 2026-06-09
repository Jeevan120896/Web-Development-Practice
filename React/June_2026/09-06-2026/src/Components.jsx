import React from "react";

// Functional Component
function Header() {
  return <h2>This is a Header Component</h2>;
}

function Components() {
  return (
    <div>
      <Header />
      <p>Main Component Content</p>
    </div>
  );
}

export default Components;