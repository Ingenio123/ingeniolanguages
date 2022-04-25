import { MaterialsLayout } from "../../../components/Materials/LayoutMaterial";
import { ListMaterials } from "../../../components/Materials/ListMaterials";
import { DropDowns } from "../../../components/Materials/DropDowns";
import { Divider, Title } from "../../../components/Materials/Styles";
import { useState, useEffect, useContext } from "react";
import { GetMaterialForStudent } from "../../../services/MaterialsHttp";
import ContextStudent from "../../../components/Context/StudentContext";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

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
  const dispatch = useDispatch();
  const materials = useSelector((state) => state.materials);
  //
  const [Active, setActive] = useState(false);
  const [Loading, setLoading] = useState(true);
  const studentContext = useContext(ContextStudent);
  let idLanguage = useParams();
  //
  const handleClick = (key) => {
    if (Active === key) {
      return setActive(false);
    }
    setActive(key);
  };
  //
  useEffect(() => {
    // console.log(studentContext.student.QueryStudent._id);
    if (!studentContext.loading) {
      // !false => true !true => false
      setLoading(false);
      if (studentContext?.student) {
        console.log(idLanguage);
        const GetMarialsForToken = async () => {
          let datos = await GetMaterialForStudent(
            studentContext.student.QueryStudent._id,
            idLanguage.id
          );
          return datos;
        };
        return GetMarialsForToken().then((res) => {
          console.log(res.data);
          console.log("RES_1", res);
          // res.data.languages.filter(e => e)
          // res.data;
          return dispatch({
            type: "ADD_MATERIALS",
            payload: res.data,
          });
        });
      }
    }

    return () => {};
  }, []);
  //
  useEffect(() => {
    console.log("Changue Context student ");
    console.log("Context", studentContext);
    if (!studentContext.loading) {
      if (studentContext?.student) {
        const GetMarialsForToken = async () => {
          return await GetMaterialForStudent(
            studentContext.student.QueryStudent._id,
            idLanguage.id
          );
        };
        if (Object.keys(materials).length === 0) {
          GetMarialsForToken().then((res) => {
            console.log("RES_2", res);
            dispatch({
              type: "ADD_MATERIALS",
              payload: res.data,
            });
          });
        }
        return setLoading(false);
      }
    }
    return () => {};
  }, [studentContext.loading]);
  //

  useEffect(() => {
    if (materials.materials.length > 0) {
      let datamaterials = materials.materials.filter(
        (e) => e._id === idLanguage.id
      );
      console.log(datamaterials);
    }
    return () => {};
  }, [idLanguage.id]);

  return (
    <MaterialsLayout>
      <Title>My materials</Title>
      {Loading ? (
        <CardSkeleton>
          <PictureSkeleton width="30px" height="30px" />
          <ProductSkeleton width="100%">&zwnj;</ProductSkeleton>
        </CardSkeleton>
      ) : (
        <>
          {Items.map((i) => (
            <>
              <BoxContent>
                <DropDowns
                  click={handleClick}
                  level={i.level}
                  active={i._id === Active ? true : false}
                  id={i._id}
                />
                {i._id === Active && (
                  <ListMaterials materials={i.materials ? true : false} />
                )}
                {/* <Divider /> */}
              </BoxContent>
            </>
          ))}
        </>
      )}

      {/* <span>{JSON.stringify(materials.materials)}</span> */}
    </MaterialsLayout>
  );
};

const BoxContent = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  box-shadow: 0px 7px 15px -1px rgb(0 0 0 / 3%);
  padding: 0.5rem 0;
`;

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const CardSkeleton = styled.div`
  width: 100%;
  height: 200px;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  position: relative;
  /* border: 1px solid #f00909; */
`;

const ProductSkeleton = styled.div`
  display: inline-block;
  height: ${(props) => props.height || "14px"};
  width: ${(props) => props.width || "80%"};
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: #eee;
  background-image: linear-gradient(90deg, #9d9d9d, #f5f5f5, #eee);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  margin-bottom: 8px;
  margin-top: ${(props) => props.marginTop || "0"};
`;

const PictureSkeleton = styled(ProductSkeleton)`
  margin-bottom: 16px;
  width: ${({ width }) => width || "20px"};
  height: ${({ height }) => height || "20px"};
  /* margin: auto; */
  display: block;
`;
