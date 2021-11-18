import { createContext, useState } from "react";

const Context = createContext();
export default Context;

export const UserProvider = ({ children }) => {
  const [DataUser, setDataUser] = useState(null);
  return (
    <Context.Provider
      value={{
        DataUser,
        setDataUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
