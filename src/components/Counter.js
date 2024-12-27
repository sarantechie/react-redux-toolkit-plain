import React, { useState, useEffect } from 'react';
import store from '../redux/store';
import { increment, decrement } from '../redux/counterSlice';

const Counter = () => {
  const [count, setCount] = useState(store.getState().counter.count);

  // Subscribe to store updates
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount(store.getState().counter.count);
    });

    return () => {
      unsubscribe(); // Cleanup subscription on component unmount
    };
  }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => store.dispatch(increment())}>Increment</button>
      <button onClick={() => store.dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
