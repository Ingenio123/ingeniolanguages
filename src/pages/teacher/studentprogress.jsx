import { SearchComponenttwo } from "../../components/Private/TeacherComponents/SearchComponenttwo";
import { useEffect, useState } from "react";

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
      <SearchComponenttwo data={ListData} placeholder="Search Student" />
    </main>
  );
};

export default StudentProgress;
