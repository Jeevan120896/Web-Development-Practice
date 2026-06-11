import useCounter from "./useCounter";

function Counter() {
  const { count, increase } = useCounter();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default Counter;