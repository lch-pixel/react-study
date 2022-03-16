import { createContext, useState } from "react";

const CountContext = createContext({
  id: null,
  search: () => {},
});

const CountProvider = ({ children }) => {
  const [id, setId] = useState(null);

  const search = (value) => {
    setId(value);
  };

  return (
    <CountContext.Provider
      value={{
        id,
        search,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};

export { CountContext, CountProvider };
