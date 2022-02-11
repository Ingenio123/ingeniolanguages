import styled from "styled-components";
import { useState } from "react";
import ProgressComponent from "./ProgressComponent";
import Select from "react-select";

export const SearchComponenttwo = ({ data }) => {
  //states

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [Item, setItem] = useState({});

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
    console.log(value);
    setItem(value);
    clearInput();
  };

  const filterData = (id) => {
    // return courses.filter((x) => x._id === id);
    return Item.courses.find((x) => x._id === id);
  };
  const handleSelect = (select) => {
    const { value } = select;
    const datosfiltrados = filterData(value);
    // getData(datosfiltrados);
    // SlectIdiomCallback(select);
  };

  const SelectArray = (dataArray) => {
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
      />
    );
  };

  return (
    <>
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
        {Object.keys(Item).length !== 0 && (
          <TextName>Name or Email: {Item.email} </TextName>
        )}
        {Object.keys(Item).length !== 0 && SelectArray(Item.courses)}
        <Text>Student's level: A1 </Text>
        <ProgressComponent />
      </BoxSearch>
    </>
  );
};

const TextName = styled.span`
  font-size: 1.3rem;
  color: #1d4ed8;
  margin-top: 2rem;
`;

const Text = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #1d4ed8;
  margin-top: 2rem;
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
