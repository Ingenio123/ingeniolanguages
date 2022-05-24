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
import { VscRefresh } from "react-icons/vsc";
//services http
import {
  DeleteMaterialForTeacher,
  RefreshDataMaterials,
  GetMaterialByIdStudent,
} from "../../services/MaterialsHttp";
import { IoWarningOutline } from "react-icons/io5";

export const SectionMaterials = ({
  IdiomSelect,
  DataStudent,
  changueGoBack,
  ...props
}) => {
  const [DataStudentState, setDataStudent] = useState({}); //state 1
  const [idiom, setIdiom] = useState({}); //state 2
  const [dataMaterial, setDataMaterial] = useState(null); //state 3
  const [DropDown, setDropDown] = useState(false); //state 4
  const [Modal, setModal] = useState(false); //state 4
  const [DataParamsDelete, setDataParamsDelete] = useState({
    id_student: "",
    idiom: "",
    kids: "",
    id_material: "",
    level_material: "",
  });
  const [fetchSucces, setFetchSuccess] = useState(undefined);
  //
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
    setDataParamsDelete({
      ...DataParamsDelete,
      id_student: DataStudentState.id_student,
      idiom: idiom.idiom,
      kids: idiom.kids,
      id_material: id_material,
      level_material: levelMaterial,
    });
    // let datos = await DeleteMaterialForTeacher(
    //   DataStudentState.id_student,
    //   idiom.idiom,
    //   idiom.kids,
    //   id_material,
    //   levelMaterial
    // );

    // // console.log(datos);
    // if (!datos.error) {
    // }
    setModal((prev) => !prev);
  };

  const handleGoBack = () => {
    setFetchSuccess(false);
    setModal((prev) => !prev);
  };

  const handleClickConfirm = async () => {
    let findNest = (obj, parent, value, i) => {
      if (obj._id === value) {
        console.log("DELETE");
        parent.splice(i, 1);
      }
      if (obj && obj.levels_materials && obj.levels_materials.length > 0) {
        for (let j = 0; j < obj.levels_materials.length; j++) {
          findNest(obj.levels_materials[j], obj.levels_materials, value, j);
        }
      }
    };
    let datos = await DeleteMaterialForTeacher(DataParamsDelete);

    if (!datos.error) {
      for (let i = 0; i < dataMaterial.length; i++) {
        findNest(
          dataMaterial[i],
          dataMaterial,
          DataParamsDelete.id_material,
          i
        );
      }
      setFetchSuccess(true);
    }
  };

  const handleClickCancel = () => {
    setModal(false);
  };

  const handleRefresh = async () => {
    console.log(DataStudentState.id_student);
    let responseRefresh = await GetMaterialByIdStudent(
      DataStudentState.id_student
    );
    console.log(responseRefresh);
    let datos = responseRefresh.data.materials.languages.filter(
      (e) => e.idiom === idiom.idiom && e.kids === idiom.kids
    );
    // console.log(datos[0].material);
    setDataMaterial(datos[0].material);
  };

  return (
    <>
      {!dataMaterial && idiom.idiom !== "" ? (
        <CardNotData>
          <h6>No materials have been submitted </h6>
        </CardNotData>
      ) : null}
      {dataMaterial && (
        <>
          <BoxRefresh>
            <ContentBoxIcons onClick={handleRefresh}>
              <VscRefresh />
            </ContentBoxIcons>
          </BoxRefresh>
          {dataMaterial.map((i, index) => (
            <Card key={i._id} top={index === 0 && false}>
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
                      <BoxIcon
                        to={{
                          pathname: `${e.link_material}`,
                        }}
                        target="_blank"
                      >
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
            <BoxIconSuccess background={fetchSucces ? "#00E676" : "#FFF176"}>
              {fetchSucces ? <HiOutlineCheck /> : <IoWarningOutline />}
            </BoxIconSuccess>
            <p>
              {fetchSucces
                ? "Deleted Successfully"
                : "Are you sure that you want to delete this material?"}
            </p>

            <div className="content__buttons">
              {fetchSucces ? (
                <button className="go_back" onClick={handleGoBack}>
                  Go Back
                </button>
              ) : (
                <>
                  <button
                    className="buttons bg-gray mr-4"
                    type="button"
                    onClick={handleClickCancel}
                  >
                    Cancel
                  </button>
                  <button
                    className="buttons bg_green"
                    type="button"
                    onClick={handleClickConfirm}
                  >
                    Confirm
                  </button>
                </>
              )}
            </div>
            {/*  */}
          </div>
        </ContentModal>
      )}
    </>
  );
};

const BoxRefresh = styled.div`
  width: 100%;
  /* border: 1px solid blue; */
  text-align: end;
  margin-top: 1.5rem;
`;

const ContentBoxIcons = styled.div`
  transition: all 0.3s ease;
  margin-left: auto;
  background-color: #eeeeee;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  color: #757575;
  :hover {
    color: #424242;
    cursor: pointer;
    background-color: #e0e0e0;
  }
`;

const CardNotData = styled.section`
  margin: 2rem 0 0 0 !important;
  width: 100%;
  height: 62px;
  border-radius: 4px;
  background-color: #bbf7d0;
  display: flex;
  justify-content: center;
  align-items: center !important;

  & > h6 {
    font-size: 1.2rem;
    color: #18181b;
    line-height: normal;
    margin-bottom: 0;
  }
`;

const BoxIconSuccess = styled.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  font-size: 1.5rem;
  background-color: ${({ background }) =>
    (background && background) || "#81C784"};
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
      text-align: center;
      /* border: 1px solid red; */
      width: 80%;
    }
    .content__buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      /* border: 1px solid red; */
      width: 60%;
      .go_back {
        background-color: #18181b;
        color: #fff;
        border: none;
        border-radius: 4px;
        font-size: 1.125rem;
        padding: 0.5rem 1rem;
        min-width: 150px;
        line-height: normal;
      }

      .buttons {
        padding: 0.3rem 1rem;
        font-size: 1rem;
        border-radius: 4px;
        min-width: 100px;
      }
      .bg-gray {
        background-color: #bdbdbd;
        :hover {
          background-color: #acabab;
        }
      }
      .bg_green {
        background-color: #2962ff;
        color: #fff;
        :hover {
          background-color: #1565c0;
        }
      }
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
