import { createContext, useState } from "react";

const Context = createContext({});

export function UserContextProvider({ children }) {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}

export default Context;
