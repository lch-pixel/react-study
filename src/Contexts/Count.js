import { createContext, useState } from "react";

const CountContext = createContext({
  count: 0,
  plusCount: () => {},
});

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    setCount(count + 1);
  };

  return (
    <CountContext.Provider
      value={{
        count,
        plusCount,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};

export { CountContext, CountProvider };
