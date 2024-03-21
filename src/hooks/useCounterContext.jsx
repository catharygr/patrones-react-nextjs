import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [contextCount, setContextCount] = useState(0);

  const contextIncrement = () => {
    setContextCount((prevCount) => prevCount + 1);
  };

  const contextDecrement = () => {
    setContextCount((prevCount) => prevCount - 1);
  };

  const contextReset = () => {
    setContextCount(0);
  };

  return (
    <CounterContext.Provider
      value={{ contextCount, contextIncrement, contextDecrement, contextReset }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export function useCounterContext() {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }

  return context;
}
