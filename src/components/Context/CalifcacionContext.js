import { createContext, useState } from "react";
const ContextCalficacion = createContext({});

const ProviderCalificacion = ({ children }) => {
  const [NumLevel, setNumLevel] = useState(null);
  const [SumSublevel, setSumSublevel] = useState(null);
  const [idContent, setIdContent] = useState(null);

  return (
    <ContextCalficacion.Provider
      value={{
        NumLevel,
        setNumLevel,
        SumSublevel,
        setSumSublevel,
        idContent,
        setIdContent,
      }}
    >
      {children}
    </ContextCalficacion.Provider>
  );
};

export { ProviderCalificacion };
export default ContextCalficacion;
