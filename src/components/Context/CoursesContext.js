import { createContext, useState } from "react";

const ContextCourses = createContext();

function ProviderCourses({ children }) {
  const [data, setData] = useState({});
  const [firstData, setFirstData] = useState({});
  const [StateSelect, setStateSelect] = useState({ idiom: null });

  const [Status, setStatus] = useState({
    loading: false,
    error: false,
    succes: false,
  });
  return (
    <ContextCourses.Provider
      value={{
        StateSelect,
        setStateSelect,
        data,
        setData,
        firstData,
        setFirstData,
        setStatus,
        Status,
      }}
    >
      {children}
    </ContextCourses.Provider>
  );
}
export { ProviderCourses };
export default ContextCourses;
