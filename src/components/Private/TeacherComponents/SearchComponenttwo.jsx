import styled from "styled-components";
import { useState, useReducer } from "react";
import ProgressComponent from "./ProgressComponent";
import Select from "react-select";
import useProgress from "../../../hooks/useProgress";
import { BsPlusCircleFill } from "react-icons/bs";
import { BiCheck, BiChevronDown, BiLockAlt } from "react-icons/bi";
import { ModalConfirm } from "./modal";
import Data from "./Levels.json";

export const SearchComponenttwo = ({ data }) => {
  //states
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [Item, setItem] = useState({});
  const [Modal, setModal] = useState(false);
  const [toggle, setToggle] = useState(null);
  //
  const [ValorScore, setValorScore] = useState(0);
  const [ScoreTotal, setScoreTotal] = useState(0);
  const [SubLevel, setSubLevel] = useState(0);

  //custom hooks
  const {
    GetCourse,
    stateData,
    ResetSelect,
    AddScore,
    ResetScore,
    ScoreValue,
    initialScore,
    levelSup,
    Show,
    StartShow,
    AddCourse,
    status,
    ResetStatus,
    setValorSup,
  } = useProgress();
  //end custom hooks

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
    clearInput();
    ResetSelect();
    ResetScore();
    StartShow();
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
    const { score } = datosfiltrados;
    console.log("Obejct filter: " + score);
    initialScore(datosfiltrados);
    AddCourse(datosfiltrados);
    // console.log(datosfiltrados);
    // getData(datosfiltrados);
    // SlectIdiomCallback(select);
  };
  function SelectArray(dataArray) {
    if (dataArray.length > 1) {
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
    AddScore(33, Item);
  };
  const handleDismiss = () => {
    ResetStatus();
    setModal((prev) => !prev);
  };
  const ToggleItem = (index) => {
    if (toggle === index) {
      return setToggle(null);
    }
    setToggle(index);
  };
  const ClickModal = (score, subLevel) => {
    setValorScore(score);
    setModal(true);
    setSubLevel(subLevel);
  };

  return (
    <>
      <ModalConfirm modal={Modal}>
        {status.success ? (
          <ContentSuccess>
            <ContentICon>
              <IconSuccess />
            </ContentICon>
            <ContentText>Submitted successfully</ContentText>
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
                  <TextName>Student: {Item.email} </TextName>
                )}
                {Object.keys(Item).length !== 0 && SelectArray(Item.courses)}
              </div>
              {Data.map((elm, index) => (
                <>
                  <CardCheck>
                    <div
                      onClick={
                        elm.puntuacion > ScoreValue
                          ? () => {
                              ToggleItem(index);
                            }
                          : null
                      }
                      className="card_header"
                    >
                      <span>{elm.name_level}</span>
                      {elm.puntuacion > ScoreValue ? (
                        <IconRow rotate={toggle === index && true} />
                      ) : (
                        <IconLock />
                      )}
                    </div>
                    {toggle === index && (
                      <ContentsWrapper>
                        {elm.sub_level.map((elm) => (
                          <Wrapper>
                            {/* <input type="checkbox" onChange={ClickModal} /> */}
                            <ButtonCheck
                              active={false}
                              onClick={() =>
                                ClickModal(elm.puntuacion, elm.sublevel)
                              }
                            >
                              {false && <BiCheck />}
                            </ButtonCheck>
                            <span>{elm.sublevel}</span>
                          </Wrapper>
                        ))}
                      </ContentsWrapper>
                    )}
                  </CardCheck>
                </>
              ))}
            </ContentBox>
            <ContentBox>
              <Text bold>Student's Progress </Text>
              <Text size="1.5rem">Level:{levelSup} </Text>
              <ProgressComponent initialValor={ScoreValue} />
              <TextSublevel>{levelSup}</TextSublevel>
            </ContentBox>
            {/* <ButtonPlus onClick={() => ClickModal()}>
              <BsPlusCircleFill size={"1.5rem"} />
            </ButtonPlus> */}
          </>
        )}
      </BoxSearch>
    </>
  );
};
const ContentsWrapper = styled.div`
  margin-top: 0.8rem;
`;

const ButtonCheck = styled.button`
  height: 20px;
  width: 20px;
  background-color: ${({ active }) => (active ? "#4ADE80" : "transparent")};
  border: ${({ active }) => (active ? "none" : "2px solid #2563eb")};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.25rem;
  margin: 0;
`;

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  margin: 0.2rem 0;
  span {
    font-size: 1.2rem;
    margin-left: 0.25rem;
    line-height: normal;
  }

  /* input[type="checkbox"] {
    appearance: none;
    height: 15px;
    width: 15px;
    position: relative;
    cursor: pointer;
    transition: 0.5s;
  }
  input[type="checkbox"]:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #2563eb;
    border-radius: 4px;
  }
  input:checked[type="checkbox"]:before {
    border-left: none;
    border-top: none;
    width: 8px;
    border-color: #16a34a;
    transform: rotate(45deg);
    border-radius: 0;
  } */
`;

const ContentBox = styled.div`
  /* border: 1px solid red; */
  position: relative;
`;
const TitleSearch = styled.h2`
  font-size: 1.25rem;
  margin: 0;
  line-height: normal;
  font-weight: 700;
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
  margin-bottom: 2rem;
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
  margin: 0.5rem 0 0 0;
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
  background-color: #bbf7d0;
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
