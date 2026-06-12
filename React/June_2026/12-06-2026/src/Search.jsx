import { useState, useCallback } from "react";

function Search() {
  const [count, setCount] = useState(0);

  const handleSearch = useCallback(() => {
    alert("Search Button Clicked");
  }, []);

  return (
    <div>
      <h2>useCallback Example</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Search;