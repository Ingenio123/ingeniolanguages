import { SearchComponentthree } from "../../components/Private/TeacherComponents/SearchComponentThree";
import { useCallback, useEffect, useState } from "react";
import { GetAllStudents } from "../../helpers/User";
import {
  GetMareialsName,
  GetMaterialByIdStudent,
} from "../../services/MaterialsHttp";
import { ContentGrid } from "./styles";
import { SectionMaterials } from "./PartesMateriales";
export const MaterialsAddTeacher = () => {
  const [ListData, setListData] = useState([]);
  const [ListMaterials, setListMaterials] = useState([]);
  const [DataStudent, setDataStudent] = useState([]);
  const [IdiomSelect, setIdiomSelect] = useState({
    idiom: "",
    kids: false,
  });

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
    <ContentGrid className="container">
      <div>
        <SearchComponentthree
          data={ListData}
          ListMaterials={ListMaterials}
          DataStudent={setDataStudent}
          setIdiomSelect={setIdiomSelect}
        />
      </div>
      <div>
        <SectionMaterials IdiomSelect={IdiomSelect} DataStudent={DataStudent} />
      </div>
    </ContentGrid>
  );
};
