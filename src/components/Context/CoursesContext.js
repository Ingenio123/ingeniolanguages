import { createContext, useState } from "react";

const ContextCourses = createContext();

function ProviderCourses({ children }) {
  const [data, setData] = useState({});
  const [firstData, setFirstData] = useState({});
  const [StateSelect, setStateSelect] = useState({ idiom: null });
  return (
    <ContextCourses.Provider
      value={{
        StateSelect,
        setStateSelect,
        data,
        setData,
        firstData,
        setFirstData,
      }}
    >
      {children}
    </ContextCourses.Provider>
  );
}
export { ProviderCourses };
export default ContextCourses;
