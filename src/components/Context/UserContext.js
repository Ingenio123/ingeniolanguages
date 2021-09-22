import React, { useState } from "react";
import { useEffect } from "react";
import { VerifyIfTokenIsValid } from "../../helpers/Requests";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [UserData, setUserData] = useState("");
  const [InformUser, setInformUser] = useState(() =>
    window.localStorage.getItem("user")
  );

  useEffect(() => {
    if (!InformUser) return setUserData([]);
    VerifyIfTokenIsValid().then(setUserData);
  }, [InformUser]);

  return (
    <Context.Provider
      value={{
        UserData,
        InformUser,
        setUserData,
        setInformUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
