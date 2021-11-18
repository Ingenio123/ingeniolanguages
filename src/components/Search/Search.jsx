import { useRef } from "react";
import styled from "styled-components";
import ItemCard from "./ItemCard";
function Search(props) {
  const InputSearch = useRef();
  const getSearchTerm = () => {
    props.searchKeyword(InputSearch.current.value);
    //  props.searchKeyword --> es una funcion que  por parametro  recive el value del input y lo setea a un State.
  };

  //  -----------
  const renderListStudent = props.listStudent.map((item) => {
    return (
      <ItemCard
        key={item._id}
        // data={!item.FirstName ? item.email : item.FirstName}
        data={item}
      />
    );
  });
  return (
    <>
      <InputSearchElement
        ref={InputSearch}
        type="text"
        placeholder={props.placeholder}
        value={props.term}
        //  props.term  -->  es el valor de state
        onChange={getSearchTerm}
      />
      <CardList>
        {renderListStudent.length > 0 ? renderListStudent : ""}
      </CardList>
    </>
  );
}

export default Search;

const InputSearchElement = styled.input`
  border-radius: 10px;
  border: 1px solid silver;
  padding: 0.5rem 1rem;
  line-height: normal;
  font-size: 1rem;
`;
const CardList = styled.div`
  position: absolute;
  bottom: 0;
  border-radius: 5px;
  border: 1px solid silver;
  padding: 1rem 0.5rem;
`;
