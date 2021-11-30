import { useContext, useCallback } from "react";
import { ContextCardIdiom } from "../context/CardIdiomContext";

const UseCardIdiom = () => {
  const { setStudent } = useContext(ContextCardIdiom);

  const GetIdiom = useCallback(
    (idiom) => {
      setStudent(idiom);
    },
    [setStudent]
  );
  return {
    getIdiom: GetIdiom,
  };
};

export default UseCardIdiom;
