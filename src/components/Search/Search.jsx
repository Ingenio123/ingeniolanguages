import { useRef } from "react";
import styled from "styled-components";
import ItemCard from "./ItemCard";
import { BiSearch, BiX } from "react-icons/bi";

function Search(props) {
  const InputSearch = useRef();
  const getSearchTerm = () => {
    props.searchKeyword(InputSearch.current.value);
    //  props.searchKeyword --> es una funcion que  por parametro  recive el value del input y lo setea a un State.
  };
  // handleClick
  const handleResetContext = () => {
    props.context.setcourse(undefined);
    InputSearch.current.value = "";
  };
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
    <BoxSearch>
      <InputSearchElement
        ref={InputSearch}
        type="text"
        placeholder={props.placeholder}
        value={props.term}
        //  props.term  -->  es el valor de state
        onChange={getSearchTerm}
      />
      {/* <SearchBtn className="btn-search">
        <BiSearch />
      </SearchBtn> */}
      <SearchBtn className="btn-cancel" onClick={() => handleResetContext()}>
        <BiX />
      </SearchBtn>
      {props.context.course ? null : (
        <>
          {renderListStudent.length > 0 && (
            <CardList dn={renderListStudent.length > 0 ? true : false}>
              {renderListStudent.length > 0 ? renderListStudent : ""}
            </CardList>
          )}
        </>
      )}
    </BoxSearch>
  );
}

export default Search;

const BoxSearch = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
  transition: all 0.3s ease;
`;
const InputSearchElement = styled.input`
  border: 1px solid silver;
  border-radius: 50px;
  /* border-bottom-left-radius: 0;
  border-bottom-right-radius: 0; */
  padding: 0 60px 0 20px;
  line-height: normal;
  font-size: 1rem;
  outline: 0;
  width: 100%;
  height: 100%;
`;
const SearchBtn = styled.div`
  &.btn-search {
    height: 30px;
    width: 30px;
    color: #fff;
    background-color: #3e4584;
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    font-size: 1.2rem;
    line-height: 30px;
    text-align: center;
    font-weight: 600;
    border-radius: 30px;
    cursor: pointer;
    :hover {
      background-color: #49529c;
    }
  }
  &.btn-cancel {
    position: absolute;
    top: 50%;
    right: 5px;
    height: 30px;
    width: 30px;
    background-color: #3e4584;
    color: #fff;
    font-size: 1.2rem;
    line-height: 30px;
    text-align: center;
    border-radius: 30px;
    transform: translateY(-50%);
    cursor: pointer;
    :hover {
      background-color: #49529c;
    }
  }
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
