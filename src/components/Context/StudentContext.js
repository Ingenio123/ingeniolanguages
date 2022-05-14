import { createContext } from "react";
let student = {
  student: null,
  loading: undefined,
  error: false,
};
const Context = createContext({ student });

export default Context;
