import { SearchComponentthree } from "../../components/Private/TeacherComponents/SearchComponentThree";
import { useEffect, useState } from "react";
import { GetAllStudents } from "../../helpers/User";
import { GetMareialsName } from "../../services/MaterialsHttp";
export const MaterialsAddTeacher = () => {
  const [ListData, setListData] = useState([]);
  const [ListMaterials, setListMaterials] = useState([]);
  useEffect(() => {
    async function GetData() {
      const resultado = await GetAllStudents();
      if (resultado && resultado.success) setListData(resultado.students);
      const resultadoMaterials = await GetMareialsName();
      if (resultadoMaterials && !resultadoMaterials.error)
        setListMaterials(resultadoMaterials.data);
      // setListMaterials(resultadoMaterials.data.map((i) => i.name_type)); //arary de strings
      // console.log(resultadoMaterials);
    }
    GetData();
  }, []);

  return (
    <div className="container">
      <SearchComponentthree data={ListData} ListMaterials={ListMaterials} />;
    </div>
  );
};
