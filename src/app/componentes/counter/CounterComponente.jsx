"use client";
import { useState } from "react";

export const CounterComponente = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <CounterPresentational
      count={count}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
    />
  );
};

const CounterPresentational = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <h1>App Contador</h1>
      <h2>{count}</h2>
      <button onClick={onIncrement}>Incrementar</button>
      <button onClick={onDecrement}>Decrementar</button>
    </div>
  );
};
