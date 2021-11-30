import { createContext, useState } from "react";

const ContextCardIdiom = createContext();

const ContextProvider = (props) => {
  const [Student, setStudent] = useState(null);
  return (
    <ContextCardIdiom.Provider
      value={{
        Student,
        setStudent,
      }}
    >
      {props.children}
    </ContextCardIdiom.Provider>
  );
};

export default ContextProvider;
export { ContextCardIdiom };
