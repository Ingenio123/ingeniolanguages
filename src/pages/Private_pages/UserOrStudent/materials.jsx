import { MaterialsLayout } from "../../../components/Materials/LayoutMaterial";
import { ListMaterials } from "../../../components/Materials/ListMaterials";
import { DropDowns } from "../../../components/Materials/DropDowns";
import { Divider, Title } from "../../../components/Materials/Styles";
import { useState, useEffect, useContext } from "react";
import { GetMaterialForStudent } from "../../../services/MaterialsHttp";
import ContextStudent from "../../../components/Context/StudentContext";
import { useParams } from "react-router-dom";
const Items = [
  {
    _id: 1,
    level: "A1",
    materials: true,
  },
  {
    _id: 2,
    level: "A2",
    materials: false,
  },
  {
    _id: 3,
    level: "B1",
    materials: false,
  },
  {
    _id: 4,
    level: "B2",
    materials: false,
  },
  {
    _id: 5,
    level: "C1",
    materials: false,
  },
  {
    _id: 6,
    level: "C2",
    materials: false,
  },
];

export const MaterialsPage = () => {
  const [Active, setActive] = useState(false);
  const studentContext = useContext(ContextStudent);
  let idLanguage = useParams();
  const handleClick = (key) => {
    if (Active === key) {
      return setActive(false);
    }
    setActive(key);
  };
  useEffect(() => {
    // console.log(studentContext.student.QueryStudent._id);
    if (studentContext?.student) {
      console.log(idLanguage);
      const GetMarialsForToken = async () => {
        let datos = await GetMaterialForStudent(
          studentContext.student.QueryStudent._id,
          idLanguage.id
        );
        console.log(datos);
      };
      return GetMarialsForToken();
    }
    return () => {};
  }, []);

  return (
    <MaterialsLayout>
      <Title>My materials</Title>
      {Items.map((i) => (
        <>
          <DropDowns
            click={handleClick}
            level={i.level}
            active={i._id === Active ? true : false}
            id={i._id}
          />
          {i._id === Active && (
            <ListMaterials materials={i.materials ? true : false} />
          )}
          <Divider />
        </>
      ))}
    </MaterialsLayout>
  );
};
