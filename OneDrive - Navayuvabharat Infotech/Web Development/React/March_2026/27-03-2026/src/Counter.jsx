import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Import actions
import { increment, decrement, incrementByAmount } from './counterSlice';

const Counter = () => {
  // Get state
  const count = useSelector((state) => state.counter.value);

  // Dispatch function
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        +1 Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        -1 Decrement 
      </button>

      <button onClick={() => dispatch(incrementByAmount(5))}>
        +5 Increment
      </button>
    </div>
  );
};

export default Counter;