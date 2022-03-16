import styled from "styled-components";
import { useState, useReducer, useEffect, useCallback } from "react";
import ProgressComponent from "./ProgressComponent";
import Select from "react-select";
import useProgress from "../../../hooks/useProgress";
import useProgressContext from "../../../hooks/useProgressContext";
import { BsPlusCircleFill } from "react-icons/bs";
import { BiCheck, BiChevronDown, BiLockAlt, BiX } from "react-icons/bi";
import { ModalConfirm } from "./modal";
import Data from "./Levels.json";
import SendScoreComponent from "./SendScore";
import { useScoreExam } from "../../../hooks/useScoreExam";
import { GetScoreExamForIdStudent } from "../../../helpers/User";

export const SearchComponenttwo = ({ data }) => {
  //states
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [Item, setItem] = useState({});
  const [Modal, setModal] = useState(false);
  const [toggle, setToggle] = useState(null);
  const [ValorScore, setValorScore] = useState(0);
  const [SubLevel, setSubLevel] = useState(0);
  const [dataIdiom, setDataidiom] = useState({
    show: false,
    msg: "",
  });
  //

  //custom hooks
  const {
    GetCourse,
    stateData,
    ResetSelect,
    AddScore,
    ResetScore,
    initialScore,
    AddCourse,
    status,
    ResetStatus,
    ScoreValue,
    levelSup,
    setValorSup,
    Course,
  } = useProgress();
  const {
    addScore,
    level,
    scoreRuleta,
    sublevel,
    DefaultScore,
    sendScore,
    score,
    Status,
    ResetStatusContext,
    Show,
    StartShow,
    SetScore,
    AddScoreRuletaSimple,
  } = useProgressContext();

  const { AddIdiom, AddStudentFunc, AddDataScoreExam } = useScoreExam();
  //end custom hooks

  const GetData = async (idStudent) => {
    return await GetScoreExamForIdStudent(idStudent);
  };

  //
  useEffect(() => {
    console.log(Item);
    // console.log("effect item  depend Item")

    if (Item?.courses) {
      // console.log("is Courses")
      // console.log(Item)
      /* if (Item.courses.length === 1) {
        console.log("Tiene one course");
        console.log(Item.courses[0]);
        const scoreOne = Item.courses[0].score;
        const idiom = Item.courses[0].idiom;
        const kids = Item.courses[0].kids;
        var text = `${idiom} ${kids ? "(kids)" : ""}`;
        setDataidiom({
          show: true,
          msg: text,
        });
        // SetScore(Item.courses)
        DefaultScore(scoreOne);
        AddCourse(Item.courses[0]);
        AddIdiom(idiom, kids);
        GetData(Item._id).then((res) => {
          console.log(res);
          SetScore(res.data?.scoreExam.Content);
        });
        return;
      } */
      GetData(Item._id).then((res) => {
        console.log(res);
        SetScore(res.data?.scoreExam.Content);
      });
    }
  }, [Item]);
  //

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.email.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  const handleClickItem = (value) => {
    setItem(value);
    AddStudentFunc(value);
    clearInput();
    ResetSelect();
    ResetScore();
    StartShow();
    console.log(Object.keys(Item).length);
    if (value.courses.length === 1) {
      const valores = value.courses[0];
      initialScore(valores);
    }
  };
  const filterData = (id) => {
    // return courses.filter((x) => x._id === id);
    return Item.courses.find((x) => x._id === id);
  };
  const handleSelect = (select) => {
    const { value } = select;
    GetCourse(select);
    const datosfiltrados = filterData(value);
    const { score, idiom, kids } = datosfiltrados;
    setDataidiom(idiom);
    // console.log(datosfiltrados)
    // debugger;
    // console.log("Datos filtrados"+ JSON.stringify(datosfiltrados));

    // console.log("Obejct filter: " + score);
    DefaultScore(score);
    AddCourse(datosfiltrados);
    AddIdiom(idiom, kids);
  };
  function SelectArray(dataArray) {
    if (dataArray.length >= 1) {
      const options = dataArray.map((elem) => {
        return {
          value: elem._id,
          label: `${elem.idiom}  ${elem.kids ? "(Kids)" : ""}`,
        };
      });

      return (
        <SelectIdiom
          placeholder="Select package"
          options={options}
          onChange={handleSelect}
          value={stateData.valor}
        />
      );
    }
  }
  const ConfirmModala = () => {
    // AddScore(33, Item);
    addScore(score);
    sendScore(score, Item, Course);
  };
  const handleDismiss = () => {
    // ResetStatus();
    ResetStatusContext();
    setModal((prev) => !prev);
  };
  const ToggleItem = (index) => {
    if (toggle === index) {
      return setToggle(null);
    }
    setToggle(index);
  };
  const ClickModal = (score, subLevel) => {
    // setValorScore(score);
    setModal(true);
    // setSubLevel(subLevel);
  };

  return (
    <>
      <ModalConfirm modal={Modal}>
        {Status.success || Status.error ? (
          <ContentSuccess>
            <ContentICon error={Status.error}>
              {Status.error ? <IconError /> : <IconSuccess />}
            </ContentICon>
            <ContentText>
              {Status.error ? Status.message : "Submitted successfully"}
            </ContentText>
            <ButtonDissmis onClick={handleDismiss}>Go back</ButtonDissmis>
          </ContentSuccess>
        ) : (
          <>
            <Texto>Are you sure ? </Texto>
            <ContentFlex>
              <Button primary={true} onClick={() => ConfirmModala()}>
                Confirm
              </Button>
              <Button onClick={() => setModal((prev) => !prev)}>Cancel</Button>
            </ContentFlex>
          </>
        )}
      </ModalConfirm>
      <BoxSearch>
        <ContentBox>
          <TitleSearch>Search student by email</TitleSearch>
          <InputSearch
            onChange={handleFilter}
            value={wordEntered}
            placeholder="Search Student"
          />
          {filteredData.length !== 0 && (
            <DataResult>
              {filteredData.slice(0, 15).map((value, key) => (
                <ItemResult
                  key={key}
                  onClick={() => {
                    handleClickItem(value);
                  }}
                >
                  {value.email}
                </ItemResult>
              ))}
            </DataResult>
          )}
        </ContentBox>
        {Show && (
          <>
            <ContentBox>
              <div>
                {Object.keys(Item).length !== 0 && (
                  <TitleSearch>Student: {Item.email} </TitleSearch>
                )}
                {Object.keys(Item).length !== 0 && SelectArray(Item.courses)}
              </div>

              <SendScoreComponent
              // options={}
              />
            </ContentBox>
            <ContentBox>
              <Text bold>Student's Progress </Text>
              <Text size="1.5rem">Level: {level} </Text>
              <ProgressComponent initialValor={scoreRuleta} />
              <TextSublevel>
                {level}
                {sublevel}
              </TextSublevel>
              <ButtonPlus onClick={() => ClickModal()}>
                <BsPlusCircleFill size={"1.5rem"} />
              </ButtonPlus>
            </ContentBox>
          </>
        )}
      </BoxSearch>
    </>
  );
};

const ContentBox = styled.div`
  /* border: 1px solid red; */
  position: relative;
`;
const TitleSearch = styled.h2`
  font-size: 1.25rem;
  margin: 0;
  line-height: normal;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const CardCheck = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #a1a1aa;
  color: #18181b;
  .card_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    span {
      font-size: 1.5rem;
      line-height: normal;
    }
  }
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#93c5fd" : "#D4D4D8")};
  transition: all 0.3s ease;
  :hover {
    color: #fff;
    background-color: ${(props) => (props.primary ? "#1D4ED8" : "#737373")};
  }
  color: #3f3f46;
  padding: 0.8rem 0;
  min-width: 120px;
  font-size: 1rem;
  line-height: normal;
  font-weight: 600;
  border-radius: 4px;
  margin-right: 0.5rem;
`;

const ButtonPlus = styled.button`
  padding: 0.25rem;
  border: none;
  background-color: #2563eb;
  color: #fff;
  border-radius: 50%;
  position: absolute;
  bottom: 40px;
  bottom: 110px;
  right: 230px;
  :active {
    transform: scale(0.9);
  }
`;

const TextSublevel = styled.h2`
  position: absolute;
  margin: 0;
  color: #2563eb;
  /* top: 0;
  left: 0;
  bottom: 0;
  right: 0; */
  bottom: 140px;
  right: 230px;
`;

const TextName = styled.span`
  font-size: 1.3rem;
  color: #1d4ed8;
  /* margin-top: 2rem; */
  margin: 0;
`;

const Text = styled.h3`
  font-size: ${(props) => (props.size ? props.size : "2rem")};
  font-weight: 600;
  color: #1d4ed8;
  margin: 0.5rem 0;
  text-align: center;
  font-weight: ${(props) => (props.bold ? "700" : "500")};
`;

const SelectIdiom = styled(Select)`
  width: 100%;
  margin-bottom: 1rem;
`;

const ItemResult = styled.p`
  margin: 0;
  line-height: 1.3;
  margin-bottom: 0.2rem;
  padding: 0.3rem 0.2rem;
  :hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const DataResult = styled.div`
  border: 1px solid silver;
  border-top: none;
  z-index: 9;
  background-color: #fff;
  width: 100%;
  padding: 0.5rem;
  z-index: 999;
`;
const BoxSearch = styled.div`
  width: 100%;
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: 300px 300px auto;
  column-gap: 1rem;
  margin-top: 2rem;
`;

const InputSearch = styled.input`
  padding: 0.5rem;
  border: 0.5px solid silver;
  outline: none;
  border-radius: 5px;
  font-size: 1rem;
  line-height: normal;
  width: 100%;

  ::placeholder {
    color: silver;
  }
  :focus {
    border: 2px solid #2989ff;
  }
`;
const Texto = styled.h2`
  text-align: center;
  margin: 0;
  margin-bottom: 2rem;
  color: #737373;
  font-weight: 600;
`;
const ContentFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContentSuccess = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContentICon = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${(props) => (props.error ? "#FCA5A5" : " #bbf7d0")};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconSuccess = styled(BiCheck)`
  font-size: 2.5rem;
  color: #18181b; ;
`;
const ButtonDissmis = styled.button`
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #18181b;
  border-radius: 6px;
  min-width: 250px;
  font-size: 1.2rem;
  letter-spacing: 1px;
`;
const ContentText = styled.p`
  text-align: center;
  line-height: 1.2;
  margin: 1rem 0;
`;
const IconRow = styled(BiChevronDown)`
  font-size: 1.5rem;
  cursor: pointer;
  ${(prosp) => prosp.rotate && `transform: rotate(180deg);`}
`;
const IconLock = styled(BiLockAlt)`
  font-size: 1.2rem;
  cursor: pointer;
`;
const IconError = styled(BiX)`
  font-size: 2.5rem;
  color: #18181b; ;
`;

// {
//   Data.map((elm, index) => (
//     <>
//       <CardCheck>
//         <div
//           onClick={
//             elm.puntuacion > ScoreValue
//               ? () => {
//                   ToggleItem(index);
//                 }
//               : null
//           }
//           className="card_header"
//         >
//           <span>{elm.name_level}</span>
//           {elm.puntuacion > ScoreValue ? (
//             <IconRow rotate={toggle === index && true} />
//           ) : (
//             <IconLock />
//           )}
//         </div>
//         {toggle === index && (
//           <ContentsWrapper>
//             {elm.sub_level.map((elm) => (
//               <Wrapper>
//                 {/* <input type="checkbox" onChange={ClickModal} /> */}
//                 <ButtonCheck
//                   active={false}
//                   onClick={() => ClickModal(elm.puntuacion, elm.sublevel)}
//                 >
//                   {false && <BiCheck />}
//                 </ButtonCheck>
//                 <span>{elm.sublevel}</span>
//               </Wrapper>
//             ))}
//           </ContentsWrapper>
//         )}
//       </CardCheck>
//     </>
//   ));
// }
