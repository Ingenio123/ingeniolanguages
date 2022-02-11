import styled from "styled-components";
import { useState } from "react";
import useSearch from "../../../hooks/useSearch";

// component
import { Showdata } from "./Showdata";
export const SearchComponent = ({ data, placeholder }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [item, setItem] = useState({}); // item => {}
  //custom hooks
  const { reset, FirstDataGet, ResetSelect } = useSearch();
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

  const handleClickItem = (datos) => {
    clearInput();
    setItem(datos);
    FirstDataGet(datos);
    reset();
    ResetSelect();
  };

  return (
    <div>
      <SearchBox>
        <SearchInput
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
      </SearchBox>
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
      {Object.keys(item).length !== 0 && <Showdata datstudent={item} />}
    </div>
  );
};

const SearchBox = styled.div``;

const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  line-height: normal;
  border-radius: 4px;
  border: 1px solid silver;
  margin: 1rem 0 0 0;
`;
const DataResult = styled.div`
  border: 1px solid silver;
  z-index: 9;
  position: absolute;
  background-color: #fff;
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
