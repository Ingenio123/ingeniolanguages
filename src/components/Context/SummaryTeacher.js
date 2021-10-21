import { createContext, useState } from "react";

const SummaryContext = createContext({});

const ContextSummary = ({ children }) => {
  const [Summary, setSummary] = useState("");
  const [Comments, setComments] = useState("");

  return (
    <SummaryContext.Provider
      value={{
        Summary,
        setSummary,
        Comments,
        setComments,
      }}
    >
      {children}
    </SummaryContext.Provider>
  );
};

export { SummaryContext };
export default ContextSummary;
