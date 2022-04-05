import { SearchComponentthree } from "../../components/Private/TeacherComponents/SearchComponentThree";
import { useEffect, useState } from "react";
import { GetAllStudents } from "../../helpers/User";
export const MaterialsAddTeacher = () => {
  const [ListData, setListData] = useState([]);
  useEffect(() => {
    async function GetStudents() {
      const resultado = await GetAllStudents();
      if (resultado && resultado.success) setListData(resultado.students);
    }
    GetStudents();
  }, []);

  return (
    <div className="container">
      <SearchComponentthree data={ListData} />;
    </div>
  );
};
