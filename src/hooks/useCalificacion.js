import { useContext, useCallback } from "react";
import ContextCalficacion from "../components/Context/CalifcacionContext";
export default function useCalificacion() {
  const {
    setNumLevel,
    setSumSublevel,
    setIdContent,
    NumLevel,
    SumSublevel,
    idContent,
  } = useContext(ContextCalficacion);

  const Level = useCallback(
    (numlevel) => {
      setNumLevel(numlevel);
    },
    [setNumLevel]
  );
  const Sublevel = useCallback(
    (sublevel) => {
      setSumSublevel(sublevel);
    },
    [setSumSublevel]
  );
  const IdContent = useCallback(
    (idContenido) => {
      setIdContent(idContenido);
    },
    [setIdContent]
  );

  return {
    Level,
    Sublevel,
    IdContent,
    NumLevel,
    SumSublevel,
    idContent,
  };
}
