import { useContext, useState } from "react";
import stundentContext from "../components/Context/StudentContext";

export const usePackage = () => {
  const contextStudent = useContext(stundentContext);
  const [Package, setPackage] = useState({});

  const FilterPackage = (id) => {
    const pack = contextStudent.student.QueryStudent.courses
      .filter((e) => e._id === id)
      .pop();
    setPackage(...Package, pack);
  };

  return {
    FilterPackage,
    Package,
  };
};
