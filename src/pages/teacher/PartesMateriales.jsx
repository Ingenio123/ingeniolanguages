import { useEffect, useState } from "react";
import {
  Card,
  TextLevel,
  DropDownsStyle,
  ListIcons,
  BoxIcon,
  Text,
  ButtonDelete,
} from "./styles";
import styled from "styled-components";
import { BiPlus, BiMinus } from "react-icons/bi";
import { IoLogoYoutube, IoDocumentText } from "react-icons/io5"; // logo de Youtobe
import { FaFilePowerpoint } from "react-icons/fa";
import { MdQuiz, MdModeEdit, MdOutlineRestoreFromTrash } from "react-icons/md";
import { HiOutlineTrash, HiX, HiOutlineCheck } from "react-icons/hi";
//services http
import { DeleteMaterialForTeacher } from "../../services/MaterialsHttp";

export const SectionMaterials = ({
  IdiomSelect,
  DataStudent,
  changueGoBack,
  ...props
}) => {
  const [DataStudentState, setDataStudent] = useState({});
  const [idiom, setIdiom] = useState({});
  const [dataMaterial, setDataMaterial] = useState(null);
  const [DropDown, setDropDown] = useState(false);
  const [Modal, setModal] = useState(false);
  const IconsSwitch = (nameIcon) => {
    switch (nameIcon) {
      case "Video":
        return <IoLogoYoutube fontSize={"3rem"} />;
      case "Document":
        return <IoDocumentText fontSize={"3rem"} />;
      case "Slide":
        return <FaFilePowerpoint fontSize={"3rem"} />;
      case "Homework":
        return <MdModeEdit fontSize={"3rem"} />;
      case "Quiz":
        return <MdQuiz fontSize={"3rem"} />;
      default:
        break;
    }
  };
  //
  useEffect(() => {
    console.log("cambio de porps");
    setDataStudent(DataStudent);
    return () => {};
  }, [DataStudent]);

  useEffect(() => {
    console.log("Cambio de props de idiom");
    setIdiom(IdiomSelect);
    console.log(filterData()?.material[0]?.levels_materials[0]?.name_material);

    if (!filterData()) {
      return setDataMaterial(null);
    }
    setDataMaterial(filterData()?.material);

    return () => {};
  }, [IdiomSelect]);

  const filterData = () => {
    if (DataStudent) {
      if (Object.keys(DataStudent).length > 0) {
        let data = DataStudent.languages.filter(
          (e) => e.kids === IdiomSelect.kids && e.idiom === IdiomSelect.idiom
        );
        console.log(data.length > 0 ? true : false);
        return data[0];
      }
    }
    return null;
  };

  const ClickDropdown = (index) => {
    if (DropDown === index) {
      return setDropDown(0);
    }
    setDropDown(index);
  };

  const handleDelete = async (id_material, levelMaterial) => {
    // console.log("handle delete");
    // console.log(levelMaterial);
    let datos = await DeleteMaterialForTeacher(
      DataStudentState.id_student,
      idiom.idiom,
      idiom.kids,
      id_material,
      levelMaterial
    );
    // console.log(datos);
    if (!datos.error) {
      setModal((prev) => !prev);
    }
  };
  const handleGoBack = () => {
    changueGoBack((prev) => !prev);
    setDataMaterial(null);
    setModal((prev) => !prev);
  };
  return (
    <>
      {dataMaterial && (
        <>
          {dataMaterial.map((i, index) => (
            <Card top={index === 0 && true}>
              <DropDownsStyle>
                {DropDown === i._id ? (
                  <IconMinus onClick={() => ClickDropdown(i._id)} />
                ) : (
                  <IconPlus onClick={() => ClickDropdown(i._id)} />
                )}
                <TextLevel key={i._id}>{i.level_material}</TextLevel>
              </DropDownsStyle>
              {DropDown === i._id && (
                <ListIcons>
                  {i.levels_materials.map((e) => (
                    <div style={{ position: "relative" }}>
                      <BoxIcon>
                        {IconsSwitch(e.type_Material.name_type)}
                      </BoxIcon>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          width: "100%",
                        }}
                      >
                        <Text>{e.name_material}</Text>
                        <ButtonDelete
                          disabled={false}
                          onClick={
                            false
                              ? null
                              : () => handleDelete(e._id, i.level_material)
                          }
                        >
                          <HiX />
                        </ButtonDelete>
                      </div>
                    </div>
                  ))}
                </ListIcons>
              )}
            </Card>
          ))}
        </>
      )}
      {Modal && (
        <ContentModal>
          <div>
            <BoxIconSuccess>
              <HiOutlineCheck />
            </BoxIconSuccess>
            <p>Se elimino correctamente</p>
            <button onClick={handleGoBack}>Go Back</button>
          </div>
        </ContentModal>
      )}
    </>
  );
};

const BoxIconSuccess = styled.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  font-size: 2rem;
  background-color: #86efac;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
`;

const ContentModal = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    color: #3f3f46;
    width: 30%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    border-radius: 0.5rem;
    & > p {
      font-size: 1.3rem;
      line-height: normal;
      margin: 0;
      margin: 1rem 0;
    }
    & > button {
      background-color: #18181b;
      color: #fff;
      border: none;
      border-radius: 4px;
      font-size: 1.125rem;
      padding: 0.5rem 1rem;
      min-width: 150px;
      line-height: normal;
    }
  }
`;

const IconMinus = styled(BiMinus)`
  height: 30px;
  width: 30px;
  padding: 0.2rem;
  :hover {
    cursor: pointer;
    background-color: #e5e7eb;
    border-radius: 50%;
    color: #27272a;
  }
`;
const IconPlus = styled(BiPlus)`
  height: 30px;
  width: 30px;
  padding: 0.2rem;
  color: #71717a;
  :hover {
    cursor: pointer;
    background-color: #e5e7eb;
    color: #27272a;
    border-radius: 50%;
  }
`;
