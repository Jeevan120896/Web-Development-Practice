import React, { useState } from 'react';

function ConditionalExample() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome User 🎉</h2>
      ) : (
        <h2>Please Login</h2>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login
      </button>
    </div>
  );
}

export default ConditionalExample;