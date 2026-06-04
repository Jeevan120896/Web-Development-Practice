import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

import CounterWithReducer from './CounterWithReducer';
import ConditionalExample from './ConditionalExample';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Redux Toolkit Counter</h1>

      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <hr />

      <h1>useReducer Example</h1>
      <CounterWithReducer />

      <hr />

      <h1>Conditional Rendering</h1>
      <ConditionalExample />
    </div>
  );
}

export default App;