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
import { HiOutlineTrash, HiX } from "react-icons/hi";
//services http
import { DeleteMaterialForTeacher } from "../../services/MaterialsHttp";

export const SectionMaterials = ({ IdiomSelect, DataStudent, ...props }) => {
  const [DataStudentState, setDataStudent] = useState({});
  const [idiom, setIdiom] = useState({});
  const [dataMaterial, setDataMaterial] = useState(null);
  const [DropDown, setDropDown] = useState(false);
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
    console.log("handle delete");
    console.log(levelMaterial);
    let datos = await DeleteMaterialForTeacher(
      DataStudentState.id_student,
      idiom.idiom,
      idiom.kids,
      id_material,
      levelMaterial
    );
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
                          disabled={true}
                          onClick={
                            true
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
    </>
  );
};

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
