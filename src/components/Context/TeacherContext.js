import { createContext, useState } from "react";

const ContextTeacher = createContext();

function ProviderTeachers({ children }) {
  const [idIdiom, setidIdiom] = useState("");
  const [Teachers, setTeachers] = useState("");
  return (
    <ContextTeacher.Provider
      value={{ idIdiom, Teachers, setidIdiom, setTeachers }}
    >
      {children}
    </ContextTeacher.Provider>
  );
}
export { ProviderTeachers };
export default ContextTeacher;
