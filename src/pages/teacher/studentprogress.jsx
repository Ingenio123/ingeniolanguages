import { SearchComponenttwo } from "../../components/Private/TeacherComponents/SearchComponenttwo";
import { useEffect, useState } from "react";
import { ProgressContext } from "../../context/ProgressContext";

//helpers
import { GetAllStudents } from "../../helpers/User";

const StudentProgress = () => {
  const [ListData, setListData] = useState([]);
  useEffect(() => {
    async function GetDataStudent() {
      const resultado = await GetAllStudents();
      if (resultado && resultado.success) setListData(resultado.students);
    }
    GetDataStudent();
  }, []);

  return (
    <main className="container">
      <ProgressContext>
        <SearchComponenttwo data={ListData} placeholder="Search Student" />
      </ProgressContext>
    </main>
  );
};

export default StudentProgress;
