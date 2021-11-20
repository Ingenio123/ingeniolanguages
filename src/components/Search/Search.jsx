import { useRef } from "react";
import styled from "styled-components";
import ItemCard from "./ItemCard";
function Search(props) {
  const InputSearch = useRef();
  const getSearchTerm = () => {
    props.searchKeyword(InputSearch.current.value);
    //  props.searchKeyword --> es una funcion que  por parametro  recive el value del input y lo setea a un State.
  };
  // handleClick

  //  -----------
  const renderListStudent = props.listStudent.map((item) => {
    return (
      <ItemCard
        key={item._id}
        // data={!item.FirstName ? item.email : item.FirstName}
        data={item}
        courseContext={props.context}
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
      <CardList dn={renderListStudent.length > 0 ? true : false}>
        {renderListStudent.length > 0 ? renderListStudent : ""}
      </CardList>
    </>
  );
}

export default Search;

const InputSearchElement = styled.input`
  border: 1px solid silver;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 0.5rem 1rem;
  line-height: normal;
  font-size: 1rem;
`;
const CardList = styled.div`
  display: ${(dn) => (dn ? "block" : "none")};
  position: absolute;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  top: 33px;
  left: 0;
  width: 100%;
  /* bottom: 0; */
  border: 1px solid silver;
  padding: 1rem 0.5rem;
  background-color: #fff;
  z-index: 9;
`;
