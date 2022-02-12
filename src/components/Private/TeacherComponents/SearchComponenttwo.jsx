import styled from "styled-components";
import { useState } from "react";
import ProgressComponent from "./ProgressComponent";
import Select from "react-select";
import useProgress from "../../../hooks/useProgress";
import { BsPlusCircleFill } from "react-icons/bs";
import { ModalConfirm } from "./modal";

export const SearchComponenttwo = ({ data }) => {
  //states
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [Item, setItem] = useState({});
  const [Modal, setModal] = useState(false);

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
    NotShow,
    AddCourse,
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
      initialScore(valores.score);
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
    initialScore(score);
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

  const ClickModal = () => {
    setModal(true);
  };

  const ConfirmModala = () => {
    AddScore(33, Item);
    setModal((prev) => !prev);
    // NotShow(); //es para olcultar todo el component
  };

  return (
    <>
      <ModalConfirm modal={Modal}>
        <Button primary={true} onClick={ConfirmModala}>
          Confirm
        </Button>
        <Button onClick={() => setModal((prev) => !prev)}>Cancel</Button>
      </ModalConfirm>
      <BoxSearch>
        <InputSearch
          onChange={handleFilter}
          value={wordEntered}
          placeholder="Search Student"
        />
        {filteredData.length !== 0 && (
          <DataResult>
            {filteredData.slice(0, 15).map((value, key) => (
              <ItemResult
                onClick={() => {
                  handleClickItem(value);
                }}
              >
                {value.email}
              </ItemResult>
            ))}
          </DataResult>
        )}
        {Show && (
          <>
            {Object.keys(Item).length !== 0 && (
              <TextName>Name or Email: {Item.email} </TextName>
            )}
            {Object.keys(Item).length !== 0 && SelectArray(Item.courses)}
            <Text>Student's level: {levelSup} </Text>
            <ProgressComponent initialValor={ScoreValue} />
            {/* <TextSublevel>A1.1</TextSublevel> */}
            <ButtonPlus onClick={() => ClickModal()}>
              <BsPlusCircleFill size={"1.5rem"} />
            </ButtonPlus>
          </>
        )}
      </BoxSearch>
    </>
  );
};

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
  bottom: 70px;
  margin: 0;
  color: #2563eb;
`;

const TextIdiom = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1d4ed8;
  margin: 0;
`;

const TextName = styled.span`
  font-size: 1.3rem;
  color: #1d4ed8;
  margin-top: 2rem;
`;

const Text = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #1d4ed8;
  margin: 1rem 0;
`;

const SelectIdiom = styled(Select)`
  width: 30%;
  margin-top: 1rem;
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
  width: 30%;
  padding: 0.5rem;
  z-index: 999;
`;
const BoxSearch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
  align-items: center;
`;

const InputSearch = styled.input`
  padding: 0.5rem;
  border: 0.5px solid silver;
  outline: none;
  border-radius: 5px;
  font-size: 1rem;
  line-height: normal;
  width: 30%;
  ::placeholder {
    color: silver;
  }
  :focus {
    border: 2px solid #2989ff;
  }
`;
